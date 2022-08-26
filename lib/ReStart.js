re = {
  data: {},
  vdom: {},
  start: function (el, component, initialData) {
    this.data = {
      ...initialData,
      el: el
    };
    document.getElementById(el).innerHTML = component(this.data);
  },
  setData: function (data, sender) {
    this.data = data;
    this.reload(data.el, sender)
  },
  reload: function (el, component) {
    document.getElementById(el).innerHTML = component(this.data);
  },
  watch: function (el, type, callback) {
    
    setTimeout(() => {
      const element = document.querySelector(el);
      
      element.addEventListener(type, (e)=>{
        callback(e);
        
      })
    }, 0)
  }
}
