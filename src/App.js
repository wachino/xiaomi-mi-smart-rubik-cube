import React from 'react';

import {
  connectToBluetoothDevice,
  startNotifications,
  disconnectFromBluetoothDevice
} from './helpers/bluetooth';
import { parseCube } from './helpers/cubeParser';
import './App.css';

const faceColorMap = ['g', 'y', 'r', 'w', 'o', 'b'];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cubeState: 'bbbbbbbbboooooooooyyyyyyyyygggggggggrrrrrrrrrwwwwwwwww' };
    this.device = null;
  }
  componentWillUnmount() {
    disconnectFromBluetoothDevice(this.device);
  }

  render() {
    return (
      <div className="App">
        <img
          alt="Rubik cube"
          src={`http://cube.crider.co.uk/visualcube.php?fmt=svg&r=x-90y-120x-20&size=300&fc=${this.state.cubeState}`}
        />
        <div>
          <button
            onClick={async () => {
              const { server, device } = await connectToBluetoothDevice();
              this.device = device;
              const characteristic = await startNotifications(server);
              characteristic.addEventListener('characteristicvaluechanged', event => {
                const { value } = event.target; // 20 bytes sent by the cube
                const cubeState = parseCube(value) // We parse it to an array of 54 colors (1...6)
                  .map(faceletColor => faceColorMap[faceletColor - 1])
                  .join('');
                this.setState({ cubeState });
              });
              device.addEventListener('gattserverdisconnected', () => {
                disconnectFromBluetoothDevice(device);
              });
            }}
          >
            connect
          </button>
        </div>
      </div>
    );
  }
}

export default App;
