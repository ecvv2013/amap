javascript:
var script = document.createElement('script');
script.type = "text/javascript";
script.src ="https://ecvv2013.github.io/amap/echarts.min.js";
document.head.appendChild(script);
setTimeout(function(){
    var dom =$('[data-label=test]').get(0);
    var myChart = echarts.init(dom);
    
    var option = {
  title: {
    text: 'Referer of a Website',
    subtext: 'Fake Data',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        [[LVAR1]]
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};
    
    if (option && typeof option === "object"){
       myChart.setOption(option, true);    
    }}, 800);
