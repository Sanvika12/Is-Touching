function is_Touching(ob1, ob2){
    //ob1 is the moving object, ob2 is the target
    if(ob1.x-ob2.x<ob1.width/2+ob2.width/2 
      && ob2.x-ob1.x<ob1.width/2+ob2.width/2
      && ob2.y-ob1.y<ob1.height/2+ob2.height/2
      && ob1.y-ob2.y<ob1.height/2+ob2.height/2){
      return true
    }
    else{
      return false
    }
  }