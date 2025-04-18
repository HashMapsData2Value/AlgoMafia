export const RING_SIG_NONCE_LENGTH = 32
export const RING_SIG_CHALL_LENGTH = 32
export const BLS12381G1_LENGTH = 96
export const BLS12381_CURVE_ORDER_HEX = '0x73eda753299d7d483339d80809a1d80553bda402fffe5bfeffffffff00000001'
export const BLS12381_FIELD_MODULUS_HEX =
  '0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaaab'
export const BLS12381G1_BASEPOINT_BYTES =
  '0x17f1d3a73197d7942695638c4fa9ac0fc3688c4f9774b905a14e3a3f171bac586c55e83ff97a1aeffb3af00adb22c6bb08b3f481e3aaa0f1a09e30ed741d8ae4fcf5e095d5d00af600db18cb2c04b3edd03cc744a2888ae40caa232946c5e7e1'
export const RING_SIG_LINKS_AMNT = 6

export const ZERO_ADDRESS = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY5HFKQ'

export const stateJoinGameLobby = 0
export const stateAssignRole = stateJoinGameLobby + 1
export const stateDayStageVote = stateAssignRole + 1
export const stateDayStageEliminate = stateDayStageVote + 1
export const stateDayStageUnmasking = stateDayStageEliminate + 1
export const stateNightStageMafiaCommit = stateDayStageUnmasking + 1
export const stateNightStageDoctorCommit = stateNightStageMafiaCommit + 1
export const stateDawnStageMafiaReveal = stateNightStageDoctorCommit + 1
export const stateDawnStageDoctorReveal = stateDawnStageMafiaReveal + 1
export const stateDawnStageDeadOrSaved = stateDawnStageDoctorReveal + 1
export const stateDawnStageUnmasking = stateDawnStageDeadOrSaved + 1
export const stateGameOver = stateDawnStageUnmasking + 1

export const jdenticonConfig = {
  backColor: '#000000',
  hues: undefined,
  lightness: {
    color: [0.4, 0.8],
    grayscale: [0.3, 0.9],
  },
  saturation: {
    color: 0.8,
    grayscale: 0.5,
  },
}
