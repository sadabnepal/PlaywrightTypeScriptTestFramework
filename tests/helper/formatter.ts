export const bufferToParsedString = (data: any) => {
    let dataString = Buffer.from(data, 'base64').toString();
    return JSON.parse(dataString);
}