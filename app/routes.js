//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require("govuk-prototype-kit");
const router = govukPrototypeKit.requests.setupRouter();

// Add your routes here

router.get("/sortable-table", function (req, res) {
  const page = parseInt(req.query.page) || 1;
  res.render("sortable-table", {
    query: req.query,
  });
});
