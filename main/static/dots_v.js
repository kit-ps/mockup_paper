/************* 
 * Temp Test *
 *************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2022.2.2.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'Dots';  // from the Builder filename that created this script
let expInfo = {
    'UserName': 'UserA'
};

// Start code blocks for 'Before Experiment'
// Run 'Before Experiment' code from code_2
var bflag, cflag, fflag, round_c, roundf,gcolor,Fflag, Flickering, count_hit, i, nr_dots, roundf;
roundf = "a";
bflag = 5;
cflag = 0;
fflag = 5;
round_c = 0;

nr_dots = 30;
count_hit = 0;
i = 0;
Fflag = 0;
Flickering = "red";
roundf = "no";

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(PreSliderRoutineBegin());
flowScheduler.add(PreSliderRoutineEachFrame());
flowScheduler.add(PreSliderRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(final_step);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.2.2';
  expInfo['OS'] = window.navigator.platform;

  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var PreSliderClock;
var text_3;
var key_resp;
var dot_p300Clock;
var text_2;
var polygon1;
var pos_gen1;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "PreSlider"
  PreSliderClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'Please focus on the dots.\n\n Press "Space" to start',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "dot_p300"
  dot_p300Clock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'The first round will be start soon  ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  polygon1 = new visual.Polygon({
      win: psychoJS.window, name: 'polygon3', 
      edges: 100, size:[0.025, 0.025],
      ori: 0.0, pos: [0, 0],
      lineWidth: 1.0, lineColor: new util.Color('red'),
      fillColor: new util.Color([1.0, (- 1.0), (- 1.0)]),
      opacity: undefined, depth: -2, interpolate: true, autoDraw: true,
    })
  
  function generator(nr_dots) {
      var last_x, last_y, new_x, new_y, pos,num1,num2;
      pos = [];
      num1 = Math.round(Math.random()) ? 1 : -1
      num2 = Math.round(Math.random()) ? 1 : -1
      last_x = ((Math.random()/2)-0.01)*num1;
      last_y = ((Math.random()/2)-0.01)*num2;
      while ((pos.length < nr_dots)) {
          num1 = Math.round(Math.random()) ? 1 : -1
          num2 = Math.round(Math.random()) ? 1 : -1
          new_x = ((Math.random()/2)-0.01)*num1;
          new_y = ((Math.random()/2)-0.01)*num2;
          console.log([new_x, new_y])
          if (((Math.abs((last_x - new_x)) > 0.15) && (Math.abs((last_y - new_y)) > 0.15))) {
              pos.push([new_x, new_y]);
              [last_x, last_y] = [new_x, new_y];
          }
      }
      return pos;
  }
  
  pos_gen1 = generator(40);
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _key_resp_allKeys;
var PreSliderComponents;
function PreSliderRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'PreSlider' ---
    t = 0;
    PreSliderClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    PreSliderComponents = [];
    PreSliderComponents.push(text_3);
    PreSliderComponents.push(key_resp);
    
    for (const thisComponent of PreSliderComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function PreSliderRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'PreSlider' ---
    // get current time
    t = PreSliderClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of PreSliderComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PreSliderRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'PreSlider' ---
    for (const thisComponent of PreSliderComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "PreSlider" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 5, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(dot_p300RoutineBegin(snapshot));
      trialsLoopScheduler.add(dot_p300RoutineEachFrame());
      trialsLoopScheduler.add(dot_p300RoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var dot_p300Components;
function dot_p300RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'dot_p300' ---
    t = 0;
    dot_p300Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    dot_p300Components = [];
    dot_p300Components.push(text_2);
    
    for (const thisComponent of dot_p300Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var pos_gen11;
var roundf;
function dot_p300RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'dot_p300' ---
    // get current time
    t = dot_p300Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    if (text_2.status === PsychoJS.Status.STARTED && Boolean((roundf == 'finished'))) {
      text_2.setAutoDraw(false);
    }
    // Run 'Each Frame' code from code_2
    var pos_gen11;
    pos_gen11=pos_gen1[i];
    if ((round_c > 0)) {
        roundf = "finished";
    }
    if ((bflag > 0)) {
        text_2.text = "";
        bflag -= 1;
    } else {
        if ((cflag > 200)) {
            pos_gen11=[0.7,0.7]
            polygon1.pos=pos_gen11;
            polygon1.draw();
            text_2.text = "Relax for 15 seconds";
            cflag -= 1;
        } else {
            if ((cflag > 0)) {
                pos_gen11=[0.7,0.7]
                polygon1.pos=pos_gen11;
                polygon1.draw();
                text_2.text = "";
                cflag -= 1;
            } else {
                gcolor = "red";
                if ((Math.random() > 0.95)) {
                    count_hit += 1;
                }
                if ((count_hit > 3)) {
                    count_hit = 0;
                    i = i + 1;
                    console.log(pos_gen1[i])
                }
                if ((i > 10)) {
                    round_c = (round_c + 1);
                    cflag = 1200;
                    i = 0;
                }
                if ( ((fflag < 1) && (Flickering === "red"))) {
                    Flickering = "red";
                    polygon1.fillColor = new util.Color([1.0, (- 1.0), (- 1.0)])
                    fflag = 5;
                }
                if (((fflag < 1) && (Flickering === "red"))) {
                    polygon1.fillColor =new util.Color([1.0, (- 1.0), (- 1.0)])
                    Flickering = "red";
                    fflag = 5;
                    }
                
                fflag -= 1;
                text_2.text = "";
                polygon1.pos=pos_gen11;
                polygon1.draw();
            }
        }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of dot_p300Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function dot_p300RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'dot_p300' ---
    for (const thisComponent of dot_p300Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "dot_p300" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  // Run 'End Experiment' code from code_2
  roundf = "no";
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;}
  
  function final_step() {
    if ((Math.random() > 0.1984)) {
        window.location.href = "/success?t=done";
    } else {
        window.location.href = "/fail?t=dots_v";
    } }  