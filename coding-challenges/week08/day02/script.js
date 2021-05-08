document.getElementById("postBut").addEventListener("click", function() {
  // alert("erwer");
  let name = document.getElementById("name");
  let job = document.getElementById("job");
  let sub = document.getElementById("sub");
  name.style.display = "block";
  job.style.display = "block";
  sub.style.display = "block";
});
document.getElementById("putBut").addEventListener("click", function() {
  // alert("erwer");
  let id = document.getElementById("id1");
  let name = document.getElementById("name1");
  let job = document.getElementById("job1");
  let sub = document.getElementById("sub1");
  id.style.display = "block";
  name.style.display = "block";
  job.style.display = "block";
  sub.style.display = "block";
});
document.getElementById("deleteBut").addEventListener("click", function() {
  // alert("erwer");
  let del = document.getElementById("del");
  let sub = document.getElementById("sub2");
  del.style.display = "block";
  sub.style.display = "block";
});
//start of get method
document.getElementById("getBut").addEventListener("click", function() {
  //alert("test");
  fetch("https://reqres.in/api/users?page=2")
    .then(function(response) {
      return response.json();
    })
    .then(function(resObj) {
      console.log(resObj.data);
      let data = resObj.data;
      for (i = 0; i <= data.length; i++) {
        let resDiv = document.getElementById("res");
        let id1 = document.createElement("label");
        let Name = document.createElement("label");
        let email = document.createElement("label");
        let pic = document.createElement("img");
        id1.innerText = data[i].id;
        Name.innerText = data[i].first_name + " " + data[i].last_name;
        email.innerText = data[i].email;
        pic.setAttribute("src", data[i].avatar);

        resDiv.append(id1);
        resDiv.append(Name);
        resDiv.append(email);
        resDiv.append(pic);
      }
    })
    .catch(function(error) {
      console.log(error);
    });
});

//start of post method
document.getElementById("sub").addEventListener("click", function() {
  // alert("tes");
  fetch("https://corsanywhere.herokuapp.com/https://reqres.in/api/users", {
    method: "POST",
    body: JSON.stringify({
      name: $("#name").val(),
      job: $("#job").val()
    }),
    headers: { "Content-Type": "application/json" }
  })
    .then(function(response) {
      console.log(response);
      return response.json();
    })
    .then(function(respObj) {
      let data1 = respObj;
      console.log(data1);
      // console.log(data1.id);
      // console.log(data1.name);
      // console.log(data1.job);
      // console.log(data1.createdAt);
      let show = document.getElementById("postRes");
      let iD = document.createElement("label");
      let name2 = document.createElement("label");
      let job2 = document.createElement("label");
      let created = document.createElement("label");
      iD.innerText = "ID: " + data1.id;
      name2.innerText = "Name: " + data1.name;
      job2.innerText = "Job: " + data1.job;
      created.innerText = "Created At: " + data1.createdAt;
      show.append(iD);
      show.append(name2);
      show.append(job2);
      show.append(created);
    })
    .catch(function(error1) {
      console.log(error1);
    });
});
// start of PUT/PATCH method
document.getElementById("sub1").addEventListener("click", function() {
  //alert("tes");
  let id = $("#id1").val();
  fetch("https://corsanywhere.herokuapp.com/https://reqres.in/api/users/id", {
    method: "PUT",
    body: JSON.stringify({
      name: $("#name1").val(),
      job: $("#job1").val()
    }),
    headers: { "Content-Type": "application/json" }
  })
    .then(function(response) {
      console.log(response);
      return response.json();
    })
    .then(function(respObj) {
      let data1 = respObj;
      console.log(data1);
      let show = document.getElementById("putRes");
      let name2 = document.createElement("label");
      let job2 = document.createElement("label");
      let updated = document.createElement("label");
      name2.innerText = "Name: " + data1.name;
      job2.innerText = "Job: " + data1.job;
      updated.innerText = "Updated At: " + data1.updatedAt;
      show.append(name2);
      show.append(job2);
      show.append(updated);
    })
    .catch(function(error1) {
      console.log(error1);
    });
});
//start of delete method
document.getElementById("sub2").addEventListener("click", function() {
  //alert("tes");
  let id = $("#id1").val();
  fetch("https://corsanywhere.herokuapp.com/https://reqres.in/api/users/id", {
    method: "DELETE"
  })
    .then(function(response) {
      console.log(response);
      let show = document.getElementById("delres");
      let eror = document.createElement("label");
      eror.innerText = "DELETED";
      show.append(eror);
      //return response.json();
    })
    .catch(function(error1) {
      console.log(error1);
    });
});
