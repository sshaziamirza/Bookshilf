const allowedOrigins = ['http://example.com', 'http://localhost:3000'];
// eslint-disable-next-line no-undef
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));
