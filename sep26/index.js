require("./env");
const app = require("./app");

//const { ArticleDAO, UserDAO } = require("./DAO");

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`KWEB Project: Listening on port ${port}.`);

  /*(async () => {
    await UserDAO.create("username1", "password1", "nickname1");
    await UserDAO.create("username2", "password2", "nickname2");
    await ArticleDAO.create("title1", "content1", { id: 1 });
    await ArticleDAO.create("title2", "content2", { id: 2 });
    await ArticleDAO.create("title3", "content3", { id: 3 });
    console.log("Done!");
  })();*/
});
