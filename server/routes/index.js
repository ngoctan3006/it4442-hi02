export default function routes(app) {
  app.get('/', (req, res) => {
    res.send('App is running!');
  });
}
