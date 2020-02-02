const converseAngleSetSingleXfirst = function(cube, angleFace, p1, p2, p3, c1, c2, c3) {
  let result = 0;
  if (angleFace === 1) {
    cube[p1] = c3;
    cube[p2] = c1;
    cube[p3] = c2;
  } else if (angleFace === 2) {
    cube[p1] = c2;
    cube[p2] = c3;
    cube[p3] = c1;
  } else if (angleFace === 3) {
    cube[p1] = c1;
    cube[p2] = c2;
    cube[p3] = c3;
  } else {
    result = 1;
  }
  return result;
};

const converseAngleSetSingleYfirst = function(cube, angleFace, p1, p2, p3, c1, c2, c3) {
  let result = 0;
  if (angleFace === 2) {
    cube[p1] = c3;
    cube[p2] = c1;
    cube[p3] = c2;
  } else if (angleFace === 1) {
    cube[p1] = c2;
    cube[p2] = c3;
    cube[p3] = c1;
  } else if (angleFace === 3) {
    cube[p1] = c1;
    cube[p2] = c2;
    cube[p3] = c3;
  } else {
    result = 1;
  }
  return result;
};

const converseAngleSetXfirst = function(cube, angle, angleFace, f1, f2, f3) {
  let num = 0;
  if (angle === 1) {
    num |= converseAngleSetSingleXfirst(cube, angleFace, f1, f2, f3, 1, 2, 3);
  } else if (angle === 2) {
    num |= converseAngleSetSingleXfirst(cube, angleFace, f1, f2, f3, 1, 3, 4);
  } else if (angle === 3) {
    num |= converseAngleSetSingleXfirst(cube, angleFace, f1, f2, f3, 1, 4, 5);
  } else if (angle === 4) {
    num |= converseAngleSetSingleXfirst(cube, angleFace, f1, f2, f3, 1, 5, 2);
  } else if (angle === 5) {
    num |= converseAngleSetSingleXfirst(cube, angleFace, f1, f2, f3, 6, 3, 2);
  } else if (angle === 6) {
    num |= converseAngleSetSingleXfirst(cube, angleFace, f1, f2, f3, 6, 4, 3);
  } else if (angle === 7) {
    num |= converseAngleSetSingleXfirst(cube, angleFace, f1, f2, f3, 6, 5, 4);
  } else if (angle === 8) {
    num |= converseAngleSetSingleXfirst(cube, angleFace, f1, f2, f3, 6, 2, 5);
  } else {
    num |= 2;
  }
  return num;
};

const converseAngleSetYfirst = function(cube, angle, angleFace, f1, f2, f3) {
  let num = 0;
  if (angle === 1) {
    num |= converseAngleSetSingleYfirst(cube, angleFace, f1, f2, f3, 1, 2, 3);
  } else if (angle === 2) {
    num |= converseAngleSetSingleYfirst(cube, angleFace, f1, f2, f3, 1, 3, 4);
  } else if (angle === 3) {
    num |= converseAngleSetSingleYfirst(cube, angleFace, f1, f2, f3, 1, 4, 5);
  } else if (angle === 4) {
    num |= converseAngleSetSingleYfirst(cube, angleFace, f1, f2, f3, 1, 5, 2);
  } else if (angle === 5) {
    num |= converseAngleSetSingleYfirst(cube, angleFace, f1, f2, f3, 6, 3, 2);
  } else if (angle === 6) {
    num |= converseAngleSetSingleYfirst(cube, angleFace, f1, f2, f3, 6, 4, 3);
  } else if (angle === 7) {
    num |= converseAngleSetSingleYfirst(cube, angleFace, f1, f2, f3, 6, 5, 4);
  } else if (angle === 8) {
    num |= converseAngleSetSingleYfirst(cube, angleFace, f1, f2, f3, 6, 2, 5);
  } else {
    num |= 2;
  }
  return num;
};

const converseLineSetSingle = function(cube, lineFace, p1, p2, c1, c2) {
  let result = 0;
  if (lineFace === 1) {
    cube[p1] = c1;
    cube[p2] = c2;
  } else if (lineFace === 2) {
    cube[p1] = c2;
    cube[p2] = c1;
  } else {
    result = 3;
  }
  return result;
};

const converseLineSet = function(cube, line, lineFace, p1, p2) {
  let num = 0;
  if (line === 1) {
    num |= converseLineSetSingle(cube, lineFace, p1, p2, 1, 2);
  } else if (line === 2) {
    num |= converseLineSetSingle(cube, lineFace, p1, p2, 1, 3);
  } else if (line === 3) {
    num |= converseLineSetSingle(cube, lineFace, p1, p2, 1, 4);
  } else if (line === 4) {
    num |= converseLineSetSingle(cube, lineFace, p1, p2, 1, 5);
  } else if (line === 5) {
    num |= converseLineSetSingle(cube, lineFace, p1, p2, 2, 3);
  } else if (line === 6) {
    num |= converseLineSetSingle(cube, lineFace, p1, p2, 4, 3);
  } else if (line === 7) {
    num |= converseLineSetSingle(cube, lineFace, p1, p2, 4, 5);
  } else if (line === 8) {
    num |= converseLineSetSingle(cube, lineFace, p1, p2, 2, 5);
  } else if (line === 9) {
    num |= converseLineSetSingle(cube, lineFace, p1, p2, 6, 2);
  } else if (line === 10) {
    num |= converseLineSetSingle(cube, lineFace, p1, p2, 6, 3);
  } else if (line === 11) {
    num |= converseLineSetSingle(cube, lineFace, p1, p2, 6, 4);
  } else if (line === 12) {
    num |= converseLineSetSingle(cube, lineFace, p1, p2, 6, 5);
  } else {
    num = 4;
  }
  return num;
};

const converseChangeFaceAgain = function(cube, a1, a2, a3, a4) {
  let num = cube[a4];
  cube[a4] = cube[a3];
  cube[a3] = cube[a2];
  cube[a2] = cube[a1];
  cube[a1] = num;
};

const converseToPaperType = function(cubeOutputDataDebug) {
  let array = new Uint8Array(55);
  let num = 0;
  let array2 = new Uint8Array(8);
  let array3 = new Uint8Array(8);
  let array4 = new Uint8Array(12);
  let array5 = new Uint8Array(12);
  if (cubeOutputDataDebug.length !== 20) {
    for (let i = 0; i < 55; i++) {
      array[i] = 0;
    }
    return array;
  }
  array2[0] = cubeOutputDataDebug[0] >> 4;
  array2[1] = cubeOutputDataDebug[0] & 15;
  array2[2] = cubeOutputDataDebug[1] >> 4;
  array2[3] = cubeOutputDataDebug[1] & 15;
  array2[4] = cubeOutputDataDebug[2] >> 4;
  array2[5] = cubeOutputDataDebug[2] & 15;
  array2[6] = cubeOutputDataDebug[3] >> 4;
  array2[7] = cubeOutputDataDebug[3] & 15;
  array3[0] = cubeOutputDataDebug[4] >> 4;
  array3[1] = cubeOutputDataDebug[4] & 15;
  array3[2] = cubeOutputDataDebug[5] >> 4;
  array3[3] = cubeOutputDataDebug[5] & 15;
  array3[4] = cubeOutputDataDebug[6] >> 4;
  array3[5] = cubeOutputDataDebug[6] & 15;
  array3[6] = cubeOutputDataDebug[7] >> 4;
  array3[7] = cubeOutputDataDebug[7] & 15;
  array4[0] = cubeOutputDataDebug[8] >> 4;
  array4[1] = cubeOutputDataDebug[8] & 15;
  array4[2] = cubeOutputDataDebug[9] >> 4;
  array4[3] = cubeOutputDataDebug[9] & 15;
  array4[4] = cubeOutputDataDebug[10] >> 4;
  array4[5] = cubeOutputDataDebug[10] & 15;
  array4[6] = cubeOutputDataDebug[11] >> 4;
  array4[7] = cubeOutputDataDebug[11] & 15;
  array4[8] = cubeOutputDataDebug[12] >> 4;
  array4[9] = cubeOutputDataDebug[12] & 15;
  array4[10] = cubeOutputDataDebug[13] >> 4;
  array4[11] = cubeOutputDataDebug[13] & 15;
  for (let b = 0; b < 12; b += 1) {
    array5[b] = 0;
  }
  if ((cubeOutputDataDebug[14] & 128) !== 0) {
    array5[0] = 2;
  } else {
    array5[0] = 1;
  }
  if ((cubeOutputDataDebug[14] & 64) !== 0) {
    array5[1] = 2;
  } else {
    array5[1] = 1;
  }
  if ((cubeOutputDataDebug[14] & 32) !== 0) {
    array5[2] = 2;
  } else {
    array5[2] = 1;
  }
  if ((cubeOutputDataDebug[14] & 16) !== 0) {
    array5[3] = 2;
  } else {
    array5[3] = 1;
  }
  if ((cubeOutputDataDebug[14] & 8) !== 0) {
    array5[4] = 2;
  } else {
    array5[4] = 1;
  }
  if ((cubeOutputDataDebug[14] & 4) !== 0) {
    array5[5] = 2;
  } else {
    array5[5] = 1;
  }
  if ((cubeOutputDataDebug[14] & 2) !== 0) {
    array5[6] = 2;
  } else {
    array5[6] = 1;
  }
  if ((cubeOutputDataDebug[14] & 1) !== 0) {
    array5[7] = 2;
  } else {
    array5[7] = 1;
  }
  if ((cubeOutputDataDebug[15] & 128) !== 0) {
    array5[8] = 2;
  } else {
    array5[8] = 1;
  }
  if ((cubeOutputDataDebug[15] & 64) !== 0) {
    array5[9] = 2;
  } else {
    array5[9] = 1;
  }
  if ((cubeOutputDataDebug[15] & 32) !== 0) {
    array5[10] = 2;
  } else {
    array5[10] = 1;
  }
  if ((cubeOutputDataDebug[15] & 16) !== 0) {
    array5[11] = 2;
  } else {
    array5[11] = 1;
  }
  array[32] = 1;
  array[41] = 2;
  array[50] = 3;
  array[14] = 4;
  array[23] = 5;
  array[5] = 6;
  num |= converseAngleSetXfirst(array, array2[0], array3[0], 34, 43, 54);
  num |= converseAngleSetYfirst(array, array2[1], array3[1], 36, 52, 18);
  num |= converseAngleSetXfirst(array, array2[2], array3[2], 30, 16, 27);
  num |= converseAngleSetYfirst(array, array2[3], array3[3], 28, 25, 45);
  num |= converseAngleSetYfirst(array, array2[4], array3[4], 1, 48, 37);
  num |= converseAngleSetXfirst(array, array2[5], array3[5], 3, 12, 46);
  num |= converseAngleSetYfirst(array, array2[6], array3[6], 9, 21, 10);
  num |= converseAngleSetXfirst(array, array2[7], array3[7], 7, 39, 19);
  num |= converseLineSet(array, array4[0], array5[0], 31, 44);
  num |= converseLineSet(array, array4[1], array5[1], 35, 53);
  num |= converseLineSet(array, array4[2], array5[2], 33, 17);
  num |= converseLineSet(array, array4[3], array5[3], 29, 26);
  num |= converseLineSet(array, array4[4], array5[4], 40, 51);
  num |= converseLineSet(array, array4[5], array5[5], 15, 49);
  num |= converseLineSet(array, array4[6], array5[6], 13, 24);
  num |= converseLineSet(array, array4[7], array5[7], 42, 22);
  num |= converseLineSet(array, array4[8], array5[8], 4, 38);
  num |= converseLineSet(array, array4[9], array5[9], 2, 47);
  num |= converseLineSet(array, array4[10], array5[10], 6, 11);
  num |= converseLineSet(array, array4[11], array5[11], 8, 20);
  converseChangeFaceAgain(array, 1, 7, 9, 3);
  converseChangeFaceAgain(array, 4, 8, 6, 2);
  converseChangeFaceAgain(array, 37, 19, 10, 46);
  converseChangeFaceAgain(array, 38, 20, 11, 47);
  converseChangeFaceAgain(array, 39, 21, 12, 48);
  converseChangeFaceAgain(array, 40, 22, 13, 49);
  converseChangeFaceAgain(array, 41, 23, 14, 50);
  converseChangeFaceAgain(array, 42, 24, 15, 51);
  converseChangeFaceAgain(array, 43, 25, 16, 52);
  converseChangeFaceAgain(array, 44, 26, 17, 53);
  converseChangeFaceAgain(array, 45, 27, 18, 54);
  converseChangeFaceAgain(array, 34, 28, 30, 36);
  converseChangeFaceAgain(array, 31, 29, 33, 35);
  if (num !== 0) {
    for (let j = 0; j < 55; j++) {
      array[j] = 0;
    }
  }
  return array;
};

const cubeDataMixDecode = function(mixData) {
  let array = new Uint8Array(20);
  let array2 = [
    80,
    175,
    152,
    32,
    170,
    119,
    19,
    137,
    218,
    230,
    63,
    95,
    46,
    130,
    106,
    175,
    163,
    243,
    20,
    7,
    167,
    21,
    168,
    232,
    143,
    175,
    42,
    125,
    126,
    57,
    254,
    87,
    217,
    91,
    85,
    215
  ];
  if (mixData.byteLength !== 20) {
    return mixData;
  }
  if (mixData.getUint8(18) !== 167) {
    return mixData;
  }
  let b = mixData.getUint8(19);
  b &= 15;
  let b2 = mixData.getUint8(19);
  b2 = b2 >> 4;
  for (let b3 = 0; b3 < 19; b3 += 1) {
    array[b3] = mixData.getUint8(b3);
    let array3 = array;
    let b4 = b3;
    array3[b4] = array3[b4] - array2[b + b3];
    let array4 = array;
    let b5 = b3;
    array4[b5] = array4[b5] - array2[b2 + b3];
  }
  return array;
};

export const parseCube = bytes => {
  const mixerDataDecoded = cubeDataMixDecode(bytes);
  const paperTypeCube = converseToPaperType(mixerDataDecoded);
  return Array.from(paperTypeCube).slice(1);
};
