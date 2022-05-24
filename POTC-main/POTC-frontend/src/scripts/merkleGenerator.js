import { MerkleTree } from 'merkletreejs';
import keccak256 from 'keccak256';

let whiteListAddresses = [
  '0x50496F9745AC4Bd53228DFf7b3F19A02D38b6c4f',
  '0xB0AD4bF6eAb366Bc14d55Ae81d5BBc9f11B4a73a',
  '0x6b449AeF34AA59c3D6A5971BA9F6B1dBe55b36dD',
  '0x85241D91C484299d2A2A9BC7c2A32Ee53D76E066',
  '0xd106F36FDe84cD1c337787016e57b592BAc9e015',
  '0x5fdF8058129f648E85CFa8e04d0f6dA3567a186B',
  '0x477b32e002e69c4Db9Bbd5E58873a1bFe122CF71',
  '0x4Cb4BF8160a161F3d9F74678140221d6F77a7Ab9',
  '0xb7eE3654dDbf662aaa84981F90dEEE22591f302f',
  '0xDF4ECB919A51f8B1700DA10F354DDb5B9440a183',
  '0x9Db929C923379A69d5FB3f1A4F2294937C70fa4E',
  '0xAA15Ce986f879108806d87C625495DECB6147e3E',
];

const leafNodes = whiteListAddresses.map(address => keccak256(address));
const merkleTree = new MerkleTree(leafNodes, keccak256, {
  sortPairs: true,
});
const rootHash = merkleTree.getRoot();

export const verifyMerkleProof = address => {
  let hashedAddress = keccak256(address);
  let proof = merkleTree.getHexProof(hashedAddress);
  return {
    proof: proof,
    allowedMint: merkleTree.verify(proof, hashedAddress, rootHash),
  };
};
