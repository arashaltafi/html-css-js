const pageTitle = "Spa سبزلرن";

const router = {
  404: {
    template: "http://localhost:5500/js-sabzlearn/sample3/404.html",
    title: `پیدا نشد | ${pageTitle}`,
  },
  "/js-sabzlearn/sample3": {
    template: "http://localhost:5500/js-sabzlearn/sample3/index.html",
    title: `خانه | ${pageTitle}`,
  },
  "/js-sabzlearn/sample3/blog.html": {
    template: "http://localhost:5500/js-sabzlearn/sample3/blog.html",
    title: `بلاگ | ${pageTitle}`,
  },
  "/js-sabzlearn/sample3/courses.html": {
    template: "http://localhost:5500/js-sabzlearn/sample3/courses.html",
    title: `دوره‌ها | ${pageTitle}`,
  },
  "/js-sabzlearn/sample3/product.html": {
    template: "http://localhost:5500/js-sabzlearn/sample3/product.html",
    title: `جزئیات دوره | ${pageTitle}`,
  },
  "/js-sabzlearn/sample3/article.html": {
    template: "http://localhost:5500/js-sabzlearn/sample3/article.html",
    title: `مقاله | ${pageTitle}`,
  },
  "/js-sabzlearn/sample3/cart.html": {
    template: "http://localhost:5500/js-sabzlearn/sample3/cart.html",
    title: `سبد خرید | ${pageTitle}`,
  },
};

export default router;
