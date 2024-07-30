
const createInt8TypedArray = (length, position, value) => {
    const buffer = new ArrayBuffer(length);
    const view = new DataView(buffer);
    
    if (position >= 0 && position < length) {
        view.setInt8(position, value);
    } else {
        throw new Error('Position outside range');
    }

    return view;
};

export default createInt8TypedArray;
