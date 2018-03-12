$(function () {
  $("#csDate").datetimePicker({times: function () {},}); // 出生年月
  $("#byDate").datetimePicker({times: function () {},}); //毕业时间
  $("#dzsj").datetimePicker({times: function () {},}); //到职时间
  $("#yDate1").datetimePicker({times: function () {},}); //由年月1
  $("#zDate1").datetimePicker({times: function () {},}); //至年月1
  $("#yDate2").datetimePicker({times: function () {},}); //由年月2
  $("#zDate2").datetimePicker({times: function () {},});//至年月2
  $("#yDate3").datetimePicker({times: function () {},}); //由年月3
  $("#zDate3").datetimePicker({times: function () {},}); //至年月3
  $("#yDate4").datetimePicker({times: function () {},}); //由年月4
  $("#zDate4").datetimePicker({times: function () {},}); //至年月4
  $("#yDate5").datetimePicker({times: function () {},}); //由年月5
  $("#zDate5").datetimePicker({times: function () {},}); //至年月5
  $("#yDate6").datetimePicker({times: function () {},}); //由年月6
  $("#zDate6").datetimePicker({times: function () {},}); //至年月6
  $("#yDate7").datetimePicker({times: function () {},}); //由年月7
  $("#zDate7").datetimePicker({times: function () {},}); //至年月7
  $("#yDate8").datetimePicker({times: function () {},}); //由年月8
  $("#zDate8").datetimePicker({times: function () {},}); //至年月8

  // 文化程度
  $("#whcd").picker({
    title: "请选择您的学历",
    cols: [{
      textAlign: 'center',
      values: ['小学', '初中', '高中', '中专', '大专', '本科', '硕士', '博士']
    }]
  });

  // 性别
  $("#sex").picker({
    title: "请选择您的性别",
    cols: [{
      textAlign: 'center',
      values: ['男', '女']
    }]
  });

  // 婚姻状况
  $("#marry").picker({
    title: "请选择您的婚姻状况",
    cols: [{
      textAlign: 'center',
      values: ['未婚', '已婚']
    }]
  });

  // 政治面貌
  $("#zzmm").picker({
    title: "请选择您的政治面貌",
    cols: [{
      textAlign: 'center',
      values: ['群众', '党员', '团员']
    }]
  });

  //   技术职称
  $("#jszc").picker({
    title: "请选择您的技术职称",
    cols: [{
      textAlign: 'center',
      values: ['无', '初级', '中级', '高级']
    }]
  });

  //   是否是应届毕业生
  $("#bys").picker({
    title: "是否是应届毕业生",
    cols: [{
      textAlign: 'center',
      values: ['是', '否']
    }]
  });

  //   档案调入
  $("#dangan").picker({
    title: "是否接受档案调入",
    cols: [{
      textAlign: 'center',
      values: ['是', '否']
    }]
  });


})