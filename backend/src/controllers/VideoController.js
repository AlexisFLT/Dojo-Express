const listVideos = (req, res) => {
  res.send({
    id: 2,
    source: "cristaline",
    website: "toto",
    tags: "toto2",
    title: "toto3",
  });
};

module.exports = {
  listVideos,
};
