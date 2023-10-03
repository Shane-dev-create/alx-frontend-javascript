export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);

  // check if position is outside of range
  if (position >= length) throw new Error('Position outside range');
  // set the new value in the desired position
  dv.setInt8(position, value);

  return view;
}
