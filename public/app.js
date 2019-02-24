$(document).ready(function() {
  var articleContainer = $(".article-container");

  //Scrape
  $(document).on("click", ".scrape-new", function() {
    $.get("/scrape").then(function(data) {
      console.log(location);
      $.get("/").then(function(data) {
        location.reload();
      });
    });
  });

  //Delete
  $(document).on("click", ".deleteArticle", function() {
    var thisId = $(this).attr("data-articleid");

    $.ajax({
      method: "POST",
      url: "/deleteFromSaved/?id=" + thisId,
      data: {
        saved: false
      }
    })
      // With that done
      .then(function(data) {
        // Log the response
        console.log(data);
      });
  });

  // When you click the savenote button
  $(document).on("click", ".savedArticle", function() {
    // Grab the id associated with the article from the submit button
    var thisId = $(this).attr("data-articleid");
    console.log(thisId);
    // Run a POST request to change the note, using what's entered in the inputs
    $.ajax({
      method: "POST",
      url: "/savedArticles/?id=" + thisId,
      data: {
        saved: true
      }
    })
      // With that done
      .then(function(data) {
        // Log the response
        console.log(data);
      });
  });
});
