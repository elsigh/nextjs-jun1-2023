export default function handler(req, res) {
  console.log("I'm a pages test");
  res.status(200).json({ name: "Pages" });
}
