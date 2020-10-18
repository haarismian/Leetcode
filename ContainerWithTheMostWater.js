/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
   
    let leftArm = 0
    let rightArm = height.length-1
    let distanceBetween = 0
    let volumeTest = 0
    let maxVolume = 0
    
while(leftArm<rightArm){
    distanceBetween = rightArm-leftArm
    volumeTest = distanceBetween*Math.min(height[leftArm],height[rightArm])
    maxVolume = Math.max(volumeTest,maxVolume)
    
    if (height[leftArm]>height[rightArm]){
        rightArm--
    } else {
        leftArm++
    }
}
    return maxVolume
    
}
