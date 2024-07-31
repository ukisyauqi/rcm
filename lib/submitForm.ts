export default function submitForm(data: any) {
  data = {
    AP: {
      system: "PROPELLER_DAN_SHAFTING",
      subsystem: "PROPELLER",
      subSubsystem: "MAIN_ENGINE_OPEN_LOOP_SYSTEM",
      "equipmentId-0": "equpmentId",
      "equipmentName-0": "eqname",
      "drawing-0": "draw",
    },
    FF: {
      "functionStatement-0": "funcstate",
      "functionType-0": "functype",
      "number-0": "3",
      "functionalFailureStatement-0": "funcfail",
    },
    FM: {
      "failureMode-0": "failmode",
      "causes-0": "cause",
      "failureCharacteristic-0": "2",
      "localEffect-0": "loceff",
      "functionalFailure-0": "funcfail",
    },
    FL: {
      "endEffect-0": "endeff",
      cof: "3",
      pof: "5",
      currentRisk: "risk",
      "failureDetection-0": "faildet",
      "proposedBasicMNTC-0": "proposbasmntc",
    },
    MT: {
      "proposedActions-0": "propact",
      projPof: "5",
    },
    CA: {
      "task-0": "task",
      "taskType-0": "task type",
      "causeNumber-0": "3",
      "frequency-0": "freq",
      "procedurNo-0": "procno",
      "comments-0": "com",
    },
    CB: {
      "task-0": "taskb",
      "taskType-0": "tasktypeb",
      "causeNumber-0": "2",
      "frequency-0": "freq",
      "procedurNo-0": "procno",
      "comments-0": "com",
    },
    CC: {
      "task-0": "taskc",
      "taskType-0": "tasktypec",
      "causeNumber-0": "3",
      "frequency-0": "freqc",
      "procedurNo-0": "proC",
      "comments-0": "comC",
    },
  }
}
