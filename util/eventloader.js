const ktriaevent = (event) => require(`../events/${event}`);
module.exports = client => {
client.on(`ready`, () => ktriaevent(`ready`)(client));
client.on(`message`, ktriaevent(`message`));
}