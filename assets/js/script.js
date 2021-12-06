function submitForm() {
    var full_name = document.forms["appointment"]["name"].value;
    var email = document.forms["appointment"]["email"].value;
    var service = document.forms["appointment"]["service"].value;
    var date = document.forms["appointment"]["date"].value;
    var discription = document.getElementById("discription").value;
    if (full_name == "") {
      alert("Please Enter the Name");
      return false;
    }
    else if(email == ""){
        alert("Please Enter the Email");
      return false;
    }
    else if(service == ""){
        alert("Please Enter the Service");
      return false;
    }
    else if(date == ""){
      alert("Please Enter the Date");
    return false;
  }
    else if(discription == ""){
        alert("Please Enter the Discription");
      return false;
    }
    else{
        alert("Apointment Confirmed..!!!"+"\n\n"+"Your Name :" + full_name + "\n\n"+ "Your Email :"+email + "\n\n"+"Your Service:"+service+"\n\n"+ "Appointment Date:"+date+"\n\n" +"Your Discription:" + discription);
        return true;
    }
}  
  
function changetextImages(str){
 var imageElement = document.getElementById('service_image');
 var textElement = document.getElementById('service_text');
 if(str == "Soup Kitchens"){
   imageElement.src = "assets/images/soup-kitchens.jpg";
   textElement.innerHTML = "Soup Kitchens Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ";
 }
 else if(str == "Street Clean-Up"){
  imageElement.src = "assets/images/Street-Clean-Up.jpg";
  textElement.innerHTML = "Street Clean-Up Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ";
 }
 else if(str == "Safety Patrols"){
  imageElement.src = "assets/images/Safety-Patrols.jpg";
  textElement.innerHTML = "Safety-Patrols Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ";
 }
 else if(str == "Sports Volunteering"){
  imageElement.src = "assets/images/sports-volunteering.png";
  textElement.innerHTML = "Sports Volunteering Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ";
 }
 else if(str == "Teaching"){
  imageElement.src = "assets/images/Teaching.jpg";
  textElement.innerHTML = "Teaching Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ";
 }
 else{
  imageElement.src = "assets/images/what-we-do.jpg";
  textElement.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ";
 }
}