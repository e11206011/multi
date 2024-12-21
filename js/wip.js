$(document).ready(function(){
    
    // -- 啟動 各 Tab 切換 click event 
    var triggerTabList = [].slice.call(document.querySelectorAll('#nav-tab a'));
    triggerTabList.forEach(function (triggerEl) {
      var tabTrigger = new bootstrap.Tab(triggerEl);
    
      triggerEl.addEventListener('click', function (event) {
            event.target.show();
      });
    });

    // --- 設定 tool icon 提示 -
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    });
    
    
    // -- 設定 Rule ToggleClass
    g_show_rule = false;
    $("#btn_show_rule").click(function(){
      
      // $("#div_rule_desc").toggleClass("rule_desc_show");

      if ( g_show_rule){
          $("#div_rule_desc").fadeOut("fast");
          g_show_rule = false;
      }
      else {
          $("#div_rule_desc").fadeIn("slow");
          g_show_rule = true;
      }
    });


    // -- 設定 Query toggleClass
    g_show_query = false;
    $("#btn_search_rule").click(function(){
      
      
      if ( g_show_query){
          $("#div_query_term").fadeOut("fast");
          g_show_query = false;
      }
      else {
          $("#div_query_term").fadeIn("slow");
          g_show_query = true;
      }
    });

    
    // -- 排列順序套用
    $("#btn_query_apply").click(function(){
         alert("Developping");
         return false;  
  });


}); 