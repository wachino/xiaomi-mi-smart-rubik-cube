import React from 'react';
import {
  connectToBluetoothDevice,
  startNotifications,
  isWebBluetoothSupported,
  disconnectFromBluetoothDevice,
} from './helpers/bluetooth';
import { parseCube } from './helpers/cubeParser';
import * as SRVisualizer from 'sr-visualizer';
import './App.css';

const faceColorMap = ['g', 'y', 'r', 'w', 'o', 'b'];

const App = () => {
  const [cubeState, setCubeState] = React.useState(
    'bbbbbbbbboooooooooyyyyyyyyygggggggggrrrrrrrrrwwwwwwwww'
  );
  const [device, setDevice] = React.useState(null);

  React.useEffect(() => {
    // returned function will be called on component unmount
    return () => {
      disconnectFromBluetoothDevice(device);
    };
  }, [device]);

  React.useEffect(() => {
    const imgContainer = document.querySelector('#imageContainer');
    imgContainer.innerHTML = '';
    SRVisualizer.cubeSVG(
      imgContainer,
      `visualcube.php?fmt=svg&r=x-90y-120x-20&size=300&fc=${cubeState}`
    );
  }, [cubeState]);

  return (
    <div className="App">
      <div>
        <div id="imageContainer"></div>
        <button
          onClick={async () => {
            // a quick check for bluetooth support in the browser
            if (!isWebBluetoothSupported) {
              alert('Browser does not support bluetooth');
              return;
            }

            const { server, device: connectedDevice } = await connectToBluetoothDevice();
            setDevice(connectedDevice);
            const characteristic = await startNotifications(server);
            characteristic.addEventListener('characteristicvaluechanged', (event) => {
              const { value } = event.target; // 20 bytes sent by the cube
              const newCubeState = parseCube(value) // We parse it to an array of 54 colors (1...6)
                .map((faceletColor) => faceColorMap[faceletColor - 1])
                .join('');
              setCubeState(newCubeState);
            });
            connectedDevice.addEventListener('gattserverdisconnected', () => {
              disconnectFromBluetoothDevice(connectedDevice);
            });
          }}
        >
          connect
        </button>
      </div>
    </div>
  );
};

export default App;
