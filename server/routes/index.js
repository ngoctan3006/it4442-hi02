import authRoutes from './auth';

export default function routes(app) {
  app.use('/api/v1/auth', authRoutes);
  app.get('/', (req, res) => {
    res.send('App is running!');
  });
}
