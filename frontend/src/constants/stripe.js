const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_test_51LOGYxLNZCIg5vWk3qWpkHCX9Dgq9HwHYGkBASzas75wc3s77tFAjkBPxZAWd5Xf59eOKLiryrfTypw6sSTEnx0Y00a4nq3kan'
  : 'pk_test_51LOGYxLNZCIg5vWk3qWpkHCX9Dgq9HwHYGkBASzas75wc3s77tFAjkBPxZAWd5Xf59eOKLiryrfTypw6sSTEnx0Y00a4nq3kan';

export default STRIPE_PUBLISHABLE;