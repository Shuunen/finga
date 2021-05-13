import * as handTrack from 'handtrackjs'
import { sleep } from 'shuutils'
import { dom } from '../utils'
import { hand } from './hand'

export const video = dom('video', '', 'absolute z-0')

const trackOptions = {
  flipHorizontal: true,
  imageScaleFactor: 0.7,
  maxNumBoxes: 20,
  modelType: "ssd320fpnlite"
}
let model = null as any
let nb = 0

function stop (){
  handTrack.stopVideo(video);
  model.dispose()
}

async function detect() {
  const predictions = await model.detect(video);
  console.log('predictions ?', predictions.map((p:any) => `${p.label} (${p.score})`).join(', '), predictions)
  if(nb++ === 10) return stop()
  await sleep(500)
  detect()
}

async function webcam() {
  await handTrack.startVideo(video)
  model =  await handTrack.load(trackOptions);
  video.style.height = 'inherit'
  detect()
}

hand.addEventListener('click', () => webcam())
