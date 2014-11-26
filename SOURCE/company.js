#! /usr/bin/env node
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

                         #######  #######   #####
                            #     #     #  #     #
                            #     #     #  #
                            #     #     #  #
                            #     #     #  #
                            #     #     #  #     #
                            #     #######   #####

  _TABLE_OF_CONTENT     - Table of Content
  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  ### DESCRIPTION

    _company    - company
    _USAGE_API          - Describe the interface of this module
    _SANITIZE           - validate & sanitize given arguments
    _MODULE             - implement the logic of this module
    _EXPORT_API         - specify the api of a return object
    _CONTEXT            - define all dependencies of this module

  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  ### ROADMAP

    @JOB: adapt TOC according to project needs
    @JOB: decide dropin vs configurable in 'npmgenerate-cjs'

                                              (by npmgenerate-cjs version 0.2.1)
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
(function COMMONJS_MODULE_EXPORTER (FACTORY) {
  'use strict';
  module.exports = FACTORY(/*with predefined set of PARAMS*/); // DROPIN
  // module.exports = FACTORY; // CONFIGURABLE
})(
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

 #    #   ####   #####   #    #  #       ######  #    #    ##    #    #  ######
 ##  ##  #    #  #    #  #    #  #       #       ##   #   #  #   ##  ##  #
 # ## #  #    #  #    #  #    #  #       #####   # #  #  #    #  # ## #  #####
 #    #  #    #  #    #  #    #  #       #       #  # #  ######  #    #  #
 #    #  #    #  #    #  #    #  #       #       #   ##  #    #  #    #  #
 #    #   ####   #####    ####   ######  ######  #    #  #    #  #    #  ######

  _TABLE_OF_CONTENT _company
  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  ### DESCRIPTION

    ...

  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  ### ROADMAP

    @JOB: replace ascii banner with module name
      http://www.patorjk.com/software/taag/#p=display&h=0&v=0&f=Banner

:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
  (function MODULE_company (
    // to shield MODULE from overriden 'undefined' and global object pollution
    ///////////////////////////////////////////////////////////////////////////
    META, ENTITIES, DEPs, window, global, undefined
    ///////////////////////////////////////////////////////////////////////////
  ) {
    'use strict';
    function company_API (
      /*-----------------------------------------------------------------------

           #    #   ####     ##     ####   ######        ##    #####   #
           #    #  #        #  #   #    #  #            #  #   #    #  #
           #    #   ####   #    #  #       #####       #    #  #    #  #
           #    #       #  ######  #  ###  #           ######  #####   #
           #    #  #    #  #    #  #    #  #           #    #  #       #
            ####    ####   #    #   ####   ######      #    #  #       #

        _TABLE_OF_CONTENT _USAGE_API
        -----------------------------------------------------------------------
        ### DESCRIPTION

          MODULE API

            USAGE:
              ...

        -----------------------------------------------------------------------
        ### ROADMAP

          ...

      -----------------------------------------------------------------------*/
      /////////////////////////////////////////////////////////////////////////
      //INJECTED DEPENDENCIES:
      CONTAINER,  // DOM Form Element to apply company to
      //OPTIONS:
      SETTINGS,   // OPTIONAL -- name:string, required:boolean, minQueryLength:number
      SUGGESTIONS // Optional ARRAY from which to choose autocomplete SUGGESTIONS
      /////////////////////////////////////////////////////////////////////////
    ) {
      /*-----------------------------------------------------------------------

                ####     ##    #    #  #  #####  #  ######  ######
               #        #  #   ##   #  #    #    #      #   #
                ####   #    #  # #  #  #    #    #     #    #####
                    #  ######  #  # #  #    #    #    #     #
               #    #  #    #  #   ##  #    #    #   #      #
                ####   #    #  #    #  #    #    #  ######  ######

        _TABLE_OF_CONTENT _SANITIZE
        -----------------------------------------------------------------------
        ### PARAMETER VALIDATION + SANITIZATION - ROADMAP

          @JOB: Refine behavior in relation to given input
          @JOB: Only do if not singleton and single instance already exists
          @ASSERT: at least one 'billboards' is given in SETTINGS.billboards
            else: return without creating anything new!
      -----------------------------------------------------------------------*/
      SETTINGS = typeof SETTINGS === 'undefined' ?
        { // DEFAULT SETTINGS
          // settings      : {placeholder: 'Search', value: '', minQueryLength: 0},
          // SUGGESTIONS   : [],
          // selection     : '',
          // onQueryChange : function onQueryChange (oldQuery, newQuery) {
          //   return;
          // }
        }
        : (SETTINGS.SUGGESTIONS=SUGGESTIONS,SETTINGS) // @JOB: Extend non-given OPTIONS with DEFAULTS, allow override defualts with "NULL"
      ;
      var MODULE =
        ENTITIES.length ? ENTITIES[ENTITIES.length-1] : // @JOB: if singleton vs factory
        (function company (STATE) {
          var
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

               #    #   ####   #####   #    #  #       ######
               ##  ##  #    #  #    #  #    #  #       #
               # ## #  #    #  #    #  #    #  #       #####
               #    #  #    #  #    #  #    #  #       #
               #    #  #    #  #    #  #    #  #       #
               #    #   ####   #####    ####   ######  ######

  _TABLE_OF_CONTENT _MODULE
  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  ### DESCRIPTION

    MODULE CREATION

  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  ### ROADMAP

    ...

:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
          /*-------------------------------------------------------------------
            TEMPLATE - BUILDING & CUSTOMIZATION (Markup, Properties, Styling)
          -------------------------------------------------------------------*/
            // none
          /*-------------------------------------------------------------------
            DEFINE
          -------------------------------------------------------------------*/
            // none
          /*-------------------------------------------------------------------
            USER INTERACTION EVENTS & HANDLER
          -------------------------------------------------------------------*/
            // none
          /*-------------------------------------------------------------------
            MODULE SPECIFIC HELPERS
          -------------------------------------------------------------------*/
            // none
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

      ######  #    #  #####    ####   #####   #####        ##    #####   #
      #        #  #   #    #  #    #  #    #    #         #  #   #    #  #
      #####     ##    #    #  #    #  #    #    #        #    #  #    #  #
      #         ##    #####   #    #  #####     #        ######  #####   #
      #        #  #   #       #    #  #   #     #        #    #  #       #
      ######  #    #  #        ####   #    #    #        #    #  #       #

  _TABLE_OF_CONTENT _EXPORT_API
  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  ### DESCRIPTION

    PUBLIC ENTITY API - SET MODULE ENTITY DEFAULT INTERFACE

  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  ### ROADMAP

    @JOB: make INIT/CONFIGURE and START one method with many params
    @JOB: make module initialization an USAGE API option

:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
            api = {
              /*---------------------------------------------------------------
                BUILD MODULE
              ---------------------------------------------------------------*/
              init: function initializeObject (settings) {
                delete api.init;
                /*-------------------------------------------------------------
                  CUSTOMIZE - module interface, internals & initialization
                -------------------------------------------------------------*/
                // just initialize something
                // or set other api.attributes
                // or return something
                // or set some global stuff
              }
            }
          ;
          api.id = ENTITIES.push(api);
          /*-------------------------------------------------------------------
            PUBLIC API EXPORT
          -------------------------------------------------------------------*/
          // [Optional] initialize this module immediately
          api.init({}); // provide optional settings argument
          return ENTITIES[api.id-1];
        })({})
      ;
      MODULE.META = META;
      return MODULE;
    }
    company_API.META = META;
    return company_API;
  })(
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

              ####    ####   #    #  #####  ######  #    #  #####
             #    #  #    #  ##   #    #    #        #  #     #
             #       #    #  # #  #    #    #####     ##      #
             #       #    #  #  # #    #    #         ##      #
             #    #  #    #  #   ##    #    #        #  #     #
              ####    ####   #    #    #    ######  #    #    #

  _TABLE_OF_CONTENT _CONTEXT
  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  ### DESCRIPTION

    MODULE CONTEXT

  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  ### ROADMAP

    ...

:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
    /*-------------------------------------------------------------------------
      META

      @JOB - http://www.2ality.com/2012/10/javascript-properties.html
        (use to create the stuff below)

    -------------------------------------------------------------------------*/
    {
      NAME    : require('../package.json').name.toUpperCase(),
      VERSION : 'v' + require('../package.json').version,
    },
    /*-------------------------------------------------------------------------
      SET OF MODULE INSTANCES - only 1 if singleton

      @JOB: singleton vs factory

    -------------------------------------------------------------------------*/
    [],
    /*-------------------------------------------------------------------------
      DEPENDENCY TREE

        @JOB - http://www.2ality.com/2012/10/javascript-properties.html
          (use to create the stuff below)

    -------------------------------------------------------------------------*/
    (function DEPENDENCIES () {
      'use strict';
      return {
        /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
          EXTERNAL DEPENDENCIES
        :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
          // none
        /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
          INTERNAL DEPENDENCIES
        :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
          // none
        /*---------------------------------------------------------------------
          e.g. INTERNAL MODULE - nameOfInternalModule1
          (copy structure of this file)
        ---------------------------------------------------------------------*/
      };
    })()
  )
  /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
);
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
