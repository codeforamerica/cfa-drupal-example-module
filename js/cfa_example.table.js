/**
 * @file
 * Javascript file for CfA Example module.
 *
 * For general Drupal Javascript API help, see the 
 * following:
 * http://drupal.org/node/751744
 */

// Scoping for jQuery.
(function ($) {
  // Drupal Javascript uses a Behaviors system, similar to hooks but more
  // simple.  Simply by attaching a function to Drupal.bheaviors, it will get
  // called each time Drupal.attachBehaviors() is called, like when the page is
  // loaded or when a new element is added to the DOM (though it is up to
  // the author to call attachBehaviors()).
  //
  // Since this called very often, it is important to mark things
  // as "done".  This is usally accomplished by uisng classes.
  Drupal.behaviors.cfaExample = {
    attach: function(context, settings) {
      // Get the value that was sent from the server.
      var tableID = settings.cfa_example.tableID;

      // Find the table ID
      $('#' + tableID + ':not(.cfa-example-processed)', context).each(function () {
        var $table = $(this);
        
        // Mark as processed.  See above.
        $table.addClass('cfa-example-processed');
        
        // Add an each to get the current background color.
        // Then add a hover.  This would normally be done with
        // classes.
        $table.find('tr').each(function() {
          $(this).data('cfa-background-color', $(this).css('background-color'));
        })
        .hover(function() {
          $(this).css('background-color', '#FFFBCC');
        },
        function() {
          $(this).css('background-color', $(this).data('cfa-background-color'));
        });
      });
    }
  };
})(jQuery);