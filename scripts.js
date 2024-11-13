$(document).ready(function() {
  // Initially hide the writing portfolio div and mark "Code Portfolio" as active
  $("#writePortDiv").hide();
  $("#codePort").addClass("portfolioActive");

  // Event handler for clicking on "Code Portfolio"
  $("#codePort").click(function() {
      if (!$(this).hasClass("portfolioActive")) {
          $(".portfolioChoice").removeClass("portfolioActive");
          $(this).addClass("portfolioActive");
          $("#codePortDiv").slideDown();
          $("#writePortDiv").slideUp();
      }
  });

  // Event handler for clicking on "Writing Portfolio"
  $("#writePort").click(function() {
      if (!$(this).hasClass("portfolioActive")) {
          $(".portfolioChoice").removeClass("portfolioActive");
          $(this).addClass("portfolioActive");
          $("#codePortDiv").slideUp();
          $("#writePortDiv").slideDown();
      }
  });
  //-----------------------------------------------------------
  //-----------------------------------------------------------
  //-----------------------------------------------------------
  //-----------------------------------------------------------
  
});