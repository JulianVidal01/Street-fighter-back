const responseMiddleware = (req, res, next) => {
  if (res.err) {
    const { status = 500, message = 'Server error' } = res.err;
    res.status(status).json({ error: true, message });
    return;
  } else if (res.data) {
    const { status = 200, result } = res.data;
    res.status(status).json(result);
  } else {
    next();
  }
};

export { responseMiddleware };
