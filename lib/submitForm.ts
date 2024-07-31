import { createAssetRegister } from "./assetRegister"
import { Data } from "./data"
import {
  getObjValue,
  getObjValuesStartsWith,
  getRiskText,
  normalCasetoKebabCase,
  snakeToTitleCase,
} from "./function"

export default async function submitForm(data: {
  AP: any
  FF: any
  FM: any
  FL: any
  MT: any
  CA: any
  CB: any
  CC: any
}) {
  // const data = {
  //   AP: {
  //     system: "PROPELLER_DAN_SHAFTING",
  //     subsystem: "PROPELLER",
  //     subSubsystem: "MAIN_ENGINE_OPEN_LOOP_SYSTEM",
  //     "equipmentId-0": "equpmentId",
  //     "equipmentName-0": "eqname",
  //     "drawing-0": "draw",
  //   },
  //   FF: {
  //     "functionStatement-0": "funcstate",
  //     "functionType-0": "functype",
  //     "number-0": "3",
  //     "functionalFailureStatement-0": "funcfail",
  //   },
  //   FM: {
  //     "failureMode-0": "failmode",
  //     "causes-0": "cause",
  //     "failureCharacteristic-0": "2",
  //     "localEffect-0": "loceff",
  //     "functionalFailure-0": "funcfail",
  //   },
  //   FL: {
  //     "endEffect-0": "endeff",
  //     cof: "3",
  //     pof: "5",
  //     currentRisk: "risk",
  //     "failureDetection-0": "faildet",
  //     "proposedBasicMNTC-0": "proposbasmntc",
  //   },
  //   MT: {
  //     "proposedActions-0": "propact",
  //     projPof: "5",
  //   },
  //   CA: {
  //     "task-0": "task",
  //     "taskType-0": "task type",
  //     "causeNumber-0": "3",
  //     "frequency-0": "freq",
  //     "procedurNo-0": "procno",
  //     "comments-0": "com",
  //   },
  //   CB: {
  //     "task-0": "taskb",
  //     "taskType-0": "tasktypeb",
  //     "causeNumber-0": "2",
  //     "frequency-0": "freq",
  //     "procedurNo-0": "procno",
  //     "comments-0": "com",
  //   },
  //   CC: {
  //     "task-0": "taskc",
  //     "taskType-0": "tasktypec",
  //     "causeNumber-0": "3",
  //     "frequency-0": "freqc",
  //     "procedurNo-0": "proC",
  //     "comments-0": "comC",
  //   },
  // }

  const { AP, FF, FM, FL, MT, CA, CB, CC } = data

  const d = {
    slug: normalCasetoKebabCase(getObjValuesStartsWith(AP, "equipmentName")[0]),
    type: getObjValuesStartsWith(AP, "subsystem")[0],
    specs: {
      functionalGroup: "Propulsion Function Group",
      system: snakeToTitleCase(getObjValuesStartsWith(AP, "system")[0]),
      subsystem: snakeToTitleCase(getObjValuesStartsWith(AP, "subsystem")[0]),
      equipmentID: snakeToTitleCase(
        getObjValuesStartsWith(AP, "equipmentId")[0]
      ),
      equipmentName: snakeToTitleCase(
        getObjValuesStartsWith(AP, "equipmentName")[0]
      ),
      drawing: snakeToTitleCase(getObjValuesStartsWith(AP, "drawing")[0]),
    },
    tables: [
      {
        title: "Function and Functional Failure",
        backgroundColor: "#e5fff1",
        borderColor: "#00B14F",
        headRow: 1,
        head: [
          "No",
          "Function Statement",
          "Function Type",
          "No",
          "Functional Failure Statement",
        ],
        body: [
          [
            "1",
            getObjValuesStartsWith(FF, "functionStatement"),
            getObjValuesStartsWith(FF, "functionType"),
            getObjValuesStartsWith(FF, "number"),
            getObjValuesStartsWith(FF, "functionalFailureStatement"),
          ],
        ],
      },
      {
        title: "FMECA",
        backgroundColor: "#ffefe5",
        borderColor: "#EB5B00",
        headRow: 1,
        head: [
          "No",
          "Failure Mode",
          "Causes",
          "Failure Charasteristic",
          "Local Effect",
          "Functional Failure",
        ],
        body: [
          [
            "1",
            getObjValuesStartsWith(FM, "failureMode"),
            getObjValuesStartsWith(FM, "causes"),
            getObjValuesStartsWith(FM, "failureCharacteristic"),
            {
              type: "number",
              text: getObjValuesStartsWith(FM, "localEffect"),
            },
            getObjValuesStartsWith(FM, "functionalFailure"),
          ],
        ],
      },
      {
        title: "FMECA (lanjutan)",
        backgroundColor: "#ffefe5",
        borderColor: "#EB5B00",
        headRow: 1,
        head: [
          "No",
          "Failure Mode",
          "End Effect",
          "CoF",
          "PoF",
          "Current Risk",
          "Failure Detection",
          "Proporsed Basic MNTC",
        ],
        body: [
          [
            "1",
            getObjValuesStartsWith(FM, "failureMode"),
            getObjValuesStartsWith(FL, "endEffect"),
            getObjValuesStartsWith(FL, "cof"),
            getObjValuesStartsWith(FL, "pof"),
            {
              type: "class",
              text: [
                getRiskText(
                  getObjValuesStartsWith(FL, "cof")[0],
                  getObjValuesStartsWith(FL, "pof")[0]
                ),
              ],
            },
            {
              type: "number",
              text: getObjValuesStartsWith(FL, "failureDetection"),
            },
            {
              type: "dot",
              text: getObjValuesStartsWith(FL, "proposedBasicMNTC"),
            },
          ],
        ],
      },
      {
        title: "Maintenance Task Selection",
        backgroundColor: "#f5eafa",
        borderColor: "#912BBC",
        headRow: 2,
        head: [
          "No",
          "Failure Mode",
          ["Risk Characterization", ["CoF", "Rec PoF", "Current Risk"]],
          ["Task Selection", ["Proposed Action (s)", "Proj PoF", "Proj Risk"]],
        ],
        body: [
          [
            "1",
            getObjValuesStartsWith(FM, "failureMode"),
            getObjValuesStartsWith(FL, "cof"),
            getObjValuesStartsWith(FL, "pof"),
            {
              type: "class",
              text: [
                getRiskText(
                  getObjValuesStartsWith(FL, "cof")[0],
                  getObjValuesStartsWith(FL, "pof")[0]
                ),
              ],
            },
            {
              type: "dot",
              text: getObjValuesStartsWith(MT, "proposedActions"),
            },
            getObjValuesStartsWith(MT, "projPof"),
            {
              type: "class",
              text: [
                getRiskText(
                  getObjValuesStartsWith(FL, "cof")[0],
                  getObjValuesStartsWith(MT, "projPof")[0]
                ),
              ],
            },
          ],
        ],
      },
      {
        title: "Category A",
        backgroundColor: "#003266",
        borderColor: "#ffffff",
        headRow: 2,
        head: [
          "Task",
          "Task Type",
          "Cause Number",
          ["Risk", ["Current", "Projected"]],
          "Frequency",
          "Procedure No. Or Class Reference",
          "Comments",
        ],
        body: [
          [
            {
              type: "dot",
              text: getObjValuesStartsWith(CA, "task"),
            },
            getObjValuesStartsWith(CA, "taskType"),
            getObjValuesStartsWith(CA, "causeNumber"),
            {
              type: "class",
              text: [
                getRiskText(
                  getObjValuesStartsWith(FL, "cof")[0],
                  getObjValuesStartsWith(FL, "pof")[0]
                ),
              ],
            },
            {
              type: "class",
              text: [
                getRiskText(
                  getObjValuesStartsWith(FL, "cof")[0],
                  getObjValuesStartsWith(MT, "projPof")[0]
                ),
              ],
            },
            getObjValuesStartsWith(CA, "frequency"),
            getObjValuesStartsWith(CA, "procedurNo"),
            getObjValuesStartsWith(CA, "comments"),
          ],
        ],
      },
      {
        title: "Category B",
        backgroundColor: "#003266",
        borderColor: "#ffffff",
        headRow: 2,
        head: [
          "Task",
          "Task Type",
          "Cause Number",
          ["Risk", ["Current", "Projected"]],
          "Frequency",
          "Procedure No. Or Class Reference",
          "Comments",
        ],
        body: [
          [
            {
              type: "dot",
              text: getObjValuesStartsWith(CB, "task"),
            },
            getObjValuesStartsWith(CB, "taskType"),
            getObjValuesStartsWith(CB, "causeNumber"),
            {
              type: "class",
              text: [
                getRiskText(
                  getObjValuesStartsWith(FL, "cof")[0],
                  getObjValuesStartsWith(FL, "pof")[0]
                ),
              ],
            },
            {
              type: "class",
              text: [
                getRiskText(
                  getObjValuesStartsWith(FL, "cof")[0],
                  getObjValuesStartsWith(MT, "projPof")[0]
                ),
              ],
            },
            getObjValuesStartsWith(CB, "frequency"),
            getObjValuesStartsWith(CB, "procedurNo"),
            getObjValuesStartsWith(CB, "comments"),
          ],
        ],
      },
      {
        title: "Category C",
        backgroundColor: "#003266",
        borderColor: "#ffffff",
        headRow: 2,
        head: [
          "Task",
          "Task Type",
          "Cause Number",
          ["Risk", ["Current", "Projected"]],
          "Frequency",
          "Procedure No. Or Class Reference",
          "Comments",
        ],
        body: [
          [
            {
              type: "dot",
              text: getObjValuesStartsWith(CC, "task"),
            },
            getObjValuesStartsWith(CC, "taskType"),
            getObjValuesStartsWith(CC, "causeNumber"),
            {
              type: "class",
              text: [
                getRiskText(
                  getObjValuesStartsWith(FL, "cof")[0],
                  getObjValuesStartsWith(FL, "pof")[0]
                ),
              ],
            },
            {
              type: "class",
              text: [
                getRiskText(
                  getObjValuesStartsWith(FL, "cof")[0],
                  getObjValuesStartsWith(MT, "projPof")[0]
                ),
              ],
            },
            getObjValuesStartsWith(CC, "frequency"),
            getObjValuesStartsWith(CC, "procedurNo"),
            getObjValuesStartsWith(CC, "comments"),
          ],
        ],
      },
    ],
  }

  // console.log(JSON.stringify(d, null, 2));

  await createAssetRegister(d)
}
