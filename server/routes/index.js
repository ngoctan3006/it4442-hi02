import authRoutes from './auth';
import workRoutes from './work';

export default function routes(app) {
  app.use('/api/v1/auth', authRoutes);
  app.use('/api/v1/work', workRoutes);
  app.get('/', (req, res) => {
    res.send('App is running!');
  });
}
