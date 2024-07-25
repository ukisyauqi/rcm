type Data = {
  slug: string;
  type: string;
  specs: {
      functionalGroup: string;
      system: string;
      subsystem: string;
      equipmentID: string;
      equipmentName: string;
      drawing: string;
  };
  tables: {
    title: string;
    backgroundColor: string;
    borderColor: string;
    headRow: number;
    head: (string | (string | string[])[])[];
    body: (string | string[] | {
        type: string;
        text: string[];
    })[][];
  }[];
}[]

const data: Data = [
  {
    slug: "boss-propeller",
    type: "PROPELLER",
    specs: {
      functionalGroup: "Propulsion Functional Group",
      system: "Propeller and Shafting",
      subsystem: "Propeller",
      equipmentID: "SH-BOSSP-01",
      equipmentName: "Boss Propeller",
      drawing: "Shafting Arragment",
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
            "provide structural support and secure attachment for the propeller blades to the ship's propulsion shaft",
            "Primary",
            "1,1",
            "Cannot Provide Structural support and secure attachment for propeller",
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
            "Corroded",
            [
              "1.1 Exposure to Seawater: Seawater contains various corrosive elements such as salt, which can react with the metal surface of the propeller, leading to corrosion over time.",
              "1.2 Lack of Protective Coating: Without a protective coating, the metal surface of the propeller is directly exposed to seawater, making it more vulnerable to corrosion.",
            ],
            ["Random", "Wear-out"],
            {
              type: "number",
              text: ["Corrosion buildup on surface", "Pitting"],
            },
            "1.1 Cannot Provide Structural support and secure attachment for propeller",
          ],
          [
            "2",
            "Cavitation Erosion",
            [
              "2.1 High-Speed Operation: High-speed operation of the propeller in turbulent water conditions can lead to the formation of cavitation bubbles.",
              "2.2 Turbulent Water Conditions: Turbulent water conditions, such as rough seas or rapid changes in water flow, exacerbate cavitation effects on the propeller.",
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Pitting", "Erosion", "Surface Roughness"],
            },
            "1.1 Cannot Provide Structural support and secure attachment for propeller",
          ],
          [
            "3",
            "Fatigue Failure",
            [
              "3.1 Repeated Cyclic Loading: Repeated cyclic loading and unloading of the propeller during operation induce stress cycles on the material.",
              "3.2 Material Defects: Material defects, such as voids, inclusions, or inconsistencies in the metal structure, create stress concentration points within the propeller.",
            ],
            ["Wear-out", "Wear-out"],
            { type: "number", text: ["Micro-crack", "Fissures"] },
            "1.1 Cannot Provide Structural support and secure attachment for propeller",
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
            "Corroded",
            "Reduced Structural Integrity, Erosion: Corrosion buildup on the surface of the propeller reduces its structural integrity, making it more susceptible to erosion.",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Visual inspection", "Thickness measurements"],
            },
            {
              type: "dot",
              text: [
                "Regular cleaning",
                "Coating with anti-corrosive",
                "Periodic inspection",
                "Maintenance",
              ],
            },
          ],
          [
            "2",
            "Cavitation Erosion",
            "Reduced Efficiency, Potential Blade Damage:  Cavitation erosion leads to pitting, erosion, and surface roughness on the propeller blades. This reduces the efficiency of the",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Visual inspection for cavitation marks",
                "Surface rougness",
              ],
            },
            {
              type: "dot",
              text: [
                "Design optimization to reduce cavitation",
                "Regular inspection",
                "Maintenance",
              ],
            },
          ],
          [
            "3",
            "Fatigue Failure",
            "Potential Crack Propagation, Catastrophic Failure: Fatigue failure can result in the formation of micro-cracks and fissures on the propeller surface.",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Non-destructive testing", "Visual inspection"],
            },
            {
              type: "dot",
              text: [
                "Regular inspection for propeller guard installation",
                "avoidance of hazardous areas",
              ],
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
            "Corroded",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Lakukan inspeksi pada shaft serta check kondisi boss propeller terhadap kontaminasi kotoran, kerak atau korosi yang terjadi",
                "Lapisi dengan cairan anti korosi",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "2",
            "Cavitation Erosion",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Inspeksi kondisi visual, apabila terjadi erosi, keurakan, dll. lakukan segera perawatan",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "3",
            "Fatidue",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: ["Inspeksi visual terkait kondisi boss propeller"],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
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
              text: [
                "lakukan vibrating monitoring untuk mendeteksi fatigue damage",
              ],
            },
            "PM",
            ["3.1", "3.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "6 bulan dan/atau pada: Pada saat kerusakan (failure) terjadi",
            "-",
            "-",
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
            { type: "dot", text: ["Berikan/Tambahkan Cairan Anti Korosi"] },
            "PM",
            ["1.1", "1.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "6 bulan dan/atau pada: Pada saat kerusakan (failure) terjadi",
            "-",
            "Ikuti petunjuk rekomendasi pabrikan/vendor",
          ],
          [
            {
              type: "dot",
              text: [
                "lakukan inspeksi visual dan perawatan apabila terjadi kegagalan",
              ],
            },
            "PM",
            ["1.1", "1.3"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "6 bulan dan/atau pada: Pada saat kerusakan (failure) terjadi",
            "-",
            "Ikuti petunjuk rekomendasi pabrikan/vendor",
          ],
        ],
      },
    ],
  },
  {
    slug: "hull-cap",
    type: "PROPELLER",
    specs: {
      functionalGroup: "Propulsion Functional Group",
      system: "Propeller and Shafting",
      subsystem: "Propeller",
      equipmentID: "SH-HC-01",
      equipmentName: "Hull Cap",
      drawing: "Shafting Arragment",
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
            "acts as a protective cover for the propeller shaft and hub. It shields these components from exposure to seawater, corrosion, and debris that can cause damage during operation.",
            "Primary",
            "1,1",
            "Unable to Protect the propeller shaft and Hub",
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
            "Loss of Integrity",
            [
              "1.1 Corrosion:  Exposure to saltwater and harsh marine environments can lead to corrosion of the boss cap material, weakening its structure and creating potential leaks.",
              "1.2 Physical impact:  Accidental impacts with underwater objects or debris can cause cracks or fractures in the hull cap.",
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: [
                "Reduced structural integrity",
                "Potential for cap detachment",
              ],
            },
            "1.1 Unable to Protect the propeller shaft and Hub",
          ],
          [
            "2",
            "Fastener Failure",
            [
              "2.1 Corrosion:  Similar to the cap itself, the fasteners securing the boss cap can also corrode, weakening their hold and potentially leading to cap detachment",
              "2.2 Improper installation:  If the boss cap is not installed correctly or with inadequate torque on the fasteners, it can loosen or detach during operation.",
            ],
            ["Wear-out", "Random"],
            {
              type: "number",
              text: [
                "Loss of boss cap overboard",
                "Water ingress into shaft and hub",
                "Unbalanced propeller (vibrations)",
              ],
            },
            "1.1 Unable to Protect the propeller shaft and Hub",
          ],
          [
            "3",
            "Loss of Sealing",
            [
              "3.1 Worn or damaged O-rings/gaskets:  Over time, the O-rings or gaskets that create a watertight seal between the boss cap and the propeller hub can wear out or become damaged, allowing water ingress.",
              "3.2 Improper installation:  If the O-rings or gaskets are not installed correctly, they might not create a proper seal, leading to leaks",
            ],
            ["Wear-out", "Random"],
            {
              type: "number",
              text: [
                "Water ingress into shaft and hub",
                "Potential for corrosion of internal components",
              ],
            },
            "1.1 Unable to Protect the propeller shaft and Hub",
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
            "Loss of Integrity",
            "Unbalanced propeller: Cracks or fractures in the boss cap can cause the propeller to become unbalanced, leading to vibrations and potential damage to the shaft and bearings.",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Visual inspection for cracks or damage during surveys",
                "Unusual propeller vibrations",
              ],
            },
            {
              type: "dot",
              text: [
                "Use corrosion-resistant materials",
                "Implement cathodic protection (if applicable)",
              ],
            },
          ],
          [
            "2",
            "Fastener Failure",
            "Exposure of internal components: Without the cap in place, the propeller shaft and hub become exposed to seawater, increasing the risk of corrosion and damage.",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Regular check for loose or missing fasteners",
                "Unusual propeller vibrations",
              ],
            },
            {
              type: "dot",
              text: [
                "Use corrosion-resistant fasteners",
                "Ensure proper torque during installation",
              ],
            },
          ],
          [
            "3",
            "Loss of Sealing",
            "Water ingress: Leaks within the boss cap can allow seawater to enter the propeller shaft and hub, potentially leading to corrosion of internal components.",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Visual inspection for leaks during surveys",
                "Unusual propeller vibrations",
              ],
            },
            {
              type: "dot",
              text: [
                "Regular inspection of O-rings/gaskets for wear or damage",
                "Ensure proper alignment during installation",
              ],
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
            "Loss of Integrity",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "apply cairan anti korosi",
                "inspeksi visual terhadap komponen yang mengalami fracture , Cracked, dll",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "2",
            "Fastener Failure",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "lakukan vibration test analysis apabila terjadi failure",
                "gunakan cairan anti korosi",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "3",
            "Loss of Sealing",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "cek kondisi sealing, apabila rusak segera lakukan replacement",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
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
              text: [
                "Perawatan Shafting",
              ],
            },
            "CM",
            ["1.1", "1.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "-",
            "-",
            "-",
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
              text: [
                "lakukan analisis historik terkait debrish atau benda yang pernah menabrak komponen",
              ],
            },
            "FF",
            "1,2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "dilakukan apabila terjadi failure",
            "-",
            "-",
          ],
          [
            {
              type: "dot",
              text: [
                "-lakukan vibration test analysis",
              ],
            },
            "CM",
            "2,2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "dilakukan apabila terjadi failure",
            "-",
            "Dilakukan oleh mekanik",
          ],
          [
            {
              type: "dot",
              text: [
                "lakukan vibration test analysis",
              ],
            },
            "CM",
            "3,2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "dilakukan apabila terjadi failure",
            "-",
            "Dilakukan oleh mekanik",
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
              text: [
                "lakukan inspeksi visual terhadap komponen dan lakukan perawatan apabila terjadi kegagalan"
              ] 
            },
            "PM",
            "1.1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "6 bulan dan/atau pada: Pada saat kerusakan (failure) terjadi",
            "-",
            "Ikuti petunjuk rekomendasi pabrikan/vendor",
          ],
          [
            {
              type: "dot",
              text: [
                "berikan cairan anti korosi terhadap komponen",
              ],
            },
            "PM",
            "2.1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "6 bulan dan/atau pada: Pada saat kerusakan (failure) terjadi",
            "-",
            "Ikuti petunjuk rekomendasi pabrikan/vendor",
          ],
          [
            {
              type: "dot",
              text: [
                "lakukan inspeksi visual terhadap komponen dan lakukan perawatan apabila terjadi kegagalan",
              ],
            },
            "PM",
            "3.1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "6 bulan dan/atau pada: Pada saat kerusakan (failure) terjadi",
            "-",
            "Ikuti petunjuk rekomendasi pabrikan/vendor",
          ],
        ],
      },
    ],
  },
  {
    slug: "propeller-shaft",
    type: "PROPELLER",
    specs: {
      functionalGroup: "Propulsion Functional Group",
      system: "Propeller and Shafting",
      subsystem: "Propeller",
      equipmentID: "SH-SHAFT-01",
      equipmentName: "Propeller Shaft",
      drawing: "Shafting Arragment",
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
            "transmit rotational power from the ship's engine to the propeller",
            "Primary",
            ["1,1", "1.2"],
            [
              "fails to transmit rotational power",
              "fails to deliver the required rotational power",
            ],
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
            "Cracked",
            [
              "1.1  Stress Concentration: Stress concentration occurs due to irregularities or discontinuities in the material or design of the propeller shaft.",
              "1.2 Fatigue: Fatigue occurs when the propeller shaft is subjected to repeated cyclic loading and unloading.",
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Surface cracks", "propagation"],
            },
            "1.2 fails to deliver the required rotational power",
          ],
          [
            "2",
            "Fractured",
            [
              "2.1  Excessive Loading: Excessive loading beyond the design limits of the propeller shaft can cause it to exceed its yield strength, resulting in sudden and complete fracture.",
              "2.2  Material Defects: Material defects such as voids, inclusions, or inconsistencies in the metal structure can create weak points in the propeller shaft.",
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Sudden breakage", "complete fracture"],
            },
            "1.1 fails to transmit rotational power",
          ],
          [
            "3",
            "Worn",
            [
              "3.1 Abrasion: Abrasion occurs when the surface of the propeller shaft is continuously rubbed or scraped against another surface.",
              "3.2 Erosion: Erosion happens when the surface of the propeller shaft gradually wears away due to the abrasive action of water, sediment, or other contaminants in the marine environment",
            ],
            ["Random", "Random"],
            {
              type: "number",
              text: ["Surface wear", "loss of material"],
            },
            "1.1 fails to transmit rotational power",
          ],
          [
            "4",
            "Deformed",
            [
              "4.1 Misalignment: Misalignment of the propeller shaft can cause uneven distribution of forces, leading to deformation or bending of the shaft over time",
              "4.2 Excessive Vibration: Excessive vibration of the propeller shaft can induce dynamic forces that exceed the material's yield strength, causing it to deform or bend.",
            ],
            ["Random", "Random"],
            {
              type: "number",
              text: ["Distortion", "bending", "misshape"],
            },
            "1.1 fails to transmit rotational power",
          ],
          [
            "5",
            "Corroded",
            [
              "5.1 Exposure to Corrosive Elements: Exposure to corrosive elements such as saltwater, chemicals, or pollutants can initiate corrosion.",
              "5.2 Lack of Protective Coating: A lack of protective coating or inadequate corrosion protection leaves the propeller shaft vulnerable to corrosion damage.",
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Corrosion buildup", "surface pitting"],
            },
            "1.2 fails to deliver the required rotational power",
          ],
          [
            "6",
            "Loosened",
            [
              "6.1 Improper Installation: Improper installation of the propeller shaft components, such as bolts or joints, can result in insufficient tightening or alignment.",
              "6.2 Vibrations: Vibrations generated during operation can cause bolts or joints to gradually loosen, leading to joint separation or detachment.",
            ],
            ["Wear-out", "Random"],
            {
              type: "number",
              text: ["Bolt loosening", "Joint separation"],
            },
            "1.2 fails to deliver the required rotational power",
          ],
          [
            "7",
            "Sticking",
            [
              "7.1 Lack of Lubrication: Insufficient or improper lubrication of the propeller shaft bearings or sliding surfaces can result in increased friction and resistance, causing the shaft to stick or seize.",
              "7.2 Contamination: Contamination of lubricants or bearing surfaces with dirt, debris, or water can impair their ability to function properly.",
            ],
            ["Wear-out", "Random"],
            "-",
            "1.1 fails to transmit rotational power",
          ],
          [
            "8",
            "Vibrating",
            [
              "8.1 Unbalance: This is a situation where the weight of the propeller or shaft isn't distributed evenly.",
              "8.2 Alignment issues: If the engine, shaft, and propeller aren't perfectly aligned, it can cause the shaft to bend and vibrate.",
            ],
            ["Wear-out", "Random"],
            {
              type: "number",
              text: [
                "Increased wear on bearings and seals",
                "Fastener loosening",
              ],
            },
            "1.2 fails to deliver the required rotational power",
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
            "Cracked",
            "Risk of Catastrophic Failure: Cracks in the propeller shaft can propagate and lead to sudden, catastrophic failure, potentially causing the propeller to detach from the shaft or rendering the shaft unusable.",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: ["Visual inspection", "ultrasonic testing"],
            },
            {
              type: "dot",
              text: [
                "Regular inspection",
                "stress analysis",
                "structural reinforcement",
              ],
            },
          ],
          [
            "2",
            "Fractured",
            "Loss of Structural Integrity: A fractured propeller shaft results in a loss of structural integrity, making it unable to transmit rotational power effectively.",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: ["Visual inspection", "stress analysis"],
            },
            {
              type: "dot",
              text: [
                "Regular inspection",
                "monitoring loading conditions",
                "material testing",
              ],
            },
          ],
          [
            "3",
            "Worn",
            "Reduced Efficiency, Increased Friction: Wornin the propeller shaft leads to surface deterioration and loss of material, resulting in increased friction between the shaft and its bearings and reduce efficiency.",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: ["Visual inspection", "thickness measurements"],
            },
            {
              type: "dot",
              text: ["Regular inspection"],
            },
          ],
          [
            "4",
            "Deformed",
            "Alignment Issues, Increased Stress: Deformation of the propeller shaft, such as bending or misshaping, causes misalignment of the propeller and increases stress on the shaft and bearings.",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: ["Alignment checks", "vibration monitoring"],
            },
            {
              type: "dot",
              text: [
                "Regular alignment checks",
                "vibration analysis",
                "structural realignment",
              ],
            },
          ],
          [
            "5",
            "Corroded",
            "Reduced Structural Integrity: Corrosion buildup and pitting on the propeller shaft weaken its structural integrity, increasing the risk of structural failure.",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Visual inspection", "thickness measurements"],
            },
            {
              type: "dot",
              text: [
                "Coating with anti-corrosive agents",
                "regular cleaning",
                "material enhancement",
              ],
            },
          ],
          [
            "6",
            "Loosened",
            "Increased Risk of Detachment: Loosening of bolts or joints in the propeller shaft increases the risk of detachment or separation of critical components.",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Visual inspection", "bolt torque checks"],
            },
            {
              type: "dot",
              text: [
                "Proper installation procedures",
                "periodic bolt tightening",
                "vibration analysis",
              ],
            },
          ],
          [
            "7",
            "Sticking",
            "Reduced Efficiency, Increased Wear: Sticking of the propeller shaft due to lack of lubrication or contamination restricts its movement, leading to reduced propulsion efficiency and increased wear on the shaft and bearings.",
            "2",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Operational observation", "visual inspection"],
            },
            {
              type: "dot",
              text: [
                "Regular lubrication",
                "cleaning",
                "inspection for contaminants",
              ],
            },
          ],
          [
            "8",
            "Vibrating",
            "Increased noise and vibration and damage to other component: The vibration from the shaft can travel through the drivetrain and into the hull of the boat and damage to other component.",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Visual inspection", "Vibrating test analysis"],
            },
            {
              type: "dot",
              text: ["Regular inspection"],
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
            "Cracked",
            "3",
            "2",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "dot",
              text: [
                "inspeksi keretakan setiap 1000 jam",
                "lakukan perawatan setiap melakukan docking",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "2",
            "Fractured",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "dot",
              text: [
                "inspeksi keretakan setiap 1000 jam",
                "lakukan perawatan setiap melakukan docking",
                "Segera lakukan pergantian shaft sesuai prosedur dari vendor apabila fractured",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "3",
            "Worn",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "dot",
              text: [
                "Inspeksi kekuatan struktur shaft setiap 1000 jam",
                "Lakukan penguatan struktur shaft apabila sudah aus",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "4",
            "Deformed",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "dot",
              text: [
                "Inspeksi kekuatan struktur shaft setiap 1000 jam",
                "lakukan vibration test analysis",
                "lakukan pengencangan baut",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "5",
            "Corroded",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "lakukan inspeksi  pada shaft serta cek kondisi shaft terhadap kontaminasi kotoran, kerak atau korosi yang terjadi",
                "lapisi dengan cairan anti korosi",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "6",
            "Loosened",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Kencangkan baut apabila terjadi kelonggaran",
                "lakukan vibration test analysis",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "7",
            "Sticking",
            "2",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "lakukan pelumasan secara berkala",
                "lakukan inspeksi  pada shaft serta cek kondisi shaft terhadap kontaminasi kotoran, kerak atau korosi yang terjadi",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "8",
            "Vibrating",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: ["lakukan vibration test analysis"],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
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
              text: [
                "Pemeriksaan kekencangan dari mur dan baut pada component propeller shaft",
              ],
            },
            "FF",
            "6,2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "Dilakukan Saat Kerusakan (failure) Terjadi",
            "-",
            "Dilakukan oleh Mekanik",
          ],
          [
            {
              type: "dot",
              text: [
                "Lakukan Pengecekan terhadap sumber kontaminasi yang terjadi",
              ],
            },
            "FF",
            "7,2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "Dilakukan Saat Kerusakan (failure) Terjadi",
            "-",
            "Dilakukan oleh Mekanik",
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
              text: [
                "Inpeksi Visual terhadap kondisi Propeller Shaft",
              ],
            },
            "CM",
            ["8.1", "8.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "1000 jam dan/atau dilakukan pada: Vibration Test Analysis, Pada saat kerusakan (failure) terjadi",
            "-",
            "Ikuti petunjuk rekomendasi pabrikan/vendor",
          ],
          [
            {
              type: "dot",
              text: [
                "Lakukan Pemeriksaan Kekencangan baut pada komponen Propeller Shaft",
              ],
            },
            "PM",
            "6,1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "dilakukan apabila terjadi failure",
            "-",
            "-",
          ],
          [
            {
              type: "dot",
              text: [
                "Berikan tambahan pelumas atau ganti pelumas baru",
              ],
            },
            "PM",
            "7,1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "6 Bulan",
            "-",
            "Dilakukan oleh mekanik",
          ],
          [
            {
              type: "dot",
              text: [
                "Berikan tambahan pelumas atau ganti pelumas baru",
              ],
            },
            "PM",
            ["5.1", "5,2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "6 Bulan",
            "-",
            "Dilakukan oleh mekanik",
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
              text: [
                "Pemeriksaan Serta Perawatan Pada Kondisi Propeller Shaft yang sudah Crack"
              ] 
            },
            "PM",
            ["1.1", "1.2"],
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "Dilakukan Saat Kerusakan (failure) Terjadi",
            "-",
            "Ikuti petunjuk rekomendasi pabrikan/vendor",
          ],
          [
            { 
              type: "dot",
              text: [
                "-Pemeriksaan Serta Perawatan Pada Kondisi Propeller Shaft yang sudah Fractured"
              ] 
            },
            "PM",
            ["2.1", "2.2"],
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "Dilakukan Saat Kerusakan (failure) Terjadi",
            "-",
            "Ikuti petunjuk rekomendasi pabrikan/vendor",
          ],
          [
            { 
              type: "dot",
              text: [
                "Lakukan Replacement komponen yang mengalami kerusakan mayor"
              ] 
            },
            "OTC",
            ["3.1", "3.2"],
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "Dilakukan Saat Kerusakan (failure) Terjadi",
            "-",
            "Ikuti petunjuk rekomendasi pabrikan/vendor",
          ],
          [
            { 
              type: "dot",
              text: [
                "Lakukan Replacement komponen yang mengalami kerusakan mayor"
              ] 
            },
            "OTC",
            ["4.1", "4.2"],
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "Dilakukan Saat Kerusakan (failure) Mayor Terjadi",
            "-",
            "Ikuti petunjuk rekomendasi pabrikan/vendor",
          ],
        ],
      },
    ],
  },
  {
    slug: "propeller",
    type: "PROPELLER",
    specs: {
      functionalGroup: "Propulsion Functional Group",
      system: "Propeller and Shafting",
      subsystem: "Propeller",
      equipmentID: "SH-PROP-01",
      equipmentName: "Propeller",
      drawing: "Shafting Arragment",
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
            "convert the rotational motion generated by the ship's engine into thrust, propelling the vessel forward through the water. It is responsible for efficient propulsion, maneuverability, and control of the ship",
            "Primary",
            ["1,1", "1.2", "1.3", "1,4"],
            [
              "the propeller cannot be maneuvered/controled",
              "cannot generate thrust",
              "excess speed required",
              "cannot reach the required speed",
            ],
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
            "Structural damage (cracked, fractured, deformed)",
            [
              "1.1 Metal Fatigue:  Over time, these repeated stresses can cause metal fatigue in the propeller material.",
              "1.2 Impact with Underwater Object: A collision with rocks, debris, or other submerged objects can cause immediate structural damage, including cracks, bends, or deformations.",
            ],
            ["Wear-out", "Random"],
            {
              type: "number",
              text: ["Loss of structural integrity"],
            },
            [
              "1.1 the propeller cannot be maneuvered/controled",
              "1.2 cannot generate thrust",
            ],
          ],
          [
            "2",
            "Operates too slow (absorbs too much power from prime mover)",
            [
              "2.1 Fouling (Marine Growth, Debris): The accumulation of barnacles, seaweed, or other marine life on the propeller blades increases drag, requiring the engine to work harder (absorb more power) to maintain the same speed.",
              "2.2 Improper Pitch Setting: The propeller pitch is the angle of the blades. An incorrect pitch setting can cause the propeller to 'grip' the water inefficiently, leading to increased engine load and reduced speed.",
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Reduced propeller efficiency", "Increased engine load"],
            },
            [
              "1.2 cannot generate thrust",
              "1.4 cannot reach the required speed",
            ],
          ],
          [
            "3",
            "Operates too fast (develops insufficient thrust)",
            [
              "3.1 Cavitation: When the propeller spins too fast or operates in low water pressure conditions, air bubbles can form on the blades (cavitation).",
            ],
            ["Random"],
            {
              type: "number",
              text: [
                "Reduced thrust generation",
                "Potential for blade erosion",
              ],
            },
            ["1.2 cannot generate thrust", "1.3 excess speed required"],
          ],
          [
            "4",
            "Operates with high vibration level",
            [
              "4.1 Unbalanced Propeller Blade: A  fatigue can cause a propeller blade to bend slightly.",
              "4.2 Misalignment: If the propeller shaft is not perfectly aligned with the engine crankshaft, it can cause vibrations throughout the drivetrain as the propeller spins.",
            ],
            ["Wear-Out", "Wear-Out"],
            {
              type: "number",
              text: [
                "Increased wear and tear on bearings and shaft components",
              ],
            },
            "1.2 cannot generate thrust",
          ],
          [
            "5",
            "Operates at degraded power",
            [
              "5.1 Loss of Blade Area (Damage, Erosion): Over time, propeller blades can be damaged by impacts, cavitation, or corrosion, reducing the total blade area available to push water and generate thrust.",
              "5.2 Corrosion: Saltwater exposure can cause the propeller metal to corrode, weakening the blades and reducing their overall efficiency.",
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Reduced propeller efficiency and thrust generation"],
            },
            "1.2 cannot generate thrust",
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
            "Structural damage (cracked, fractured, deformed)",
            "Reduced Thrust: Damaged blades are less effective at pushing water, leading to a decrease in the vessel's speed and maneuverability.",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: [
                "Visual inspection for cracks or damage during underwater surveys",
                "Abnormal vibration readings.",
              ],
            },
            {
              type: "dot",
              text: [
                "Regular visual inspections",
                "periodic structural testing, and repair damaged parts",
              ],
            },
          ],
          [
            "2",
            "Operates too slow (absorbs too much power from prime mover)",
            "Increased Fuel Consumption: The engine's increased workload to maintain speed leads to higher fuel consumption and reduced operating efficiency.",
            "2",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Visual inspection for excessive marine growth during underwater surveys.",
                "Engine performance monitoring (increased engine load).",
              ],
            },
            {
              type: "dot",
              text: ["Regular performance monitoring", "adjust pitch settings"],
            },
          ],
          [
            "3",
            "Operates too fast (develops insufficient thrust)",
            "Increased Engine RPM (to compensate for reduced thrust): To maintain some level of speed, the engine control system may increase engine RPM to compensate for the lack of thrust",
            "2",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Unusual propeller cavitation noises during operation.",
                "Engine performance monitoring (increased RPM).",
              ],
            },
            {
              type: "dot",
              text: [
                "Regular performance monitoring",
                "alignment checks, and load adjustments",
              ],
            },
          ],
          [
            "4",
            "Operates with high vibration level",
            "Potential for Damage to Shaft and Bearings: Severe vibrations can damage the propeller shaft itself and its bearings, requiring costly repairs or replacements.",
            "3",
            "2",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: [
                "Excessive vibration readings from monitoring systems.",
                "Unusual noises during operation",
              ],
            },
            {
              type: "dot",
              text: [
                "Regular vibration monitoring",
                "alignment checks, and tightening connections",
              ],
            },
          ],
          [
            "5",
            "Operates at degraded power",
            "Reduced Vessel Speed & Increase FO consumption: With less blade area or propeller efficiency due to damage or corrosion, the vessel experiences a reduction in speed and maneuverability and leading to higher fuel consumption",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Engine performance monitoring (reduced power output)",
                "Visual inspection for blade damage during underwater surveys",
              ],
            },
            {
              type: "dot",
              text: ["Regular maintenance", "monitoring power output"],
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
            "Structural damage (cracked, fractured, deformed)",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "dot",
              text: [
                "inspeksi visual terhadap kerusakan",
                "lakukan perbaikan apabila terjadi kerusakan mayor",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "2",
            "Operates too slow (absorbs too much power from prime mover)",
            "2",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "lakukan pembersihan terhadap debrish yang menempel pada komponen",
                "Lakukan re-adjustment pada pitch",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "3",
            "Operates too fast (develops insufficient thrust)",
            "2",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "lakukan pengurangan beban dan kecepatan untuk mengurangi tekanan yang menyebabkan kavitasi",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "4",
            "Operates with high vibration level",
            "3",
            "2",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "dot",
              text: [
                "lakukan balancing propeller",
                "lakukan pengencangan mur dan baut",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "5",
            "Operates at degraded power",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "inspeksi kondisi visual, apabila terjadi korosi, kerusakan, dll lakukan segera perawatan",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
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
              text: [
                "Lakukan Vibration Monitoring untuk mengidentifikasi kelainan atau perubahan pola getaran.",
              ],
            },
            "FF",
            "1.2",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "Dilakukan Saat Kerusakan (failure) Terjadi",
            "-",
            "dilakukan oleh mekanik",
          ],
          [
            {
              type: "dot",
              text: [
                "Lakukan simulasi CFD untuk membantu mengidentifikasi area rawan kavitasi dan mengoptimalkan desain baling-baling",
              ],
            },
            "FF",
            "3,1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "dilakukan apabila terjadi failure",
            "-",
            "-",
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
              text: [
                "Inspeksi visual dan perawatan pada propeller"
              ] 
            },
            "PM",
            "1.1",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "6 bulan dan/atau Dilakukan pada: Pada saat kerusakan (failure) terjadi",
            "-",
            "di lakukan saat dry dock",
          ],
          [
            { 
              type: "dot",
              text: [
                "-lakukan pembersihan dan gunakan cairan anti fouling",
                "lakukan re-adjustment pada pitch propeller",
              ] 
            },
            "PM",
            "2.1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "6 bulan dan/atau Dilakukan pada: Pada saat kerusakan (failure) terjadi",
            "-",
            "di lakukan saat dry dock",
          ],
          [
            { 
              type: "dot",
              text: [
                "Lakukan balancing propeller",
                "Lakukan re-alignment pada shaft yang terjadi misalignment",
                "kencangkan baut dan mur yang longgar",
              ] 
            },
            "PM",
            ["4.1", '4.2'],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "6 bulan dan/atau Dilakukan pada: Pada saat kerusakan (failure) terjadi",
            "-",
            "di lakukan saat dry dock",
          ],
          [
            { 
              type: "dot",
              text: [
                "Lakukan inspeksi visual dan perawatan",
                "gunakan cairan anti korosi",
              ] 
            },
            "PM",
            ["5.1", '5.2'],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "6 bulan dan/atau Dilakukan pada: Pada saat kerusakan (failure) terjadi",
            "-",
            "di lakukan saat dry dock",
          ],
        ],
      },
    ],
  },
  {
    slug: "stern-tube",
    type: "PROPELLER",
    specs: {
      functionalGroup: "Propulsion Functional Group",
      system: "Propeller and Shafting",
      subsystem: "Propeller",
      equipmentID: "SH-STB-01",
      equipmentName: "Stern tube",
      drawing: "Shafting Arragment",
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
            "provide support and alignment for the ship's propeller shaft as it extends from the hull into the water",
            "Primary",
            ["1,1"],
            [
              "Cannot provide support and alignment for the ship's propeller shaft",
            ],
          ],
          [
            "2",
            "preventing seawater from entering the ship while allowing smooth rotation of the shaft",
            "Primary",
            ["2.1"],
            ["failed to prevent the entry of sea water"],
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
            "Cracked",
            [
              "1.1 Stress Concentration: Areas of high stress concentration, such as sharp corners or sudden changes in geometry, can lead to crack initiation and propagation within the stern tube.",
              "1.2 Fatigue: Repeated cyclic loading and unloading of the stern tube, caused by operational conditions like vibration or changes in load, can lead to fatigue failure over time.",
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Surface cracks", "propagation"],
            },
            [
              "1.1 Cannot provide support and alignment for the ship's propeller shaft",
            ],
          ],
          [
            "2",
            "Fractured",
            [
              "2.1 Excessive Loading: Subjecting the stern tube to loads beyond its design limits, such as heavy impacts or sudden changes in operating conditions, can result in instantaneous fracture.",
              "2.2 Material Defects: Inherent defects in the material used to construct the stern tube, such as voids, inclusions, or inconsistencies, can create weak points susceptible to fractured.",
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Sudden breakage", "complete fracture"],
            },
            [
              "1.1 Cannot provide support and alignment for the ship's propeller shaft",
            ],
          ],
          [
            "3",
            "Worn",
            [
              "3.1  Abrasion: Continuous contact and rubbing between the stern tube and other components, such as the propeller shaft or bearings, can lead to abrasive wear over time.",
              "3.2  Erosion: Erosion occurs when the stern tube is exposed to abrasive elements in the environment, such as sand or sediment in seawater.",
            ],
            ["Random", "Random"],
            {
              type: "number",
              text: ["Surface wear", "loss of material"],
            },
            [
              "1.1 Cannot provide support and alignment for the ship’s propeller shaft",
            ],
          ],
          [
            "4",
            "Deformed",
            [
              "4.1 Misalignment:  Improper alignment between the stern tube and associated components, such as the propeller shaft or bearings, can result in excessive stress and deformation of the stern tube",
              "4.2 Excessive Vibration: Excessive vibration during operation, caused by factors such as imbalance or mechanical resonance, can lead to deformation of the stern tube.",
            ],
            ["Random", "Random"],
            {
              type: "number",
              text: ["Distortion", "bending", "misshape"],
            },
            "1.1 Cannot provide support and alignment for the ship's propeller shaft",
          ],
          [
            "5",
            "Corroded",
            [
              "5.1 Exposure to Corrosive Elements: Exposure to corrosive elements in the environment, such as saltwater or chemicals, can lead to corrosion of the stern tube surface.",
              "5.2 Lack of Protective Coating: Without adequate protection, such as anti-corrosive coatings or sacrificial anodes, the stern tube is vulnerable to corrosion.",
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Corrosion buildup", "surface pitting"],
            },
            "1.1 Cannot provide support and alignment for the ship's propeller shaft",
          ],
          [
            "6",
            "Loosened",
            [
              "6.1  Improper Installation: Incorrect installation procedures, such as insufficient torque or improper alignment of fasteners, can result in loosening of bolts or joints connecting the stern tube components.",
              "6.2 Vibrations: Vibrations generated during operation, caused by factors such as unbalanced rotating components or mechanical resonance, can gradually loosen bolts or joints in the stern tube assembly",
            ],
            ["Wear-out", "Random"],
            {
              type: "number",
              text: ["Bolt loosening", " joint separation"],
            },
            "1.1 Cannot provide support and alignment for the ship's propeller shaft",
          ],
          [
            "7",
            "Leaking",
            [
              "7.1 Seal Degradation: Deterioration or damage to seals used to prevent fluid leakage from the stern tube can lead to seal failure and leakage.",
              "7.2 Seal Misalignment: Misalignment of seals, caused by factors such as improper installation or mechanical movement, can compromise their effectiveness in preventing fluid leakage.",
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Fluid leakage", "seal failure"],
            },
            "2.1 Failed to prevent the entry of sea water",
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
            "Cracked",
            "Risk of Catastrophic Failure: Cracks in the stern tube can propagate and lead to sudden, catastrophic failure if left unaddressed",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: ["Visual inspection", "ultrasonic testing"],
            },
            {
              type: "dot",
              text: [
                "Regular inspection",
                "stress analysis",
                "structural reinforcement",
              ],
            },
          ],
          [
            "2",
            "Fractured",
            "Loss of Structural Integrity: A fractured stern tube results in a loss of structural integrity, compromising its ability to support and align the propeller shaft properly.",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: ["Visual inspection", "stress analysis"],
            },
            {
              type: "dot",
              text: [
                "Regular inspection",
                "monitoring loading conditions",
                "material testing",
              ],
            },
          ],
          [
            "3",
            "Worm",
            "Reduced Efficiency, Increased Friction: Wear in the stern tube results in surface deterioration and loss of material and can reduce efficiency.",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Visual inspection", "thickness measurements"],
            },
            {
              type: "dot",
              text: ["Regular Inspection"],
            },
          ],
          [
            "4",
            "Deformed",
            "Alignment Issues, Increased Stress: Deformation of the stern tube, such as bending or misshaping, can cause misalignment of the propeller shaft.",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: ["Alignment checks", "vibration monitoring"],
            },
            {
              type: "dot",
              text: [
                "Regular alignment checks",
                "vibration analysis",
                "structural realignment",
              ],
            },
          ],
          [
            "5",
            "Corroded",
            "5.1 Reduced Structural Integrity: Corrosion buildup and pitting on the stern tube surface weaken its structural integrity.",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Visual inspection", "thickness measurements"],
            },
            {
              type: "dot",
              text: [
                "Coating with anti-corrosive agents",
                "regular cleaning",
                "material enhancement",
              ],
            },
          ],
          [
            "6",
            "Loosened",
            "Increased Risk of Detachment: Loosening of bolts or joints in the stern tube increases the risk of detachment or separation of critical components",
            "2",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Visual inspection", "bolt torque checks"],
            },
            {
              type: "dot",
              text: [
                "Proper installation procedures",
                "periodic bolt tightening",
                "vibration analysis",
              ],
            },
          ],
          [
            "7",
            "Leaking",
            "Increased Risk of Water Ingress: Leakage from seals or joints in the stern tube allows water to enter the system, increasing the risk of corrosion, wear, and damage to the propeller shaft and associated components.",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Operational observation", "visual inspection"],
            },
            {
              type: "dot",
              text: [
                "Regular lubrication",
                "cleaning",
                "inspection for contaminants",
              ],
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
            "Cracked",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "dot",
              text: [
                "inspeksi visual terhadap keretakan",
                "lakukan perawatan setiap melakukan docking",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "2",
            "Fractured",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "dot",
              text: [
                "lakukan pembersihan terhadap debrish yang menempel pada komponen",
                "Lakukan re-adjustment pada pitch",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "3",
            "Worn",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Inspeksi kekuatan stern tube",
                "Lakukan penguatan struktur stern tube apabila sudah aus",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "4",
            "Deformed",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "dot",
              text: [
                "Inspeksi kekuatan struktur stern tube setiap 1000 jam",
                "lakukan vibration test analysis",
                "lakukan pengencangan baut",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "5",
            "Corroded",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "lakukan inspeksi  pada stern tube serta cek kondisi stern tube terhadap kontaminasi kotoran, kerak atau korosi yang terjadi",
                "lapisi dengan cairan anti korosi",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "6",
            "Loosened",
            "2",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Kencangkan baut apabila terjadi kelonggaran",
                "lakukan vibration test analysis",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "7",
            "Leaking",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: ["Cek kondisi sealing, lakukan replacement apabila rusak"],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
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
              text: [
                "Berikan/Tambahkan Cairan Anti Korosi",
              ],
            },
            "PM",
            ["5.1", "5.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "Dilakukan Saat Kerusakan (failure) Terjadi",
            "-",
            "dilakukan oleh mekanik",
          ],
          [
            {
              type: "dot",
              text: [
                "Lakukan Pemeriksaan Kekencangan baut pada komponen Propeller Shaft",
              ],
            },
            "PM",
            "6,1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "dilakukan apabila terjadi failure",
            "-",
            "-",
          ],
          [
            {
              type: "dot",
              text: [
                "Berikan/Tambahkan Cairan Anti Korosi",
              ],
            },
            "CM",
            "6.2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "Dilakukan Saat Kerusakan (failure) Terjadi",
            "-",
            "Ikuti petunjuk rekomendasi pabrikan/vendor",
          ],
          [
            {
              type: "dot",
              text: [
                "Segera lakukan pergantian seal apabila terjadi kegagalan",
              ],
            },
            "PM",
            ["7.1", "7.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "dilakukan apabila terjadi failure",
            "-",
            "Ikuti petunjuk rekomendasi pabrikan/vendor",
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
              text: [
                "Inspeksi visual dan perawatan pada propeller"
              ] 
            },
            "PM",
            "1.1",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "6 bulan dan/atau Dilakukan pada: Pada saat kerusakan (failure) terjadi",
            "-",
            "di lakukan saat dry dock",
          ],
          [
            { 
              type: "dot",
              text: [
                "-lakukan pembersihan dan gunakan cairan anti fouling",
                "lakukan re-adjustment pada pitch propeller",
              ] 
            },
            "PM",
            "2.1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "6 bulan dan/atau Dilakukan pada: Pada saat kerusakan (failure) terjadi",
            "-",
            "di lakukan saat dry dock",
          ],
          [
            { 
              type: "dot",
              text: [
                "Lakukan balancing propeller",
                "Lakukan re-alignment pada shaft yang terjadi misalignment",
                "kencangkan baut dan mur yang longgar",
              ] 
            },
            "PM",
            ["4.1", '4.2'],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "6 bulan dan/atau Dilakukan pada: Pada saat kerusakan (failure) terjadi",
            "-",
            "di lakukan saat dry dock",
          ],
          [
            { 
              type: "dot",
              text: [
                "Lakukan inspeksi visual dan perawatan",
                "gunakan cairan anti korosi",
              ] 
            },
            "PM",
            ["5.1", '5.2'],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "6 bulan dan/atau Dilakukan pada: Pada saat kerusakan (failure) terjadi",
            "-",
            "di lakukan saat dry dock",
          ],
        ],
      },
    ],
  },
  {
    slug: "coupling-1",
    type: "SHAFTING",
    specs: {
      functionalGroup: "Propulsion Functional Group",
      system: "Propeller and Shafting",
      subsystem: "Shafting",
      equipmentID: "SH-CPL-01",
      equipmentName: "Coupling 1",
      drawing: "Shafting Arragment",
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
            "to connect and transmit rotational power between the propulsion engine and the propeller shaft.",
            "Primary",
            ["1,1", "1,2"],
            [
              "Fails to transmit rotational power (total loss)",
              "Fails to transmit required rotational power (partial loss)",
            ],
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
            "Fails to transmit torque",
            [
              "1.1 Misalignment: Improper alignment of the coupling with the shaft can hinder the transmission of torque, leading to inefficiencies and increased wear.",
              "1.2 Material defect: Material defects or degradation can compromise the structural integrity of the coupling, preventing effective torque transmission.",
            ],
            ["Random", "Wear-out"],
            {
              type: "number",
              text: [
                "Reduced propulsion efficiency",
                "Increased wear and potential damage",
              ],
            },
            ["-"],
          ],
          [
            "2",
            "Degraded torque transmission",
            [
              "2.1  Wear: Normal or accelerated wear reduces the coupling’s effectiveness to maintain proper grip and alignment",
              "2.2 Fatigue: Repeated stress can lead to micro-cracks and eventual breakdown of the coupling material.",
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: [
                "Loss of propulsion power and efficiency.",
                "Potential for sudden failure leading to total loss of propulsion.",
              ],
            },
            ["-"],
          ],
          [
            "3",
            "Overheats",
            [
              "3.1 Inadequate lubrication: Lack of sufficient lubrication can cause increased friction and heat.",
              "3.2 Overload: Exceeding the design load of the coupling can lead to excessive heat due to friction and material deformation.",
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: [
                "Possible damage to the coupling and adjacent shaft components.",
                "Increased risk of fire or melting of critical components.",
              ],
            },
            ["-"],
          ],
          [
            "4",
            "Operates with high vibration/noise level",
            [
              "4.1 Unbalance: Imbalance in the rotational mass can cause the system to vibrate excessively.",
              "4.2 Loosened: Fasteners or components that have loosened over time can cause instability and vibration.",
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: [
                "Increased stress on bearings and mountings, potentially leading to their premature failure.",
                "Discomfort and potential structural damage due to continuous vibration.",
              ],
            },
            "-",
          ],
          [
            "5",
            "External leak",
            [
              "5.1 Seal failure: Deterioration or damage to seals can allow fluids to escape.",
              "5.2 Gasket breakdown: Degradation or damage of gaskets used within the coupling assembly.",
            ],
            ["Random", "Wear-out"],
            {
              type: "number",
              text: [
                "Contamination of the environment and possible slipping hazards.",
                "Loss of fluid can lead to reduced lubrication and cooling, potentially causing overheating and further damage.",
              ],
            },
            "-",
          ],
          [
            "6",
            "Loosened",
            [
              "6.1 Improper installation: Incorrect torque on fasteners or poor assembly practices can lead to loosening over time.",
              "6.2 Vibration: Ongoing vibration can cause fasteners to gradually loosen.",
            ],
            ["Wear-out", "Random"],
            {
              type: "number",
              text: [
                "Misalignment and uneven load distribution.",
                "Potential for disconnection or catastrophic failure if not detected and corrected.",
              ],
            },
            "-",
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
            "Fails to transmit torque",
            "Loss of propulsion due to inability to transfer torque effectively.",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: ["Torque measurements", "Audible noise"],
            },
            {
              type: "dot",
              text: ["Regular alignment checks", "Replace worn parts"],
            },
          ],
          [
            "2",
            "Degraded torque transmission",
            "Reduced propulsion efficiency due to inadequate torque transfer.",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: ["Performance monitoring", "Vibration analysis"],
            },
            {
              type: "dot",
              text: ["Regular inspections", "Replace faulty components"],
            },
          ],
          [
            "3",
            "Overheats",
            "Potential damage to the coupling and adjacent components due to excessive heat.",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Temperature monitoring", "Visual inspection"],
            },
            {
              type: "dot",
              text: ["Ensure proper coupling", "Monitor load conditions"],
            },
          ],
          [
            "4",
            "Operates with high vibration/noise level",
            "Increased wear and tear on bearings and shafts due to excessive vibration.",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Vibration analysis", "Audible inspection"],
            },
            {
              type: "dot",
              text: ["Balance coupling", "Regular alignment"],
            },
          ],
          [
            "5",
            "External leak",
            "Loss of lubrication oil or hydraulic fluid, leading to potential damage to the coupling and surrounding components.",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Visual inspection", "Oil level checks"],
            },
            {
              type: "dot",
              text: ["Replace seals and gaskets", "Routine checks"],
            },
          ],
          [
            "6",
            "Loosened",
            "Misalignment of shafting components, leading to increased wear and potential damage.",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: ["Regular bolt/nut checks", "Vibration analysis"],
            },
            {
              type: "dot",
              text: ["Tighten to specifications", "Regular maintenance checks"],
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
            "Fails to transmit torque",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "dot",
              text: ["inspeksi visual", "lakukan alignment check"],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "2",
            "Degraded torque transmission",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "dot",
              text: [
                "lakukan inspeksi terhadap komponen",
                "lakukan vibration analysis",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "3",
            "Overheats",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "lakukan inspeksi terhadap lubrikan",
                "lakukan pengukuran temperatur dengan non-contact thermogun",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "4",
            "Operates with high vibration/noise level",
            "3",
            "2",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "dot",
              text: [
                "lakukan Vibration analysis",
                "lakukan visual inspeksi terhadap kondisi komponen",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "5",
            "External leak",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "lakukan pressure test terhadap komponen",
                "lakukan visual inpeksi terhadap komponen",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "6",
            "Loosened",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "dot",
              text: [
                "Kencangkan baut apabila terjadi kelonggaran",
                "lakukan vibration test analysis",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
        ],
      },
    ],
  },
  {
    slug: "coupling-2",
    type: "SHAFTING",
    specs: {
      functionalGroup: "Propulsion Functional Group",
      system: "Propeller and Shafting",
      subsystem: "Shafting",
      equipmentID: "SH-CPL-02",
      equipmentName: "Coupling 2",
      drawing: "Shafting Arragment",
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
            "to connect and transmit rotational power between the propulsion engine and the propeller shaft.",
            "Primary",
            ["1,1", "1,2"],
            [
              "Fails to transmit rotational power (total loss)",
              "Fails to transmit required rotational power (partial loss)",
            ],
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
            "Fails to transmit torque",
            [
              "1.1 Misalignment: Improper alignment of the coupling with the shaft can hinder the transmission of torque, leading to inefficiencies and increased wear.",
              "1.2 Material defect: Material defects or degradation can compromise the structural integrity of the coupling, preventing effective torque transmission.",
            ],
            ["Random", "Wear-out"],
            {
              type: "number",
              text: [
                "Reduced propulsion efficiency",
                "Increased wear and potential damage",
              ],
            },
            ["-"],
          ],
          [
            "2",
            "Degraded torque transmission",
            [
              "2.1  Wear: Normal or accelerated wear reduces the coupling’s effectiveness to maintain proper grip and alignment",
              "2.2 Fatigue: Repeated stress can lead to micro-cracks and eventual breakdown of the coupling material.",
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: [
                "Loss of propulsion power and efficiency.",
                "Potential for sudden failure leading to total loss of propulsion.",
              ],
            },
            ["-"],
          ],
          [
            "3",
            "Overheats",
            [
              "3.1 Inadequate lubrication: Lack of sufficient lubrication can cause increased friction and heat.",
              "3.2 Overload: Exceeding the design load of the coupling can lead to excessive heat due to friction and material deformation.",
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: [
                "Possible damage to the coupling and adjacent shaft components.",
                "Increased risk of fire or melting of critical components.",
              ],
            },
            ["-"],
          ],
          [
            "4",
            "Operates with high vibration/noise level",
            [
              "4.1 Unbalance: Imbalance in the rotational mass can cause the system to vibrate excessively.",
              "4.2 Loosened: Fasteners or components that have loosened over time can cause instability and vibration.",
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: [
                "Increased stress on bearings and mountings, potentially leading to their premature failure.",
                "Discomfort and potential structural damage due to continuous vibration.",
              ],
            },
            "-",
          ],
          [
            "5",
            "External leak",
            [
              "5.1 Seal failure: Deterioration or damage to seals can allow fluids to escape.",
              "5.2 Gasket breakdown: Degradation or damage of gaskets used within the coupling assembly.",
            ],
            ["Random", "Wear-out"],
            {
              type: "number",
              text: [
                "Contamination of the environment and possible slipping hazards.",
                "Loss of fluid can lead to reduced lubrication and cooling, potentially causing overheating and further damage.",
              ],
            },
            "-",
          ],
          [
            "6",
            "Loosened",
            [
              "6.1 Improper installation: Incorrect torque on fasteners or poor assembly practices can lead to loosening over time.",
              "6.2 Vibration: Ongoing vibration can cause fasteners to gradually loosen.",
            ],
            ["Wear-out", "Random"],
            {
              type: "number",
              text: [
                "Misalignment and uneven load distribution.",
                "Potential for disconnection or catastrophic failure if not detected and corrected.",
              ],
            },
            "-",
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
            "Fails to transmit torque",
            "Loss of propulsion due to inability to transfer torque effectively.",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: ["Torque measurements", "Audible noise"],
            },
            {
              type: "dot",
              text: ["Regular alignment checks", "Replace worn parts"],
            },
          ],
          [
            "2",
            "Degraded torque transmission",
            "Reduced propulsion efficiency due to inadequate torque transfer.",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: ["Performance monitoring", "Vibration analysis"],
            },
            {
              type: "dot",
              text: ["Regular inspections", "Replace faulty components"],
            },
          ],
          [
            "3",
            "Overheats",
            "Potential damage to the coupling and adjacent components due to excessive heat.",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Temperature monitoring", "Visual inspection"],
            },
            {
              type: "dot",
              text: ["Ensure proper coupling", "Monitor load conditions"],
            },
          ],
          [
            "4",
            "Operates with high vibration/noise level",
            "Increased wear and tear on bearings and shafts due to excessive vibration.",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Vibration analysis", "Audible inspection"],
            },
            {
              type: "dot",
              text: ["Balance coupling", "Regular alignment"],
            },
          ],
          [
            "5",
            "External leak",
            "Loss of lubrication oil or hydraulic fluid, leading to potential damage to the coupling and surrounding components.",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Visual inspection", "Oil level checks"],
            },
            {
              type: "dot",
              text: ["Replace seals and gaskets", "Routine checks"],
            },
          ],
          [
            "6",
            "Loosened",
            "Misalignment of shafting components, leading to increased wear and potential damage.",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: ["Regular bolt/nut checks", "Vibration analysis"],
            },
            {
              type: "dot",
              text: ["Tighten to specifications", "Regular maintenance checks"],
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
            "Fails to transmit torque",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "dot",
              text: ["inspeksi visual", "lakukan alignment check"],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "2",
            "Degraded torque transmission",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "dot",
              text: [
                "lakukan inspeksi terhadap komponen",
                "lakukan vibration analysis",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "3",
            "Overheats",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "lakukan inspeksi terhadap lubrikan",
                "lakukan pengukuran temperatur dengan non-contact thermogun",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "4",
            "Operates with high vibration/noise level",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "lakukan Vibration analysis",
                "lakukan visual inspeksi terhadap kondisi komponen",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "5",
            "External leak",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "lakukan pressure test terhadap komponen",
                "lakukan visual inpeksi terhadap komponen",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "6",
            "Loosened",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "dot",
              text: [
                "Kencangkan baut apabila terjadi kelonggaran",
                "lakukan vibration test analysis",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
        ],
      },
    ],
  },
  {
    slug: "intermediet-shaft-2",
    type: "SHAFTING",
    specs: {
      functionalGroup: "Propulsion Functional Group",
      system: "Propeller and Shafting",
      subsystem: "Shafting",
      equipmentID: "SH-INTS-02",
      equipmentName: "Intermediet Shaft 2",
      drawing: "Shafting Arragment",
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
            "transmit rotational power from the ship's engine to the main shaft",
            "Primary",
            ["1,1", "1,2"],
            [
              "fails to transmit rotational power",
              "fails to deliver the required rotational power",
            ],
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
            "Cracked",
            [
              "1.1  Stress Concentration: Stress concentration occurs due to irregularities or discontinuities in the material or design of the propeller shaft.",
              "1.2 Fatigue: Fatigue occurs when the propeller shaft is subjected to repeated cyclic loading and unloading.",
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Surface cracks", "propagation"],
            },
            ["1.2 fails to deliver the required rotational power"],
          ],
          [
            "2",
            "Fractured",
            [
              "2.1  Excessive Loading: Excessive loading beyond the design limits of the propeller shaft can cause it to exceed its yield strength, resulting in sudden and complete fracture.",
              "2.2  Material Defects: Material defects such as voids, inclusions, or inconsistencies in the metal structure can create weak points in the propeller shaft.",
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Sudden breakage", "complete fracture"],
            },
            ["1.1 fails to transmit rotational power"],
          ],
          [
            "3",
            "Worn",
            [
              "3.1 Abrasion: Abrasion occurs when the surface of the propeller shaft is continuously rubbed or scraped against another surface.",
              "3.2 Erosion: Erosion happens when the surface of the propeller shaft gradually wears away due to the abrasive action of water, sediment, or other contaminants in the marine environment",
            ],
            ["Random", "Random"],
            {
              type: "number",
              text: ["Surface wear", "loss of material"],
            },
            ["1.2 fails to deliver the required rotational power"],
          ],
          [
            "4",
            "Deformed",
            [
              "4.1 Misalignment: Misalignment of the propeller shaft can cause uneven distribution of forces, leading to deformation or bending of the shaft over time",
              "4.2 Excessive Vibration: Excessive vibration of the propeller shaft can induce dynamic forces that exceed the material's yield strength, causing it to deform or bend.",
            ],
            ["Random", "Random"],
            {
              type: "number",
              text: ["Distortion", "bending", "misshape"],
            },
            "1.1 fails to transmit rotational power",
          ],
          [
            "5",
            "Corroded",
            [
              "5.1 Exposure to Corrosive Elements: Exposure to corrosive elements such as saltwater, chemicals, or pollutants can initiate corrosion.",
              " 5.2 Lack of Protective Coating: A lack of protective coating or inadequate corrosion protection leaves the propeller shaft vulnerable to corrosion damage.",
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Corrosion buildup", "surface pitting"],
            },
            "1.2 fails to deliver the required rotational power",
          ],
          [
            "6",
            "Loosened",
            [
              "6.1 Improper installation: Incorrect torque on fasteners or poor assembly practices can lead to loosening over time.",
              "6.2 Vibration: Ongoing vibration can cause fasteners to gradually loosen.",
            ],
            ["Wear-out", "Random"],
            {
              type: "number",
              text: ["Bolt loosening", "Joint separation"],
            },
            "1.2 fails to deliver the required rotational power",
          ],
          [
            "7",
            "Sticking",
            [
              "7.1 Lack of Lubrication: Insufficient or improper lubrication of the propeller shaft bearings or sliding surfaces can result in increased friction and resistance, causing the shaft to stick or seize.",
              "7.2 Contamination: Contamination of lubricants or bearing surfaces with dirt, debris, or water can impair their ability to function properly.",
            ],
            ["Wear-out", "Random"],
            "-",
            "1.1 fails to transmit rotational power",
          ],
          [
            "8",
            "Vibrating",
            [
              "8.1 Unbalance: This is a situation where the weight of the propeller or shaft isn't distributed evenly.",
              "8.2 Alignment issues: If the engine, shaft, and propeller aren't perfectly aligned, it can cause the shaft to bend and vibrate.",
            ],
            ["Wear-out", "Random"],
            {
              type: "number",
              text: [
                "Increased wear on bearings and seals",
                "Fastener loosening",
              ],
            },
            "1.2 fails to deliver the required rotational power",
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
            "Cracked",
            "Risk of Catastrophic Failure: Cracks in the propeller shaft can propagate and lead to sudden, catastrophic failure, potentially causing the propeller to detach from the shaft or rendering the shaft unusable.",
            "4",
            "2",
            {
              type: "class",
              text: ["Menengah-Tinggi"],
            },
            {
              type: "number",
              text: ["Visual inspection", "ultrasonic testing"],
            },
            {
              type: "dot",
              text: [
                "Regular inspection",
                "stress analysis",
                "structural reinforcement",
              ],
            },
          ],
          [
            "2",
            "Fractured",
            "Loss of Structural Integrity: A fractured propeller shaft results in a loss of structural integrity, making it unable to transmit rotational power effectively.",
            "4",
            "2",
            {
              type: "class",
              text: ["Menengah-Tinggi"],
            },
            {
              type: "number",
              text: ["Visual inspection", "ultrasonic testing"],
            },
            {
              type: "dot",
              text: [
                "Regular inspection",
                "stress analysis",
                "structural reinforcement",
              ],
            },
          ],
          [
            "3",
            "Worn",
            "Reduced Efficiency, Increased Friction: Wornin the propeller shaft leads to surface deterioration and loss of material, resulting in increased friction between the shaft and its bearings and reduce efficiency.",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Visual inspection", "ultrasonic testing"],
            },
            {
              type: "dot",
              text: [
                "Regular inspection",
                "stress analysis",
                "structural reinforcement",
              ],
            },
          ],
          [
            "4",
            "Deformed",
            "Alignment Issues, Increased Stress: Deformation of the propeller shaft, such as bending or misshaping, causes misalignment of the propeller and increases stress on the shaft and bearings.",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: ["Visual inspection", "ultrasonic testing"],
            },
            {
              type: "dot",
              text: [
                "Regular inspection",
                "stress analysis",
                "structural reinforcement",
              ],
            },
          ],
          [
            "5",
            "Corroded",
            "Reduced Structural Integrity: Corrosion buildup and pitting on the propeller shaft weaken its structural integrity, increasing the risk of structural failure.",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Visual inspection", "ultrasonic testing"],
            },
            {
              type: "dot",
              text: [
                "Regular inspection",
                "stress analysis",
                "structural reinforcement",
              ],
            },
          ],
          [
            "6",
            "Loosened",
            "Increased Risk of Detachment: Loosening of bolts or joints in the propeller shaft increases the risk of detachment or separation of critical components.",
            "3",
            "2",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: ["Visual inspection", "ultrasonic testing"],
            },
            {
              type: "dot",
              text: [
                "Regular inspection",
                "stress analysis",
                "structural reinforcement",
              ],
            },
          ],
          [
            "7",
            "Sticking",
            "Reduced Efficiency, Increased Wear: Sticking of the propeller shaft due to lack of lubrication or contamination restricts its movement, leading to reduced propulsion efficiency and increased wear on the shaft and bearings.",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Visual inspection", "ultrasonic testing"],
            },
            {
              type: "dot",
              text: [
                "Regular inspection",
                "stress analysis",
                "structural reinforcement",
              ],
            },
          ],
          [
            "8",
            "Vibrating",
            "Increased noise and vibration and damage to other component: The vibration from the shaft can travel through the drivetrain and into the hull of the boat and damage to other component.",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Visual inspection", "ultrasonic testing"],
            },
            {
              type: "dot",
              text: [
                "Regular inspection",
                "stress analysis",
                "structural reinforcement",
              ],
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
            "Cracked",
            "4",
            "2",
            {
              type: "class",
              text: ["Menengah-Tinggi"],
            },
            {
              type: "dot",
              text: [
                "inspeksi keretakan setiap 1000 jam",
                "lakukan perawatan setiap melakukan docking",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Menengah"],
            },
          ],
          [
            "2",
            "Fractured",
            "4",
            "2",
            {
              type: "class",
              text: ["Menengah-Tinggi"],
            },
            {
              type: "dot",
              text: [
                "inspeksi keretakan setiap 1000 jam",
                "lakukan perawatan setiap melakukan docking",
                "Segera lakukan pergantian shaft sesuai prosedur dari vendor apabila fractured",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Menengah"],
            },
          ],
          [
            "3",
            "Worn",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Inspeksi kekuatan struktur shaft setiap 1000 jam",
                "Lakukan penguatan struktur shaft apabila sudah aus",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "4",
            "Deformed",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "dot",
              text: [
                "Inspeksi kekuatan struktur shaft setiap 1000 jam",
                "lakukan vibration test analysis",
                "lakukan pengencangan baut",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "5",
            "Corroded",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "lakukan inspeksi  pada shaft serta cek kondisi shaft terhadap kontaminasi kotoran, kerak atau korosi yang terjadi",
                "lapisi dengan cairan anti korosi",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "6",
            "Loosened",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Kencangkan baut apabila terjadi kelonggaran",
                "lakukan vibration test analysis",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "7",
            "Sticking",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "lakukan pelumasan secara berkala",
                "lakukan inspeksi  pada shaft serta cek kondisi shaft terhadap kontaminasi kotoran, kerak atau korosi yang terjadi",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "6",
            "Vibrating",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: ["lakukan vibration test analysis"],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
        ],
      },
    ],
  },
  {
    slug: "intermediet-bearing-1",
    type: "SHAFTING",
    specs: {
      functionalGroup: "Propulsion Functional Group",
      system: "Propeller and Shafting",
      subsystem: "Shafting",
      equipmentID: "SH-BRG-INTS-01",
      equipmentName: "Intermediet Bearing 1",
      drawing: "Shafting Arragment",
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
            "to provide support and stability to the propeller shaft between its forward and aft ends and maintain proper alignment and minimze vibration",
            "Primary",
            ["1,1"],
            ["Fail to provide support and stability to the propeller shaft"],
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
            "Cracked",
            [
              "1.1 Excessive Loading: Excessive loading on the intermediate bearing, such as sudden shocks or overloading, can exceed its capacity, leading to stress concentrations and eventual cracking of the bearing material.",
              "1.2 Material Defects: Inherent material defects such as voids or inclusions create stress concentrations, making the bearing prone to sudden crack formation.",
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Surface cracks", "propagation"],
            },
            [
              "1.1 Fail to provide support and stability to the propeller shaft",
            ],
          ],
          [
            "2",
            "Contaminated",
            [
              "2.1 Lack of Lubrication: Without proper lubrication, friction between moving parts increases, leading to wear and generation of debris that contaminates the bearing.",
              "2.2 Ingress of Foreign Particles: Entry of foreign particles, such as dust or dirt, into the bearing assembly leads to abrasion and wear, causing contamination.",
            ],
            ["Wear-out", "Random"],
            {
              type: "number",
              text: ["Buildup of contaminants", "debris"],
            },
            [
              "1.1 Fail to provide support and stability to the propeller shaft",
            ],
          ],
          [
            "3",
            "Fractured",
            [
              "3.1 Excessive Loading: Prolonged exposure to high loads results in material fatigue and eventual fracture of the bearing.",
              "3. 2 Fatigue: Repeated cyclic loading and unloading of the bearing cause microscopic cracks to develop and propagate, ultimately leading to fracture.",
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Sudden breakage", "complete fracture"],
            },
            [
              "1.1 Fail to provide support and stability to the propeller shaft",
            ],
          ],
          [
            "4",
            "Worn",
            [
              "4.1 Abrasion: Continuous rubbing or sliding of components against each other leads to gradual material removal and surface wear.",
              "4.2 Erosion: Action of abrasive particles or fluids causes gradual erosion of the bearing surface, resulting in material loss.",
            ],
            ["Random", "Random"],
            {
              type: "number",
              text: ["Surface wear", "loss of material"],
            },
            "1.1 Fail to provide support and stability to the propeller shaft",
          ],
          [
            "5",
            "Corroded",
            [
              "5.1 Exposure to Corrosive Elements:  Continuous exposure to corrosive elements, such as saltwater, leads to gradual degradation of the bearing surface due to chemical reactions.",
              "5.2 Lack of Protective Coating: Absence or deterioration of protective coatings exposes the bearing to corrosive environments, accelerating corrosion buildup.",
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Corrosion buildup", "pitting"],
            },
            "1.1 Fail to provide support and stability to the propeller shaft",
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
            "Cracked",
            "Risk of Catastrophic Failure: Cracks in the intermediate bearing can lead to sudden, catastrophic failure of the bearing.",
            "4",
            "2",
            {
              type: "class",
              text: ["Menengah-Tinggi"],
            },
            {
              type: "number",
              text: ["Visual inspection", "ultrasonic testing"],
            },
            {
              type: "dot",
              text: [
                "Regular inspection",
                "stress analysis",
                "structural reinforcement",
              ],
            },
          ],
          [
            "2",
            "Contaminated",
            "Increased Friction, Overheating: Contamination of the intermediate bearing with debris or foreign particles increases friction between the bearing and the shaft.",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Visual inspection", "ultrasonic testing"],
            },
            {
              type: "dot",
              text: [
                "Regular inspection",
                "stress analysis",
                "structural reinforcement",
              ],
            },
          ],
          [
            "3",
            "Fractured",
            "Loss of Structural Integrity: A fractured intermediate bearing results in a loss of structural integrity, making it unable to support the propeller shaft properly.",
            "4",
            "2",
            {
              type: "class",
              text: ["Menengah-Tinggi"],
            },
            {
              type: "number",
              text: ["Visual inspection", "ultrasonic testing"],
            },
            {
              type: "dot",
              text: [
                "Regular inspection",
                "stress analysis",
                "structural reinforcement",
              ],
            },
          ],
          [
            "4",
            "Worn",
            "Increased Friction, Reduced Efficiency: Wear in the intermediate bearing results in increased friction between the bearing and the shaft, reducing efficiency and increasing energy consumption.",
            "3",
            "2",
            {
              type: "class",
              text: ["Menengah-Tinggi"],
            },
            {
              type: "number",
              text: ["Visual inspection", "ultrasonic testing"],
            },
            {
              type: "dot",
              text: [
                "Regular inspection",
                "stress analysis",
                "structural reinforcement",
              ],
            },
          ],
          [
            "5",
            "Corroded",
            "Reduced Structural Integrity: Corrosion buildup and pitting on the intermediate bearing weaken its structural integrity, increasing the risk of failure.",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Visual inspection", "ultrasonic testing"],
            },
            {
              type: "dot",
              text: [
                "Regular inspection",
                "stress analysis",
                "structural reinforcement",
              ],
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
            "Cracked",
            "4",
            "2",
            {
              type: "class",
              text: ["Menengah-Tinggi"],
            },
            {
              type: "dot",
              text: [
                "inspeksi keretakan setiap 1000 jam",
                "lakukan perawatan setiap melakukan docking",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Menengah"],
            },
          ],
          [
            "2",
            "Contaminated",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "lakukan pembersihan terhadap kontaminan",
                "lakukan pergantian pelumas yang baik untuk bisa membersihkan kontaminan",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "3",
            "Fractured",
            "4",
            "2",
            {
              type: "class",
              text: ["Menengah-Tinggi"],
            },
            {
              type: "dot",
              text: [
                "inspeksi keretakan setiap 1000 jam",
                "lakukan perawatan setiap melakukan docking",
                "Segera lakukan pergantian componen sesuai prosedur dari vendor",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Menengah"],
            },
          ],
          [
            "4",
            "Worn",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Inspeksi kekuatan struktur bearing setiap 1000 jam",
                "Lakukan penguatan struktur shaft apabila sudah aus",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "5",
            "Corroded",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "lakukan inspeksi  pada komponen serta cek kondisi komponen terhadap kontaminasi kotoran, kerak atau korosi yang terjadi",
                "lapisi dengan cairan anti korosi",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
        ],
      },
    ],
  },
  {
    slug: "intermediet-bearing-2",
    type: "SHAFTING",
    specs: {
      functionalGroup: "Propulsion Functional Group",
      system: "Propeller and Shafting",
      subsystem: "Shafting",
      equipmentID: "SH-BRG-INTS-02",
      equipmentName: "Intermediet Bearing 2",
      drawing: "Shafting Arragment",
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
            "to provide support and stability to the propeller shaft between its forward and aft ends and maintain proper alignment and minimze vibration",
            "Primary",
            ["1,1"],
            ["Fail to provide support and stability to the propeller shaft"],
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
            "Cracked",
            [
              "1.1 Excessive Loading: Excessive loading on the intermediate bearing, such as sudden shocks or overloading, can exceed its capacity, leading to stress concentrations and eventual cracking of the bearing material.",
              "1.2 Material Defects: Inherent material defects such as voids or inclusions create stress concentrations, making the bearing prone to sudden crack formation.",
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Surface cracks", "propagation"],
            },
            [
              "1.1 Fail to provide support and stability to the propeller shaft",
            ],
          ],
          [
            "2",
            "Contaminated",
            [
              "2.1 Lack of Lubrication: Without proper lubrication, friction between moving parts increases, leading to wear and generation of debris that contaminates the bearing.",
              "2.2 Ingress of Foreign Particles: Entry of foreign particles, such as dust or dirt, into the bearing assembly leads to abrasion and wear, causing contamination.",
            ],
            ["Wear-out", "Random"],
            {
              type: "number",
              text: ["Buildup of contaminants", "debris"],
            },
            [
              "1.1 Fail to provide support and stability to the propeller shaft",
            ],
          ],
          [
            "3",
            "Fractured",
            [
              "3.1 Excessive Loading: Prolonged exposure to high loads results in material fatigue and eventual fracture of the bearing.",
              "3. 2 Fatigue: Repeated cyclic loading and unloading of the bearing cause microscopic cracks to develop and propagate, ultimately leading to fracture.",
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Sudden breakage", "complete fracture"],
            },
            [
              "1.1 Fail to provide support and stability to the propeller shaft",
            ],
          ],
          [
            "4",
            "Worn",
            [
              "4.1 Abrasion: Continuous rubbing or sliding of components against each other leads to gradual material removal and surface wear.",
              "4.2 Erosion: Action of abrasive particles or fluids causes gradual erosion of the bearing surface, resulting in material loss.",
            ],
            ["Random", "Random"],
            {
              type: "number",
              text: ["Surface wear", "loss of material"],
            },
            "1.1 Fail to provide support and stability to the propeller shaft",
          ],
          [
            "5",
            "Corroded",
            [
              "5.1 Exposure to Corrosive Elements:  Continuous exposure to corrosive elements, such as saltwater, leads to gradual degradation of the bearing surface due to chemical reactions.",
              "5.2 Lack of Protective Coating: Absence or deterioration of protective coatings exposes the bearing to corrosive environments, accelerating corrosion buildup.",
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Corrosion buildup", "pitting"],
            },
            "1.1 Fail to provide support and stability to the propeller shaft",
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
            "Cracked",
            "Risk of Catastrophic Failure: Cracks in the intermediate bearing can lead to sudden, catastrophic failure of the bearing.",
            "4",
            "2",
            {
              type: "class",
              text: ["Menengah-Tinggi"],
            },
            {
              type: "number",
              text: ["Visual inspection", "ultrasonic testing"],
            },
            {
              type: "dot",
              text: [
                "Regular inspection",
                "stress analysis",
                "structural reinforcement",
              ],
            },
          ],
          [
            "2",
            "Contaminated",
            "Increased Friction, Overheating: Contamination of the intermediate bearing with debris or foreign particles increases friction between the bearing and the shaft.",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Visual inspection", "ultrasonic testing"],
            },
            {
              type: "dot",
              text: [
                "Regular inspection",
                "stress analysis",
                "structural reinforcement",
              ],
            },
          ],
          [
            "3",
            "Fractured",
            "Loss of Structural Integrity: A fractured intermediate bearing results in a loss of structural integrity, making it unable to support the propeller shaft properly.",
            "4",
            "2",
            {
              type: "class",
              text: ["Menengah-Tinggi"],
            },
            {
              type: "number",
              text: ["Visual inspection", "ultrasonic testing"],
            },
            {
              type: "dot",
              text: [
                "Regular inspection",
                "stress analysis",
                "structural reinforcement",
              ],
            },
          ],
          [
            "4",
            "Worn",
            "Increased Friction, Reduced Efficiency: Wear in the intermediate bearing results in increased friction between the bearing and the shaft, reducing efficiency and increasing energy consumption.",
            "3",
            "2",
            {
              type: "class",
              text: ["Menengah-Tinggi"],
            },
            {
              type: "number",
              text: ["Visual inspection", "ultrasonic testing"],
            },
            {
              type: "dot",
              text: [
                "Regular inspection",
                "stress analysis",
                "structural reinforcement",
              ],
            },
          ],
          [
            "5",
            "Corroded",
            "Reduced Structural Integrity: Corrosion buildup and pitting on the intermediate bearing weaken its structural integrity, increasing the risk of failure.",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Visual inspection", "ultrasonic testing"],
            },
            {
              type: "dot",
              text: [
                "Regular inspection",
                "stress analysis",
                "structural reinforcement",
              ],
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
            "Cracked",
            "4",
            "2",
            {
              type: "class",
              text: ["Menengah-Tinggi"],
            },
            {
              type: "dot",
              text: [
                "inspeksi keretakan setiap 1000 jam",
                "lakukan perawatan setiap melakukan docking",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Menengah"],
            },
          ],
          [
            "2",
            "Contaminated",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "lakukan pembersihan terhadap kontaminan",
                "lakukan pergantian pelumas yang baik untuk bisa membersihkan kontaminan",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "3",
            "Fractured",
            "4",
            "2",
            {
              type: "class",
              text: ["Menengah-Tinggi"],
            },
            {
              type: "dot",
              text: [
                "inspeksi keretakan setiap 1000 jam",
                "lakukan perawatan setiap melakukan docking",
                "Segera lakukan pergantian componen sesuai prosedur dari vendor",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Menengah"],
            },
          ],
          [
            "4",
            "Worn",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Inspeksi kekuatan struktur bearing setiap 1000 jam",
                "Lakukan penguatan struktur shaft apabila sudah aus",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "5",
            "Corroded",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "lakukan inspeksi  pada komponen serta cek kondisi komponen terhadap kontaminasi kotoran, kerak atau korosi yang terjadi",
                "lapisi dengan cairan anti korosi",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
        ],
      },
    ],
  },
  {
    slug: "air-separator-1",
    type: "COMPRESSED_AIR_SYSTEM",
    specs: {
      functionalGroup: "Propulsion Function Group",
      system: "Diesel Engine",
      subsystem: "Compressed Air System",
      equipmentID: "CA-AS-01",
      equipmentName: "Air Separator",
      drawing: "Compressed Air",
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
            "remove moisture, oil, and other contaminants from the compressed air, ensuring that the air supplied to various onboard systems and equipment is clean, dry, and free from impurities.",
            "Primary",
            ["1,1", "1,2"],
            ["stops removing moisture and contaminants, leading to unfiltered air entering the system (Total Failure)", "reduces its effectiveness, allowing more moisture or contaminants to pass through than normal. (Partial Failure)"],
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
            "External leak/rupture",
            [
              "1.1 Condensation: Condensation occurs when warm, moisture-laden air comes into contact with cooler surfaces within the air separator system. This can happen in areas where temperature differentials exist, such as during system shutdowns or when ambient temperatures fluctuate. Condensation can lead to the buildup of moisture within the system over time.",
              "1.2 Air Leakage: Leakage of ambient air into the air separator system, particularly through damaged seals, gaskets, or faulty connections, can introduce moisture into the system. As air containing moisture infiltrates the system, it can contribute to the accumulation of water vapor and condensation, especially in regions with high humidity levels."
            ],
            ["Random", "Random"],
            {
              type: "number",
              text: ["corrosion and degrade the integrity of system components.", "condense on surfaces and contribute to the formation of water droplets"]
            },
            [
              "1.1 stops removing moisture and contaminants, leading to unfiltered air entering the system (Total Failure)", 
              "1.2 reduces its effectiveness, allowing more moisture or contaminants to pass through than normal. (Partial Failure)"
            ]
          ],
          [
            "2",
            "Corroded",
            [
              "2.11. Component Wear: Wear and tear of internal components such as bearings, shafts, and gears can generate metal particles or debris that contaminate the lubricating oil. Abrasive wear between moving parts can also lead to the release of fine particles that mix with the oil, causing contamination.",
              "2.2 Corrosion: Corrosion of metal components within the air separator system can lead to the formation of rust or metal oxides, which can contaminate the oil. Corrosion may occur due to exposure to moisture or corrosive substances, such as acidic gases or chemicals present in the operating environment."
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Reduced Seal Effectiveness", "Internal Leakage"]
            },
            "1.2 reduces its effectiveness, allowing more moisture or contaminants to pass through than normal. (Partial Failure)"
          ],
          [
            "3",
            "Plugged/choked",
            [
              "3.1 Accumulation of particulate matter or contaminants in the separation media: Over time, dust, debris, or other contaminants can accumulate in the air separator's separation media, such as coalescing filters or cyclonic separators.",
              "3.2 Inadequate maintenance leading to clogged filtration media: Insufficient or irregular maintenance practices may result in the buildup of contaminants, obstructing airflow through the separation media."
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: [
                "Restricted airflow through the separation media, reducing the effectiveness of air separation and filtration.", 
                "Increased Friction"
              ]
            },
            "1.2 reduces its effectiveness, allowing more moisture or contaminants to pass through than normal. (Partial Failure)"
          ]
        ]
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
            "External leak/rupture",
            "The accumulation of moisture due to condensation can lead to several adverse consequences over time. These include increased corrosion of metal components within the air separator system, which can compromise their structural integrity and functionality. Additionally, the presence of moisture can create favorable conditions for microbial growth, leading to biofilm formation and potential contamination of the compressed air stream. Ultimately, unchecked condensation can result in reduced system efficiency, increased maintenance requirements, and potential operational failures.",
            "1",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: ["Monitoring of moisture levels", "visual inspection of drain valves"],
            },
            {
              type: "dot",
              text: [
                "Implement a preventive maintenance schedule for regular inspection and cleaning of drain valves and associated components.",
              ],
            },
          ],
          [
            "2",
            "Corroded",
            "Corrosion and Damage: Oil contamination containing abrasive particles or corrosive substances can accelerate corrosion and damage to internal components of the air separator system and other connected equipment. Corrosion can weaken structural integrity, promote fluid leaks, and compromise the safety and reliability of critical systems onboard the ship. Additionally, abrasive contaminants can cause accelerated wear and tear on components, leading to premature failure and the need for costly repairs or replacements.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: ["Visual inspection of compressor components", "Analysis of compressed air quality"],
            },
            {
              type: "dot",
              text: [
                "Replacement of oil removal filters or coalescing elements according to manufacturer's recommendations",
              ],
            },
          ],
          [
            "3",
            "Plugged/choked",
            "Degradation of Air Quality: Mechanical wear and tear may compromise the ability of the air separator to effectively remove contaminants and moisture from the compressed air stream. This can lead to degraded air quality, including increased levels of particulates, moisture content, and contaminants, which may adversely affect downstream processes and equipment.",
            "1",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: ["Monitoring of pressure differentials", "airflow patterns within the air separator."],
            },
            {
              type: "dot",
              text: [
                "Scheduled inspection and cleaning of separation media according to manufacturer recommendations or operational guidelines.",
              ],
            },
          ],
        ]
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
            "External leak/rupture",
            "1",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: ["Implement measures to regulate and maintain consistent temperatures within the air separator system to minimize temperature differentials."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "2",
            "Corroded",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: ["Schedule and perform regular maintenance to check and replace worn components such as bearings, shafts, and gears."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "3",
            "Plugged/choked",
            "1",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: ["Develop and adhere to a regular maintenance schedule to ensure timely cleaning and replacement of filtration media."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
        ]
      }
    ]
  },
  {
    slug: "air-separator-2",
    type: "COMPRESSED_AIR_SYSTEM",
    specs: {
      functionalGroup: "Propulsion Function Group",
      system: "Diesel Engine",
      subsystem: "Compressed Air System",
      equipmentID: "CA-AS-02",
      equipmentName: "Air Separator",
      drawing: "Compressed Air",
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
            "remove moisture, oil, and other contaminants from the compressed air, ensuring that the air supplied to various onboard systems and equipment is clean, dry, and free from impurities.",
            "Primary",
            ["1,1", "1,2"],
            ["stops removing moisture and contaminants, leading to unfiltered air entering the system (Total Failure)", "reduces its effectiveness, allowing more moisture or contaminants to pass through than normal. (Partial Failure)"],
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
            "External leak/rupture",
            [
              "1.1 Condensation: Condensation occurs when warm, moisture-laden air comes into contact with cooler surfaces within the air separator system. This can happen in areas where temperature differentials exist, such as during system shutdowns or when ambient temperatures fluctuate. Condensation can lead to the buildup of moisture within the system over time.",
              "1.2 Air Leakage: Leakage of ambient air into the air separator system, particularly through damaged seals, gaskets, or faulty connections, can introduce moisture into the system. As air containing moisture infiltrates the system, it can contribute to the accumulation of water vapor and condensation, especially in regions with high humidity levels."
            ],
            ["Random", "Random"],
            {
              type: "number",
              text: ["corrosion and degrade the integrity of system components.", "condense on surfaces and contribute to the formation of water droplets"]
            },
            [
              "1.1 stops removing moisture and contaminants, leading to unfiltered air entering the system (Total Failure)", 
              "1.2 reduces its effectiveness, allowing more moisture or contaminants to pass through than normal. (Partial Failure)"
            ]
          ],
          [
            "2",
            "Corroded",
            [
              "2.11. Component Wear: Wear and tear of internal components such as bearings, shafts, and gears can generate metal particles or debris that contaminate the lubricating oil. Abrasive wear between moving parts can also lead to the release of fine particles that mix with the oil, causing contamination.",
              "2.2 Corrosion: Corrosion of metal components within the air separator system can lead to the formation of rust or metal oxides, which can contaminate the oil. Corrosion may occur due to exposure to moisture or corrosive substances, such as acidic gases or chemicals present in the operating environment."
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Reduced Seal Effectiveness", "Internal Leakage"]
            },
            "1.2 reduces its effectiveness, allowing more moisture or contaminants to pass through than normal. (Partial Failure)"
          ],
          [
            "3",
            "Plugged/choked",
            [
              "3.1 Accumulation of particulate matter or contaminants in the separation media: Over time, dust, debris, or other contaminants can accumulate in the air separator's separation media, such as coalescing filters or cyclonic separators.",
              "3.2 Inadequate maintenance leading to clogged filtration media: Insufficient or irregular maintenance practices may result in the buildup of contaminants, obstructing airflow through the separation media."
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: [
                "Restricted airflow through the separation media, reducing the effectiveness of air separation and filtration.", 
                "Increased Friction"
              ]
            },
            "1.2 reduces its effectiveness, allowing more moisture or contaminants to pass through than normal. (Partial Failure)"
          ]
        ]
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
            "External leak/rupture",
            "The accumulation of moisture due to condensation can lead to several adverse consequences over time. These include increased corrosion of metal components within the air separator system, which can compromise their structural integrity and functionality. Additionally, the presence of moisture can create favorable conditions for microbial growth, leading to biofilm formation and potential contamination of the compressed air stream. Ultimately, unchecked condensation can result in reduced system efficiency, increased maintenance requirements, and potential operational failures.",
            "1",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: ["Monitoring of moisture levels", "visual inspection of drain valves"],
            },
            {
              type: "dot",
              text: [
                "Implement a preventive maintenance schedule for regular inspection and cleaning of drain valves and associated components.",
              ],
            },
          ],
          [
            "2",
            "Corroded",
            "Corrosion and Damage: Oil contamination containing abrasive particles or corrosive substances can accelerate corrosion and damage to internal components of the air separator system and other connected equipment. Corrosion can weaken structural integrity, promote fluid leaks, and compromise the safety and reliability of critical systems onboard the ship. Additionally, abrasive contaminants can cause accelerated wear and tear on components, leading to premature failure and the need for costly repairs or replacements.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: ["Visual inspection of compressor components", "Analysis of compressed air quality"],
            },
            {
              type: "dot",
              text: [
                "Replacement of oil removal filters or coalescing elements according to manufacturer's recommendations",
              ],
            },
          ],
          [
            "3",
            "Plugged/choked",
            "Degradation of Air Quality: Mechanical wear and tear may compromise the ability of the air separator to effectively remove contaminants and moisture from the compressed air stream. This can lead to degraded air quality, including increased levels of particulates, moisture content, and contaminants, which may adversely affect downstream processes and equipment.",
            "1",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: ["Monitoring of pressure differentials", "airflow patterns within the air separator."],
            },
            {
              type: "dot",
              text: [
                "Scheduled inspection and cleaning of separation media according to manufacturer recommendations or operational guidelines.",
              ],
            },
          ],
        ]
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
            "External leak/rupture",
            "1",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: ["Implement measures to regulate and maintain consistent temperatures within the air separator system to minimize temperature differentials."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "2",
            "Corroded",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: ["Schedule and perform regular maintenance to check and replace worn components such as bearings, shafts, and gears."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "3",
            "Plugged/choked",
            "1",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: ["Develop and adhere to a regular maintenance schedule to ensure timely cleaning and replacement of filtration media."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
        ]
      }
    ]
  },
  {
    slug: "air-compressor-1",
    type: "COMPRESSED_AIR_SYSTEM",
    specs: {
      functionalGroup: "Propulsion Function Group",
      system: "Diesel Engine",
      subsystem: "Compressed Air System",
      equipmentID: "CA-AC-01",
      equipmentName: "Air Compressor",
      drawing: "Compressed Air",
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
            "Compress atmospheric air to supply pressurized air for engine starting, tools, and systems, with a power output of 7.5 PS, capacity of 30 m³/hr, and operating at 550 RPM.",
            "Primary",
            ["1,1", "1,2"],
            ["Failed to start air compressor, unable to operate (Total Failure)", "Loss of compressed air supply under 7,5 PS, capacity 30 m3/hrs (Partial Failure)"],
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
          "Part",
          "Failure Mode",
          "Causes",
          "Failure Charasteristic",
          "Local Effect",
          "Functional Failure",
        ],
        body: [
          [
            "1a",
            "Air filter",
            "Contaminants carried over into compressed gas",
            [
              "1.1 Accumulation of dust and debris : Contaminants such as dust, dirt, or debris present in the ambient air can enter the compressor system through the intake filters and other openings. These contaminants can accumulate over time within the compressor components, obstructing airflow passages and causing clogging.",
              "1.2 Moisture Accumulation : Moisture in the ambient air can condense within the compressor system due to temperature differentials or high humidity conditions. This moisture can accumulate within the compressor components over time, leading to corrosion, rust formation, and blockage."
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Accumulation of contaminants", "Gradual buildup of moisture"]
            },
            "1.2 Loss of compressed air supply under 7,5 PS, capacity 30 m3/hrs (Partial Failure)"
          ],
          [
            "1b",
            "Air filter",
            "Operates at excessive temperature performance",
            [
              "2.1 Overheating: Excessive heat generated during motor operation can cause thermal expansion of the rotor material, leading to deformation over time. Overheating can occur due to prolonged operation at high loads, inadequate cooling, or electrical faults.",
              "2.2 Mechanical Stress: High mechanical loads or sudden impacts can cause the rotor to deform. This can happen if the compressed experiences sudden changes in flow rate, pressure, or if it encounters debris or obstructions in the compressed air water."
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Increased Friction and Heat", "Vibration and Noise"]
            },
            "1.2 Loss of compressed air supply under 7,5 PS, capacity 30 m3/hrs (Partial Failure)"
          ],
          [
            "1c",
            "Fails to start on demand",
            [
              "3.1 Moisture and Humidity: Continuous exposure to moisture and high humidity levels in the compressed air area can create a corrosive environment that promotes the degradation of metal surfaces, including the rotor.",
              "3.2 Lack of Maintenance: Insufficient maintenance or neglecting to clean and dry the compressed air area regularly can allow corrosive substances to accumulate and cause corrosion of the rotor over time."
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Electrical Issues", "Vibration and Noise"]
            },
            "1.2 Loss of compressed air supply under 7,5 PS, capacity 30 m3/hrs (Partial Failure)"
          ],
          [
            "2a",
            "Intercooler",
            "Fails to start on demand",
            [
              "4.1 Electrical Wiring Fault: This cause involves issues with the wiring connected to the Intercooler , such as short circuits, loose connections, or damaged insulation. mechanical shock.",
              "4.2 Component Damage: Damage to electrical components within the Intercooler, such as solenoids or sensors, due to wear and tear or external factors."
            ],
            ["Random", "Random"],
            {
              type: "number",
              text: ["Interruption or erratic behavior of electrical signals", "Degradation of electrical components"]
            },
            "1.2 Loss of compressed air supply under 7,5 PS, capacity 30 m3/hrs (Partial Failure)"
          ],
          [
            "2b",
            "Intercooler",
            "Operates at excessive temperature performance",
            [
              "5.1  insulation Damage: Damage to the insulation of the stator windings can create unintended electrical paths between the windings, resulting in a short circuit. Insulation damage may occur due to mechanical stress, overheating, moisture ingress, or aging of the insulation materials.",
              "5.2  Overvoltage: Exposure to overvoltage conditions, such as voltage spikes or electrical surges, can exceed the breakdown voltage of the stator insulation, leading to insulation breakdown and short circuits."
            ],
            ["Random", "Random"],
            {
              type: "number",
              text: ["Voltage Drop", "Electrical Damage"]
            },
            "1.1 Failed to start air compressor, unable to operate (Total Failure)"
          ],
          [
            "2c",
            "Intercooler",
            "Fails to start on demand",
            [
              "6.1  Wire Breakage: Breakage or damage to the stator windings or connecting wires can result in an open circuit. This can occur due to mechanical stress, vibration, or physical damage to the motor.",
              "6.2  Loose Connections: Loose or corroded connections between the stator windings and other electrical components can create resistance and eventually lead to an open circuit. This can occur due to poor installation practices or improper maintenance."
            ],
            ["Random", "Random"],
            {
              type: "number",
              text: ["Inoperable Motor", "Loss of Power"]
            },
            ["1.1	Failed to start air compressor, unable to operate (Total Failure)", "1.2 Loss of compressed air supply under 7,5 PS, capacity 30 m3/hrs (Partial Failure)"]
          ],
          [
            "3a",
            "Flywheel",
            "Contaminants carried over into compressed gas",
            [
              "7.1 Insufficient lubrication or lubricant contamination :   Pressure Regulator fails to provide adequate lubrication to the Flywheel and Screw components of the air compressor. It could result from issues such as low oil levels, degraded lubricant quality, or malfunctioning lubrication pumps.",
              "7.2  Foreign particle ingress or abrasive contaminants in the compression chamber : This cause involves the entry of foreign particles, such as dust, dirt, or debris, into the Flywheel and Screw area. These particles can come from various sources, including the environment, improper maintenance practices, or degradation of internal components like seals or gaskets."
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: [
                "Increased friction between Screw and Flywheel wall due to lack of lubrication", 
                "Abrasion of Flywheel wall and Screw surfaces by foreign particles present in the lubricating oil"
              ]
            },
            "1.2 Loss of compressed air supply under 7,5 PS, capacity 30 m3/hrs (Partial Failure)"
          ],
          [
            "3b",
            "Flywheel",
            "Operates at degraded head/flow performance",
            [
              "8.1 Normal Wear and Tear: Over time, the constant rotation of the motor shaft places mechanical stress on the  flywheel, leading to gradual wear. This wear is a natural consequence of the motor's operation and can occur even under normal operating conditions.",
              "8.2 Lubrication Issues: Inadequate lubrication or contamination of the lubricant can accelerate bearing wear. Insufficient lubrication reduces the effectiveness of the lubricant in reducing friction and preventing metal-to-metal contact between bearing components."
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Increased Friction", "Abnormal Noise and Vibration"]
            },
            "1.2 Loss of compressed air supply under 7,5 PS, capacity 30 m3/hrs (Partial Failure)"
          ],
          [
            "3c",
            "Flywheel",
            "Operates at excessive temperature performance",
            [
              "9.1 Excessive wear or misalignment of Screw and Flywheel  components : Wear can result from prolonged use, particularly under high operating pressures and speeds, causing the surfaces of the Screw and Flywheel to gradually degrade. Misalignment may occur due to improper assembly, maintenance issues, or mechanical stresses during operation. ",
              "9.2 Imbalance: An imbalance in the rotating components of the motor, such as the rotor or impeller, can cause uneven forces on the flywheel, resulting in vibration."
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Abnormal Noise and Vibration", "Reduced Efficiency"]
            },
            "1.2 Loss of compressed air supply under 7,5 PS, capacity 30 m3/hrs (Partial Failure)"
          ],
          [
            "4a",
            "Screw",
            "Operates at degraded head/flow performance",
            [
              "10.1  Overheating due to inadequate cooling or lubrication : Inadequate cooling may result from issues such as insufficient airflow through the cooling system, malfunctioning cooling fans, or blockages in the cooling channels. Without proper cooling, the compressor's internal components, including the Flywheel and Screw, can heat up excessively during operation",
              "10.2  Excessive wear or misalignment of Screw and Flywheel components : Wear can result from prolonged use, particularly under high operating pressures and speeds, causing the surfaces of the Screw  and Flywheel to gradually degrade. Misalignment may occur due to improper assembly, maintenance issues, or mechanical stresses during operation. "
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: [
                "Binding of Screw within the Flywheel, halting compressor operation", 
                "Increased friction between Screw and Flywheel, leading to potential seizure"
              ]
            },
            "1.2 Loss of compressed air supply under 7,5 PS, capacity 30 m3/hrs (Partial Failure)"
          ],
          [
            "4b",
            "Screw",
            "Operates at excessive temperature performance",
            [
              "11.1 Normal Wear and Tear: Over time, the constant rotation of the motor shaft places mechanical stress on the  flywheel, leading to gradual wear. This wear is a natural consequence of the motor's operation and can occur even under normal operating conditions.",
              "11.2  Lubrication Issues: Inadequate lubrication or contamination of the lubricant can accelerate bearing wear. Insufficient lubrication reduces the effectiveness of the lubricant in reducing friction and preventing metal-to-metal contact between bearing components."
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Reduced Efficiency", "Abnormal Noise and Vibration"]
            },
            "1.2 Loss of compressed air supply under 7,5 PS, capacity 30 m3/hrs (Partial Failure)"
          ],
          [
            "4c",
            "Screw",
            "Fails to start on demand",
            [
              "12.1  Imbalance: An imbalance in the rotating components of the motor, such as the rotor or impeller, can cause uneven forces on the  flywheel, resulting in vibration.",
              "12.2  Loose Components: Loose components within the motor assembly, such as fasteners or mounting bolts, can cause vibration as the motor operates."
            ],
            ["Wear-out", "Random"],
            {
              type: "number",
              text: ["Reduced Efficiency", "decreased compressed"]
            },
            "1.2 Loss of compressed air supply under 7,5 PS, capacity 30 m3/hrs (Partial Failure)"
          ],
          [
            "5a",
            "Rings",
            "Operates at degraded head/flow performance",
            [
              "13.1 Insufficient lubrication or poor lubricant quality : Without adequate lubrication, the surfaces of the Screw  and Flywheel may experience increased friction during operation. This heightened friction can result in accelerated wear and tear on the components, leading to surface damage, scoring, or galling",
              "13.2 Contamination with abrasive particles or corrosive substances : When abrasive particles, such as dirt, dust, or metal fragments, enter the system, they can embed themselves between the Screw and Flywheel surfaces during operation."
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Increased friction", "Abrasion and scoring"]
            },
            "1.2 Loss of compressed air supply under 7,5 PS, capacity 30 m3/hrs (Partial Failure)"
          ],
          [
            "5b",
            "Rings",
            "Operates at excessive head/flow performance",
            [
              "14.1 Lubrication Issues: Inadequate lubrication or contamination of the lubricant can accelerate bearing wear. Insufficient lubrication reduces the effectiveness of the lubricant in reducing friction and preventing metal-to-metal contact between bearing components.",
              "14.2 Overloading: Excessive load on the motor can accelerate bearing wear. Overloading occurs when the air compressor encounters unusually high water levels or blockages, causing the motor to work harder than intended."
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Abnormal Noise and Vibration", "Mechanical stress"]
            },
            "1.2 Loss of compressed air supply under 7,5 PS, capacity 30 m3/hrs (Partial Failure)"
          ],
          [
            "5c",
            "Rings",
            "Fails to start on demand",
            [
              "15.1 Loose electrical connections due to vibrations or poor installation : These loose connections can occur at terminal points, junctions, or wire connectors within the electrical circuitry of the compressor.",
              "15.2 Short circuits : caused by water ingress or insulation breakdown and Component failure due to aging or manufacturing defects."
            ],
            ["Random", "Random"],
            {
              type: "number",
              text: ["Fluctuations or loss of power supply", "system experiences irregularities"]
            },
            "1.1 Failed to start air compressor, unable to operate (Total Failure)"
          ],
          [
            "6a",
            "Control Panel",
            "Operates at excessive temperature performance",
            [
              "16.1 C Wear or damage to rod  flywheel : When rod  flywheel wear or become damaged, they can lead to increased friction and heat generation between the Rings and Flywheel journal.",
              "16.2  Excessive mechanical stress or load on the Rings : When the Rings experiences excessive stress, it can lead to deformation, bending, or even fracture."
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Misalignment between Screw and Flywheel", "Increased Friction"]
            },
            "1.2 Loss of compressed air supply under 7,5 PS, capacity 30 m3/hrs (Partial Failure)"
          ],
          [
            "6b",
            "Control Panel",
            "Operates at excessive head/flow performance",
            [
              "17.1 Lubrication Issues: Inadequate lubrication or contamination of the lubricant can accelerate bearing wear. Insufficient lubrication reduces the effectiveness of the lubricant in reducing friction and preventing metal-to-metal contact between bearing components.",
              "17.2 Overloading: Excessive load on the motor can accelerate bearing wear. Overloading occurs when the air compressor encounters unusually high water levels or blockages, causing the motor to work harder than intended."
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Abnormal Noise and Vibration", "Mechanical stress"]
            },
            "1.2 Loss of compressed air supply under 7,5 PS, capacity 30 m3/hrs (Partial Failure)"
          ],
          [
            "6c",
            "Control Panel",
            "Fails to start on demand",
            [
              "18.1 Loose electrical connections due to vibrations or poor installation : These loose connections can occur at terminal points, junctions, or wire connectors within the electrical circuitry of the compressor.",
              "18.2 Short circuits : caused by water ingress or insulation breakdown and Component failure due to aging or manufacturing defects."
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Fluctuations or loss of power supply", "voltage fluctuations"]
            },
            "1.1 Failed to start air compressor, unable to operate (Total Failure)"
          ],
          [
            "7a",
            "Pressure Regulator",
            "Operates at degraded head/flow performance",
            [
              "19.1 Fatigue failure due to cyclic loading : This type of failure often stems from the reciprocating motion of the Screw, which exerts alternating tensile and compressive forces on the Rings during each stroke of the compressor.",
              "19.2 Overheating due to friction or excessive mechanical stress :  when the Pressure Regulator fails to adequately reduce friction between the Rings and other moving parts, such as the Screw or Flywheel."
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Formation of cracks", "Increased Friction"]
            },
            "1.2 Loss of compressed air supply under 7,5 PS, capacity 30 m3/hrs (Partial Failure)"
          ],
          [
            "7b",
            "Pressure Regulator",
            "Operates at excessive temperature performance",
            [
              "20.1 Lubrication Issues: Inadequate lubrication or contamination of the lubricant can accelerate bearing wear. Insufficient lubrication reduces the effectiveness of the lubricant in reducing friction and preventing metal-to-metal contact between bearing components.",
              "20.2 Overloading: Excessive load on the motor can accelerate bearing wear. Overloading occurs when the air compressor encounters unusually high water levels or blockages, causing the motor to work harder than intended."
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Abnormal Noise and Vibration", "Mechanical stress"]
            },
            "1.2 Loss of compressed air supply under 7,5 PS, capacity 30 m3/hrs (Partial Failure)"
          ],
          [
            "7c",
            "Pressure Regulator",
            "Fails to start on demand",
            [
              "21.1 Loose electrical connections due to vibrations or poor installation : These loose connections can occur at terminal points, junctions, or wire connectors within the electrical circuitry of the compressor.",
              "21.2 Short circuits : caused by water ingress or insulation breakdown and Component failure due to aging or manufacturing defects."
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Fluctuations", "loss of power supply to the control panel"]
            },
            "1.2 Loss of compressed air supply under 7,5 PS, capacity 30 m3/hrs (Partial Failure)"
          ],
        ]
      },
      {
        title: "FMECA (lanjutan)",
        backgroundColor: "#ffefe5",
        borderColor: "#EB5B00",
        headRow: 1,
        head: [
          "No",
          "Part",
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
            "1a",
            "Air filter",
            "Contaminants carried over into compressed gas",
            "Reduced airflow decreases the compressor's capacity to generate compressed air, resulting in decreased system performance, increased energy consumption, and potential overheating or mechanical damage to the compressor.",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Check for low airflow indicators or alarms.", "Measure the compressor's output pressure"],
            },
            {
              type: "dot",
              text: [
                "Regular cleaning or replacement of air filter according to manufacturer guidelines to prevent blockage and ensure proper airflow.",
              ],
            },
          ],
          [
            "1b",
            "Air filter",
            "Operates at excessive temperature performance",
            "Reduced compressed efficiency: A deformed rotor disrupts fluid flow, decreasing the air compressor's effectiveness in removing water from the ship's compartments.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Monitor for reduced air pressure and efficiency",
                "Perform visual and mechanical inspections of the rotor for signs of deformation."
              ],
            },
            {
              type: "dot",
              text: [
                "Regularly inspect compressed rotor for warping or bending.",
              ],
            },
          ],
          [
            "1c",
            "Air filter",
            "Fails to start on demand",
            "Diminished compressed efficiency: Corrosion on the rotor surface impedes fluid flow, reducing the compressed air compressed's ability to effectively remove water from ship compartments.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: ["Monitoring of pressure differentials", "airflow patterns within the air separator."],
            },
            {
              type: "dot",
              text: [
                "inspect the rotor surface for signs of corrosion or pitting.",
                "Monitor compressor efficiency and performance metrics.",
              ],
            },
          ],
          [
            "2a",
            "Intercooler",
            "Fails to start on demand",
            "Potential damage to electrical components: Continued operation with a ground fault can lead to further damage or complete failure of electrical components.",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Check for electrical faults or alarms indicating ground faults.",
                "Inspect electrical components for signs of damage or overheating."
              ],
            },
            {
              type: "dot",
              text: [
                "Regular inspection and testing of electrical wiring and connections",
              ],
            },
          ],
          [
            "2b",
            "Intercooler",
            "Operates at excessive temperature performance",
            "Complete compressed failure: A short circuit can render the air compressor inoperable, preventing it from removing water from the compressed air. This can lead to flooding, compromising stability and increasing the risk of capsizing.",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Observe for complete inoperability or failure to start.",
                "Check for short circuit alarms or error codes."
              ],
            },
            {
              type: "dot",
              text: [
                "Isolate the circuit to stop electricity flow and prevent further damage.",
              ],
            },
          ],
          [
            "2c",
            "Intercooler ",
            "Fails to start on demand",
            "Loss of compressed Functionality: An open circuit in the stator of a air compressor can cause the compressed to fail, resulting in the inability to remove water from the compressed air.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: ["Monitoring of pressure differentials", "airflow patterns within the air separator."],
            },
            {
              type: "dot",
              text: [
                "Detect the inability to operate or reduced performance.",
                "Measure electrical continuity and inspect for open circuits.",
              ],
            },
          ],
          [
            "3a",
            "Flywheel",
            "Contaminants carried over into compressed gas",
            "Accelerated wear on screw and Flywheel surfaces, potential scoring or galling : o the phenomenon where these critical components experience faster-than-normal degradation, leading to surface irregularities and potential damage. This accelerated wear can occur due to various factors such as abrasive contaminants present in the compressed air, insufficient lubrication, high operating temperatures, and pressures beyond the design limits",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Abnormal noise or vibration during compressor operation.",
                "Inspection of compressed air for contaminants and particle filters."
              ],
            },
            {
              type: "dot",
              text: [
                "Implement a regular maintenance program to inspect, clean, lubricate, and test the pressure relief valve.",
              ],
            },
          ],
          [
            "3b",
            "Flywheel",
            "Operates at degraded head/flow performance",
            "Reduced compressed reliability: Worn  flywheel lead to increased friction and vibration in the air compressor assembly, resulting in decreased compressed efficiency, erratic operation, and potential compressed failure, endangering operational safety.",
            "2",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Abnormal noise", "corrosion visible damage"],
            },
            {
              type: "dot",
              text: ["Implement a scheduled maintenance program",],
            },
          ],
          [
            "3c",
            "Flywheel",
            "Operates at excessive temperature performance",
            "Risk of Electrical Hazards: Vibrating motor casing can lead to loosening of electrical connections or damage to wiring, increasing the risk of electrical malfunctions or short circuits, posing safety hazards to crew members and equipment onboard the ship.",
            "2",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Abnormal noise and vibration"],
            },
            {
              type: "dot",
              text: ["Conduct routine maintenance, cleaning, and lubrication of the drain valve"],
            },
          ],
          [
            "4a",
            "Screw",
            "Operates at degraded head/flow performance",
            "Potential damage to screw rings, Flywheel wall, and other components : When these components are subjected to stress beyond their design limits, they may experience wear, scoring, or even deformation.",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Monitoring of compressor temperature and lubrication systems.",
                "Visual inspection of screw-Flywheel interface for signs of wear."
              ],
            },
            {
              type: "dot",
              text: ["Conduct routine maintenance, cleaning, and lubrication of the drain valve",],
            },
          ],
          [
            "4b",
            "Screw",
            "Operates at excessive temperature performance",
            "System Inefficiency: Persistent leakage compromises the efficiency of the system, resulting in increased energy consumption, decreased productivity, and potential damage to downstream components.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: ["Abnormal noise", "Reduce compressed efficiency"],
            },
            {
              type: "dot",
              text: [
                "Replace worn or damaged seals with new ones made of compatible materials to restore proper sealing and prevent leakage.",
              ],
            },
          ],
          [
            "4c",
            "Screw",
            "Fails to start on demand",
            "Water Supply Disruption: Complete blockage of the valve passage can disrupt water supply to critical areas, causing inconvenience, operational disruptions, and potential safety hazards.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: ["Measure system performance and detect reduced efficiency."],
            },
            {
              type: "dot",
              text: [
                "Implement a routine maintenance schedule to flush or clean the valve to remove accumulated debris, sediment, or scale deposits."
              ],
            },
          ],
          [
            "5a",
            "Rings",
            "Operates at degraded head/flow performance",
            "Potential damage to screw rings, Flywheel wall, and other components : When these components are subjected to stress beyond their design limits, they may experience wear, scoring, or even deformation.",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Detect interruptions in water supply and operational disruptions."],
            },
            {
              type: "dot",
              text: ["Conduct routine maintenance, cleaning, and lubrication of the drain valve",],
            },
          ],
          [
            "5b",
            "Rings",
            "Operates at excessive head/flow performance",
            "System Inefficiency: Persistent leakage compromises the efficiency of the system, resulting in increased energy consumption, decreased productivity, and potential damage to downstream components.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: ["Inspect for wear, damage, or deformation in Ringss and  flywheel."],
            },
            {
              type: "dot",
              text: [
                "Seal Replacement: Replace worn or damaged seals with new ones made of compatible materials to restore proper sealing and prevent leakage. Valve Inspection and",
              ],
            },
          ],
          [
            "5c",
            "Rings",
            "Fails to start on demand",
            "Water Supply Disruption: Complete blockage of the valve passage can disrupt water supply to critical areas, causing inconvenience, operational disruptions, and potential safety hazards.",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Observe for loose electrical connections and potential wiring damage."],
            },
            {
              type: "dot",
              text: [
                "Regular Cleaning: Implement a routine maintenance schedule to flush or clean the valve to remove accumulated debris, sediment, or scale deposits."
              ],
            },
          ],
          [
            "6a",
            "Control Panel",
            "Operates at excessive temperature performance",
            "Potential damage to Rings and Pressure Regulator bearing : Excessive mechanical stress or load on the Rings, often caused by misalignment, improper lubrication, or overloading of the compressor, can lead to accelerated wear and fatigue failure of the  flywheel.",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Monitor for unusual vibrations or noises from the flywheel."],
            },
            {
              type: "dot",
              text: ["Conduct routine maintenance, cleaning, and lubrication of the drain valve to remove debris, sediment, or corrosion and ensure smooth operation and longevity.",],
            },
          ],
          [
            "6b",
            "Control Panel",
            "Operates at excessive head/flow performance",
            "Risk of Electrical Hazards: Vibrating motor casing can lead to loosening of electrical connections or damage to wiring, increasing the risk of electrical malfunctions or short circuits, posing safety hazards to crew members and equipment onboard the ship.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: ["Monitor for increased friction, noise, or vibrations in the Rings area."],
            },
            {
              type: "dot",
              text: [
                "Scheduled inspection and non-destructive testing to detect early signs of crack formation, followed by repair or replacement as necessary.",
              ],
            },
          ],
          [
            "6c",
            "Control Panel",
            "Fails to start on demand",
            "Risk of Electrical Hazards: Vibrating motor casing can lead to loosening of electrical connections or damage to wiring, increasing the risk of electrical malfunctions or short circuits, posing safety hazards to crew members and equipment onboard the ship.",
            "2",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Inspect for loose or damaged electrical connections and wiring."],
            },
            {
              type: "dot",
              text: [
                "Implement a routine maintenance schedule to flush or clean the valve to remove accumulated debris, sediment, or scale deposits."
              ],
            },
          ],
          [
            "7a",
            "Pressure Regulator",
            "Operates at degraded head/flow performance",
            "Potential catastrophic failure of flywheel during operation.",
            "2",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Observe for unusual vibrations or noises coming from the flywheel."],
            },
            {
              type: "dot",
              text: ["shut down the compressed and replace them with high-quality marine flywheel.",],
            },
          ],
          [
            "7b",
            "Pressure Regulator",
            "Operates at excessive temperature performance",
            "Reduced compressed reliability: Worn  flywheel lead to increased friction and vibration in the air compressor assembly, resulting in decreased compressed efficiency, erratic operation, and potential compressed failure, endangering operational safety.",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Inspect electrical connections and wiring for looseness or damage."],
            },
            {
              type: "dot",
              text: [
                "Replace worn or damaged seals with new ones made of compatible materials to restore proper sealing and prevent leakage.",
              ],
            },
          ],
          [
            "7c",
            "Pressure Regulator",
            "Fails to start on demand",
            "Risk of Electrical Hazards: Vibrating motor casing can lead to loosening of electrical connections or damage to wiring, increasing the risk of electrical malfunctions or short circuits, posing safety hazards to crew members and equipment onboard the ship.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: ["Inspect flywheel for signs of wear, damage, or deformation."],
            },
            {
              type: "dot",
              text: [
                "Shut down the compressed and inspect for misalignment, imbalance, or worn components."
              ],
            },
          ],
        ]
      },
      {
        title: "Maintenance Task Selection",
        backgroundColor: "#f5eafa",
        borderColor: "#912BBC",
        headRow: 2,
        head: [
          "No",
          "Part",
          "Failure Mode",
          ["Risk Characterization", ["CoF", "Rec PoF", "Current Risk"]],
          ["Task Selection", ["Proposed Action (s)", "Proj PoF", "Proj Risk"]],
        ],
        body: [
          [
            "1a",
            "Air filter",
            "Contaminants carried over into compressed gas",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: ["Replace intake filters periodically to prevent dust and debris from entering the system."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "1b",
            "Air filter",
            "Operates at excessive temperature performance",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: ["Install moisture separators to reduce the amount of moisture entering the system."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "1c",
            "Air filter",
            "Fails to start on demand",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: ["Enhance the cooling system by adding ventilation or repairing cooling fans."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "2a",
            "Intercooler",
            "Fails to start on demand",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: ["Monitor and adjust flow rates to avoid sudden changes that can cause mechanical stress."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "2b",
            "Intercooler",
            "Operates at excessive temperature performance",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: ["Implement humidity control systems to maintain safe moisture levels."],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "2c",
            "Intercooler",
            "Fails to start on demand",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: ["Set up a regular maintenance schedule to ensure components are clean and functioning properly."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "3a",
            "Flywheel",
            "Contaminants carried over into compressed gas",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: ["Check and repair all electrical connections to prevent short circuits or other issues."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "3b",
            "Flywheel",
            "Operates at degraded head/flow performance",
            "2",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: ["Replace damaged components such as solenoids or sensors."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "3c",
            "Flywheel",
            "Operates at excessive temperature performance",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: ["Regularly check insulation and repair or replace as needed."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "4a",
            "Screw",
            "Operates at degraded head/flow performance",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: ["Check for broken or damaged wires and replace them as necessary."],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "4b",
            "Screw",
            "Operates at excessive temperature performance",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: ["Ensure all connections are tight and secure, and check for corrosion."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "4c",
            "Screw",
            "Fails to start on demand",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: ["Verify that the lubrication system is functioning correctly and that the right lubricant is used."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "5a",
            "Rings",
            "Operates at degraded head/flow performance",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: ["Use appropriate air filters to prevent foreign particles from entering the system."],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "5b",
            "Rings",
            "Operates at excessive head/flow performance",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: ["Regularly monitor the wear levels and replace components as needed."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "5c",
            "Rings",
            "Fails to start on demand",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: ["Ensure rotating components are balanced to reduce vibrations."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "6a",
            "Control Panel",
            "Operates at degraded temperature performance",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: ["Enhance the efficiency of the cooling system to ensure adequate cooling."],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "6b",
            "Control Panel",
            "Operates at excessive head/flow performance",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: ["Confirm that lubrication is performed properly and on schedule."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "6c",
            "Control Panel",
            "Fails to start on demand",
            "2",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: ["Check and tighten all electrical connections."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "7a",
            "Pressure Regulator",
            "Operates at degraded head/flow performance",
            "2",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: ["Track and manage cyclic loads to reduce the risk of fatigue failure."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "7b",
            "Pressure Regulator",
            "Operates at excessive temperature performance",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: ["Ensure the lubrication system is effective to reduce friction."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "7c",
            "Pressure Regulator",
            "Fails to start on demand",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: ["Regularly inspect and secure all electrical connections."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
        ]
      }
    ]
  },
  {
    slug: "air-compressor-2",
    type: "COMPRESSED_AIR_SYSTEM",
    specs: {
      functionalGroup: "Propulsion Function Group",
      system: "Diesel Engine",
      subsystem: "Compressed Air System",
      equipmentID: "CA-AC-02",
      equipmentName: "Air Compressor",
      drawing: "Compressed Air",
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
            "Compress atmospheric air to supply pressurized air for engine starting, tools, and systems, with a power output of 7.5 PS, capacity of 30 m³/hr, and operating at 550 RPM.",
            "Primary",
            ["1,1", "1,2"],
            ["Failed to start air compressor, unable to operate (Total Failure)", "Loss of compressed air supply under 7,5 PS, capacity 30 m3/hrs (Partial Failure)"],
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
          "Part",
          "Failure Mode",
          "Causes",
          "Failure Charasteristic",
          "Local Effect",
          "Functional Failure",
        ],
        body: [
          [
            "1a",
            "Air filter",
            "Contaminants carried over into compressed gas",
            [
              "1.1 Accumulation of dust and debris : Contaminants such as dust, dirt, or debris present in the ambient air can enter the compressor system through the intake filters and other openings. These contaminants can accumulate over time within the compressor components, obstructing airflow passages and causing clogging.",
              "1.2 Moisture Accumulation : Moisture in the ambient air can condense within the compressor system due to temperature differentials or high humidity conditions. This moisture can accumulate within the compressor components over time, leading to corrosion, rust formation, and blockage."
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Accumulation of contaminants", "Gradual buildup of moisture"]
            },
            "1.2 Loss of compressed air supply under 7,5 PS, capacity 30 m3/hrs (Partial Failure)"
          ],
          [
            "1b",
            "Air filter",
            "Operates at excessive temperature performance",
            [
              "2.1 Overheating: Excessive heat generated during motor operation can cause thermal expansion of the rotor material, leading to deformation over time. Overheating can occur due to prolonged operation at high loads, inadequate cooling, or electrical faults.",
              "2.2 Mechanical Stress: High mechanical loads or sudden impacts can cause the rotor to deform. This can happen if the compressed experiences sudden changes in flow rate, pressure, or if it encounters debris or obstructions in the compressed air water."
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Increased Friction and Heat", "Vibration and Noise"]
            },
            "1.2 Loss of compressed air supply under 7,5 PS, capacity 30 m3/hrs (Partial Failure)"
          ],
          [
            "1c",
            "Fails to start on demand",
            [
              "3.1 Moisture and Humidity: Continuous exposure to moisture and high humidity levels in the compressed air area can create a corrosive environment that promotes the degradation of metal surfaces, including the rotor.",
              "3.2 Lack of Maintenance: Insufficient maintenance or neglecting to clean and dry the compressed air area regularly can allow corrosive substances to accumulate and cause corrosion of the rotor over time."
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Electrical Issues", "Vibration and Noise"]
            },
            "1.2 Loss of compressed air supply under 7,5 PS, capacity 30 m3/hrs (Partial Failure)"
          ],
          [
            "2a",
            "Intercooler",
            "Fails to start on demand",
            [
              "4.1 Electrical Wiring Fault: This cause involves issues with the wiring connected to the Intercooler , such as short circuits, loose connections, or damaged insulation. mechanical shock.",
              "4.2 Component Damage: Damage to electrical components within the Intercooler, such as solenoids or sensors, due to wear and tear or external factors."
            ],
            ["Random", "Random"],
            {
              type: "number",
              text: ["Interruption or erratic behavior of electrical signals", "Degradation of electrical components"]
            },
            "1.2 Loss of compressed air supply under 7,5 PS, capacity 30 m3/hrs (Partial Failure)"
          ],
          [
            "2b",
            "Intercooler",
            "Operates at excessive temperature performance",
            [
              "5.1  insulation Damage: Damage to the insulation of the stator windings can create unintended electrical paths between the windings, resulting in a short circuit. Insulation damage may occur due to mechanical stress, overheating, moisture ingress, or aging of the insulation materials.",
              "5.2  Overvoltage: Exposure to overvoltage conditions, such as voltage spikes or electrical surges, can exceed the breakdown voltage of the stator insulation, leading to insulation breakdown and short circuits."
            ],
            ["Random", "Random"],
            {
              type: "number",
              text: ["Voltage Drop", "Electrical Damage"]
            },
            "1.1 Failed to start air compressor, unable to operate (Total Failure)"
          ],
          [
            "2c",
            "Intercooler",
            "Fails to start on demand",
            [
              "6.1  Wire Breakage: Breakage or damage to the stator windings or connecting wires can result in an open circuit. This can occur due to mechanical stress, vibration, or physical damage to the motor.",
              "6.2  Loose Connections: Loose or corroded connections between the stator windings and other electrical components can create resistance and eventually lead to an open circuit. This can occur due to poor installation practices or improper maintenance."
            ],
            ["Random", "Random"],
            {
              type: "number",
              text: ["Inoperable Motor", "Loss of Power"]
            },
            ["1.1	Failed to start air compressor, unable to operate (Total Failure)", "1.2 Loss of compressed air supply under 7,5 PS, capacity 30 m3/hrs (Partial Failure)"]
          ],
          [
            "3a",
            "Flywheel",
            "Contaminants carried over into compressed gas",
            [
              "7.1 Insufficient lubrication or lubricant contamination :   Pressure Regulator fails to provide adequate lubrication to the Flywheel and Screw components of the air compressor. It could result from issues such as low oil levels, degraded lubricant quality, or malfunctioning lubrication pumps.",
              "7.2  Foreign particle ingress or abrasive contaminants in the compression chamber : This cause involves the entry of foreign particles, such as dust, dirt, or debris, into the Flywheel and Screw area. These particles can come from various sources, including the environment, improper maintenance practices, or degradation of internal components like seals or gaskets."
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: [
                "Increased friction between Screw and Flywheel wall due to lack of lubrication", 
                "Abrasion of Flywheel wall and Screw surfaces by foreign particles present in the lubricating oil"
              ]
            },
            "1.2 Loss of compressed air supply under 7,5 PS, capacity 30 m3/hrs (Partial Failure)"
          ],
          [
            "3b",
            "Flywheel",
            "Operates at degraded head/flow performance",
            [
              "8.1 Normal Wear and Tear: Over time, the constant rotation of the motor shaft places mechanical stress on the  flywheel, leading to gradual wear. This wear is a natural consequence of the motor's operation and can occur even under normal operating conditions.",
              "8.2 Lubrication Issues: Inadequate lubrication or contamination of the lubricant can accelerate bearing wear. Insufficient lubrication reduces the effectiveness of the lubricant in reducing friction and preventing metal-to-metal contact between bearing components."
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Increased Friction", "Abnormal Noise and Vibration"]
            },
            "1.2 Loss of compressed air supply under 7,5 PS, capacity 30 m3/hrs (Partial Failure)"
          ],
          [
            "3c",
            "Flywheel",
            "Operates at excessive temperature performance",
            [
              "9.1 Excessive wear or misalignment of Screw and Flywheel  components : Wear can result from prolonged use, particularly under high operating pressures and speeds, causing the surfaces of the Screw and Flywheel to gradually degrade. Misalignment may occur due to improper assembly, maintenance issues, or mechanical stresses during operation. ",
              "9.2 Imbalance: An imbalance in the rotating components of the motor, such as the rotor or impeller, can cause uneven forces on the flywheel, resulting in vibration."
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Abnormal Noise and Vibration", "Reduced Efficiency"]
            },
            "1.2 Loss of compressed air supply under 7,5 PS, capacity 30 m3/hrs (Partial Failure)"
          ],
          [
            "4a",
            "Screw",
            "Operates at degraded head/flow performance",
            [
              "10.1  Overheating due to inadequate cooling or lubrication : Inadequate cooling may result from issues such as insufficient airflow through the cooling system, malfunctioning cooling fans, or blockages in the cooling channels. Without proper cooling, the compressor's internal components, including the Flywheel and Screw, can heat up excessively during operation",
              "10.2  Excessive wear or misalignment of Screw and Flywheel components : Wear can result from prolonged use, particularly under high operating pressures and speeds, causing the surfaces of the Screw  and Flywheel to gradually degrade. Misalignment may occur due to improper assembly, maintenance issues, or mechanical stresses during operation. "
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: [
                "Binding of Screw within the Flywheel, halting compressor operation", 
                "Increased friction between Screw and Flywheel, leading to potential seizure"
              ]
            },
            "1.2 Loss of compressed air supply under 7,5 PS, capacity 30 m3/hrs (Partial Failure)"
          ],
          [
            "4b",
            "Screw",
            "Operates at excessive temperature performance",
            [
              "11.1 Normal Wear and Tear: Over time, the constant rotation of the motor shaft places mechanical stress on the  flywheel, leading to gradual wear. This wear is a natural consequence of the motor's operation and can occur even under normal operating conditions.",
              "11.2  Lubrication Issues: Inadequate lubrication or contamination of the lubricant can accelerate bearing wear. Insufficient lubrication reduces the effectiveness of the lubricant in reducing friction and preventing metal-to-metal contact between bearing components."
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Reduced Efficiency", "Abnormal Noise and Vibration"]
            },
            "1.2 Loss of compressed air supply under 7,5 PS, capacity 30 m3/hrs (Partial Failure)"
          ],
          [
            "4c",
            "Screw",
            "Fails to start on demand",
            [
              "12.1  Imbalance: An imbalance in the rotating components of the motor, such as the rotor or impeller, can cause uneven forces on the  flywheel, resulting in vibration.",
              "12.2  Loose Components: Loose components within the motor assembly, such as fasteners or mounting bolts, can cause vibration as the motor operates."
            ],
            ["Wear-out", "Random"],
            {
              type: "number",
              text: ["Reduced Efficiency", "decreased compressed"]
            },
            "1.2 Loss of compressed air supply under 7,5 PS, capacity 30 m3/hrs (Partial Failure)"
          ],
          [
            "5a",
            "Rings",
            "Operates at degraded head/flow performance",
            [
              "13.1 Insufficient lubrication or poor lubricant quality : Without adequate lubrication, the surfaces of the Screw  and Flywheel may experience increased friction during operation. This heightened friction can result in accelerated wear and tear on the components, leading to surface damage, scoring, or galling",
              "13.2 Contamination with abrasive particles or corrosive substances : When abrasive particles, such as dirt, dust, or metal fragments, enter the system, they can embed themselves between the Screw and Flywheel surfaces during operation."
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Increased friction", "Abrasion and scoring"]
            },
            "1.2 Loss of compressed air supply under 7,5 PS, capacity 30 m3/hrs (Partial Failure)"
          ],
          [
            "5b",
            "Rings",
            "Operates at excessive head/flow performance",
            [
              "14.1 Lubrication Issues: Inadequate lubrication or contamination of the lubricant can accelerate bearing wear. Insufficient lubrication reduces the effectiveness of the lubricant in reducing friction and preventing metal-to-metal contact between bearing components.",
              "14.2 Overloading: Excessive load on the motor can accelerate bearing wear. Overloading occurs when the air compressor encounters unusually high water levels or blockages, causing the motor to work harder than intended."
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Abnormal Noise and Vibration", "Mechanical stress"]
            },
            "1.2 Loss of compressed air supply under 7,5 PS, capacity 30 m3/hrs (Partial Failure)"
          ],
          [
            "5c",
            "Rings",
            "Fails to start on demand",
            [
              "15.1 Loose electrical connections due to vibrations or poor installation : These loose connections can occur at terminal points, junctions, or wire connectors within the electrical circuitry of the compressor.",
              "15.2 Short circuits : caused by water ingress or insulation breakdown and Component failure due to aging or manufacturing defects."
            ],
            ["Random", "Random"],
            {
              type: "number",
              text: ["Fluctuations or loss of power supply", "system experiences irregularities"]
            },
            "1.1 Failed to start air compressor, unable to operate (Total Failure)"
          ],
          [
            "6a",
            "Control Panel",
            "Operates at excessive temperature performance",
            [
              "16.1 C Wear or damage to rod  flywheel : When rod  flywheel wear or become damaged, they can lead to increased friction and heat generation between the Rings and Flywheel journal.",
              "16.2  Excessive mechanical stress or load on the Rings : When the Rings experiences excessive stress, it can lead to deformation, bending, or even fracture."
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Misalignment between Screw and Flywheel", "Increased Friction"]
            },
            "1.2 Loss of compressed air supply under 7,5 PS, capacity 30 m3/hrs (Partial Failure)"
          ],
          [
            "6b",
            "Control Panel",
            "Operates at excessive head/flow performance",
            [
              "17.1 Lubrication Issues: Inadequate lubrication or contamination of the lubricant can accelerate bearing wear. Insufficient lubrication reduces the effectiveness of the lubricant in reducing friction and preventing metal-to-metal contact between bearing components.",
              "17.2 Overloading: Excessive load on the motor can accelerate bearing wear. Overloading occurs when the air compressor encounters unusually high water levels or blockages, causing the motor to work harder than intended."
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Abnormal Noise and Vibration", "Mechanical stress"]
            },
            "1.2 Loss of compressed air supply under 7,5 PS, capacity 30 m3/hrs (Partial Failure)"
          ],
          [
            "6c",
            "Control Panel",
            "Fails to start on demand",
            [
              "18.1 Loose electrical connections due to vibrations or poor installation : These loose connections can occur at terminal points, junctions, or wire connectors within the electrical circuitry of the compressor.",
              "18.2 Short circuits : caused by water ingress or insulation breakdown and Component failure due to aging or manufacturing defects."
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Fluctuations or loss of power supply", "voltage fluctuations"]
            },
            "1.1 Failed to start air compressor, unable to operate (Total Failure)"
          ],
          [
            "7a",
            "Pressure Regulator",
            "Operates at degraded head/flow performance",
            [
              "19.1 Fatigue failure due to cyclic loading : This type of failure often stems from the reciprocating motion of the Screw, which exerts alternating tensile and compressive forces on the Rings during each stroke of the compressor.",
              "19.2 Overheating due to friction or excessive mechanical stress :  when the Pressure Regulator fails to adequately reduce friction between the Rings and other moving parts, such as the Screw or Flywheel."
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Formation of cracks", "Increased Friction"]
            },
            "1.2 Loss of compressed air supply under 7,5 PS, capacity 30 m3/hrs (Partial Failure)"
          ],
          [
            "7b",
            "Pressure Regulator",
            "Operates at excessive temperature performance",
            [
              "20.1 Lubrication Issues: Inadequate lubrication or contamination of the lubricant can accelerate bearing wear. Insufficient lubrication reduces the effectiveness of the lubricant in reducing friction and preventing metal-to-metal contact between bearing components.",
              "20.2 Overloading: Excessive load on the motor can accelerate bearing wear. Overloading occurs when the air compressor encounters unusually high water levels or blockages, causing the motor to work harder than intended."
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Abnormal Noise and Vibration", "Mechanical stress"]
            },
            "1.2 Loss of compressed air supply under 7,5 PS, capacity 30 m3/hrs (Partial Failure)"
          ],
          [
            "7c",
            "Pressure Regulator",
            "Fails to start on demand",
            [
              "21.1 Loose electrical connections due to vibrations or poor installation : These loose connections can occur at terminal points, junctions, or wire connectors within the electrical circuitry of the compressor.",
              "21.2 Short circuits : caused by water ingress or insulation breakdown and Component failure due to aging or manufacturing defects."
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Fluctuations", "loss of power supply to the control panel"]
            },
            "1.2 Loss of compressed air supply under 7,5 PS, capacity 30 m3/hrs (Partial Failure)"
          ],
        ]
      },
      {
        title: "FMECA (lanjutan)",
        backgroundColor: "#ffefe5",
        borderColor: "#EB5B00",
        headRow: 1,
        head: [
          "No",
          "Part",
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
            "1a",
            "Air filter",
            "Contaminants carried over into compressed gas",
            "Reduced airflow decreases the compressor's capacity to generate compressed air, resulting in decreased system performance, increased energy consumption, and potential overheating or mechanical damage to the compressor.",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Check for low airflow indicators or alarms.", "Measure the compressor's output pressure"],
            },
            {
              type: "dot",
              text: [
                "Regular cleaning or replacement of air filter according to manufacturer guidelines to prevent blockage and ensure proper airflow.",
              ],
            },
          ],
          [
            "1b",
            "Air filter",
            "Operates at excessive temperature performance",
            "Reduced compressed efficiency: A deformed rotor disrupts fluid flow, decreasing the air compressor's effectiveness in removing water from the ship's compartments.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Monitor for reduced air pressure and efficiency",
                "Perform visual and mechanical inspections of the rotor for signs of deformation."
              ],
            },
            {
              type: "dot",
              text: [
                "Regularly inspect compressed rotor for warping or bending.",
              ],
            },
          ],
          [
            "1c",
            "Air filter",
            "Fails to start on demand",
            "Diminished compressed efficiency: Corrosion on the rotor surface impedes fluid flow, reducing the compressed air compressed's ability to effectively remove water from ship compartments.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: ["Monitoring of pressure differentials", "airflow patterns within the air separator."],
            },
            {
              type: "dot",
              text: [
                "inspect the rotor surface for signs of corrosion or pitting.",
                "Monitor compressor efficiency and performance metrics.",
              ],
            },
          ],
          [
            "2a",
            "Intercooler",
            "Fails to start on demand",
            "Potential damage to electrical components: Continued operation with a ground fault can lead to further damage or complete failure of electrical components.",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Check for electrical faults or alarms indicating ground faults.",
                "Inspect electrical components for signs of damage or overheating."
              ],
            },
            {
              type: "dot",
              text: [
                "Regular inspection and testing of electrical wiring and connections",
              ],
            },
          ],
          [
            "2b",
            "Intercooler",
            "Operates at excessive temperature performance",
            "Complete compressed failure: A short circuit can render the air compressor inoperable, preventing it from removing water from the compressed air. This can lead to flooding, compromising stability and increasing the risk of capsizing.",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Observe for complete inoperability or failure to start.",
                "Check for short circuit alarms or error codes."
              ],
            },
            {
              type: "dot",
              text: [
                "Isolate the circuit to stop electricity flow and prevent further damage.",
              ],
            },
          ],
          [
            "2c",
            "Intercooler ",
            "Fails to start on demand",
            "Loss of compressed Functionality: An open circuit in the stator of a air compressor can cause the compressed to fail, resulting in the inability to remove water from the compressed air.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: ["Monitoring of pressure differentials", "airflow patterns within the air separator."],
            },
            {
              type: "dot",
              text: [
                "Detect the inability to operate or reduced performance.",
                "Measure electrical continuity and inspect for open circuits.",
              ],
            },
          ],
          [
            "3a",
            "Flywheel",
            "Contaminants carried over into compressed gas",
            "Accelerated wear on screw and Flywheel surfaces, potential scoring or galling : o the phenomenon where these critical components experience faster-than-normal degradation, leading to surface irregularities and potential damage. This accelerated wear can occur due to various factors such as abrasive contaminants present in the compressed air, insufficient lubrication, high operating temperatures, and pressures beyond the design limits",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Abnormal noise or vibration during compressor operation.",
                "Inspection of compressed air for contaminants and particle filters."
              ],
            },
            {
              type: "dot",
              text: [
                "Implement a regular maintenance program to inspect, clean, lubricate, and test the pressure relief valve.",
              ],
            },
          ],
          [
            "3b",
            "Flywheel",
            "Operates at degraded head/flow performance",
            "Reduced compressed reliability: Worn  flywheel lead to increased friction and vibration in the air compressor assembly, resulting in decreased compressed efficiency, erratic operation, and potential compressed failure, endangering operational safety.",
            "2",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Abnormal noise", "corrosion visible damage"],
            },
            {
              type: "dot",
              text: ["Implement a scheduled maintenance program",],
            },
          ],
          [
            "3c",
            "Flywheel",
            "Operates at excessive temperature performance",
            "Risk of Electrical Hazards: Vibrating motor casing can lead to loosening of electrical connections or damage to wiring, increasing the risk of electrical malfunctions or short circuits, posing safety hazards to crew members and equipment onboard the ship.",
            "2",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Abnormal noise and vibration"],
            },
            {
              type: "dot",
              text: ["Conduct routine maintenance, cleaning, and lubrication of the drain valve"],
            },
          ],
          [
            "4a",
            "Screw",
            "Operates at degraded head/flow performance",
            "Potential damage to screw rings, Flywheel wall, and other components : When these components are subjected to stress beyond their design limits, they may experience wear, scoring, or even deformation.",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Monitoring of compressor temperature and lubrication systems.",
                "Visual inspection of screw-Flywheel interface for signs of wear."
              ],
            },
            {
              type: "dot",
              text: ["Conduct routine maintenance, cleaning, and lubrication of the drain valve",],
            },
          ],
          [
            "4b",
            "Screw",
            "Operates at excessive temperature performance",
            "System Inefficiency: Persistent leakage compromises the efficiency of the system, resulting in increased energy consumption, decreased productivity, and potential damage to downstream components.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: ["Abnormal noise", "Reduce compressed efficiency"],
            },
            {
              type: "dot",
              text: [
                "Replace worn or damaged seals with new ones made of compatible materials to restore proper sealing and prevent leakage.",
              ],
            },
          ],
          [
            "4c",
            "Screw",
            "Fails to start on demand",
            "Water Supply Disruption: Complete blockage of the valve passage can disrupt water supply to critical areas, causing inconvenience, operational disruptions, and potential safety hazards.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: ["Measure system performance and detect reduced efficiency."],
            },
            {
              type: "dot",
              text: [
                "Implement a routine maintenance schedule to flush or clean the valve to remove accumulated debris, sediment, or scale deposits."
              ],
            },
          ],
          [
            "5a",
            "Rings",
            "Operates at degraded head/flow performance",
            "Potential damage to screw rings, Flywheel wall, and other components : When these components are subjected to stress beyond their design limits, they may experience wear, scoring, or even deformation.",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Detect interruptions in water supply and operational disruptions."],
            },
            {
              type: "dot",
              text: ["Conduct routine maintenance, cleaning, and lubrication of the drain valve",],
            },
          ],
          [
            "5b",
            "Rings",
            "Operates at excessive head/flow performance",
            "System Inefficiency: Persistent leakage compromises the efficiency of the system, resulting in increased energy consumption, decreased productivity, and potential damage to downstream components.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: ["Inspect for wear, damage, or deformation in Ringss and  flywheel."],
            },
            {
              type: "dot",
              text: [
                "Seal Replacement: Replace worn or damaged seals with new ones made of compatible materials to restore proper sealing and prevent leakage. Valve Inspection and",
              ],
            },
          ],
          [
            "5c",
            "Rings",
            "Fails to start on demand",
            "Water Supply Disruption: Complete blockage of the valve passage can disrupt water supply to critical areas, causing inconvenience, operational disruptions, and potential safety hazards.",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Observe for loose electrical connections and potential wiring damage."],
            },
            {
              type: "dot",
              text: [
                "Regular Cleaning: Implement a routine maintenance schedule to flush or clean the valve to remove accumulated debris, sediment, or scale deposits."
              ],
            },
          ],
          [
            "6a",
            "Control Panel",
            "Operates at excessive temperature performance",
            "Potential damage to Rings and Pressure Regulator bearing : Excessive mechanical stress or load on the Rings, often caused by misalignment, improper lubrication, or overloading of the compressor, can lead to accelerated wear and fatigue failure of the  flywheel.",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Monitor for unusual vibrations or noises from the flywheel."],
            },
            {
              type: "dot",
              text: ["Conduct routine maintenance, cleaning, and lubrication of the drain valve to remove debris, sediment, or corrosion and ensure smooth operation and longevity.",],
            },
          ],
          [
            "6b",
            "Control Panel",
            "Operates at excessive head/flow performance",
            "Risk of Electrical Hazards: Vibrating motor casing can lead to loosening of electrical connections or damage to wiring, increasing the risk of electrical malfunctions or short circuits, posing safety hazards to crew members and equipment onboard the ship.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: ["Monitor for increased friction, noise, or vibrations in the Rings area."],
            },
            {
              type: "dot",
              text: [
                "Scheduled inspection and non-destructive testing to detect early signs of crack formation, followed by repair or replacement as necessary.",
              ],
            },
          ],
          [
            "6c",
            "Control Panel",
            "Fails to start on demand",
            "Risk of Electrical Hazards: Vibrating motor casing can lead to loosening of electrical connections or damage to wiring, increasing the risk of electrical malfunctions or short circuits, posing safety hazards to crew members and equipment onboard the ship.",
            "2",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Inspect for loose or damaged electrical connections and wiring."],
            },
            {
              type: "dot",
              text: [
                "Implement a routine maintenance schedule to flush or clean the valve to remove accumulated debris, sediment, or scale deposits."
              ],
            },
          ],
          [
            "7a",
            "Pressure Regulator",
            "Operates at degraded head/flow performance",
            "Potential catastrophic failure of flywheel during operation.",
            "2",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Observe for unusual vibrations or noises coming from the flywheel."],
            },
            {
              type: "dot",
              text: ["shut down the compressed and replace them with high-quality marine flywheel.",],
            },
          ],
          [
            "7b",
            "Pressure Regulator",
            "Operates at excessive temperature performance",
            "Reduced compressed reliability: Worn  flywheel lead to increased friction and vibration in the air compressor assembly, resulting in decreased compressed efficiency, erratic operation, and potential compressed failure, endangering operational safety.",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Inspect electrical connections and wiring for looseness or damage."],
            },
            {
              type: "dot",
              text: [
                "Replace worn or damaged seals with new ones made of compatible materials to restore proper sealing and prevent leakage.",
              ],
            },
          ],
          [
            "7c",
            "Pressure Regulator",
            "Fails to start on demand",
            "Risk of Electrical Hazards: Vibrating motor casing can lead to loosening of electrical connections or damage to wiring, increasing the risk of electrical malfunctions or short circuits, posing safety hazards to crew members and equipment onboard the ship.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: ["Inspect flywheel for signs of wear, damage, or deformation."],
            },
            {
              type: "dot",
              text: [
                "Shut down the compressed and inspect for misalignment, imbalance, or worn components."
              ],
            },
          ],
        ]
      },
      {
        title: "Maintenance Task Selection",
        backgroundColor: "#f5eafa",
        borderColor: "#912BBC",
        headRow: 2,
        head: [
          "No",
          "Part",
          "Failure Mode",
          ["Risk Characterization", ["CoF", "Rec PoF", "Current Risk"]],
          ["Task Selection", ["Proposed Action (s)", "Proj PoF", "Proj Risk"]],
        ],
        body: [
          [
            "1a",
            "Air filter",
            "Contaminants carried over into compressed gas",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: ["Replace intake filters periodically to prevent dust and debris from entering the system."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "1b",
            "Air filter",
            "Operates at excessive temperature performance",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: ["Install moisture separators to reduce the amount of moisture entering the system."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "1c",
            "Air filter",
            "Fails to start on demand",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: ["Enhance the cooling system by adding ventilation or repairing cooling fans."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "2a",
            "Intercooler",
            "Fails to start on demand",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: ["Monitor and adjust flow rates to avoid sudden changes that can cause mechanical stress."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "2b",
            "Intercooler",
            "Operates at excessive temperature performance",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: ["Implement humidity control systems to maintain safe moisture levels."],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "2c",
            "Intercooler",
            "Fails to start on demand",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: ["Set up a regular maintenance schedule to ensure components are clean and functioning properly."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "3a",
            "Flywheel",
            "Contaminants carried over into compressed gas",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: ["Check and repair all electrical connections to prevent short circuits or other issues."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "3b",
            "Flywheel",
            "Operates at degraded head/flow performance",
            "2",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: ["Replace damaged components such as solenoids or sensors."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "3c",
            "Flywheel",
            "Operates at excessive temperature performance",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: ["Regularly check insulation and repair or replace as needed."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "4a",
            "Screw",
            "Operates at degraded head/flow performance",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: ["Check for broken or damaged wires and replace them as necessary."],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "4b",
            "Screw",
            "Operates at excessive temperature performance",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: ["Ensure all connections are tight and secure, and check for corrosion."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "4c",
            "Screw",
            "Fails to start on demand",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: ["Verify that the lubrication system is functioning correctly and that the right lubricant is used."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "5a",
            "Rings",
            "Operates at degraded head/flow performance",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: ["Use appropriate air filters to prevent foreign particles from entering the system."],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "5b",
            "Rings",
            "Operates at excessive head/flow performance",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: ["Regularly monitor the wear levels and replace components as needed."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "5c",
            "Rings",
            "Fails to start on demand",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: ["Ensure rotating components are balanced to reduce vibrations."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "6a",
            "Control Panel",
            "Operates at degraded temperature performance",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: ["Enhance the efficiency of the cooling system to ensure adequate cooling."],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "6b",
            "Control Panel",
            "Operates at excessive head/flow performance",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: ["Confirm that lubrication is performed properly and on schedule."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "6c",
            "Control Panel",
            "Fails to start on demand",
            "2",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: ["Check and tighten all electrical connections."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "7a",
            "Pressure Regulator",
            "Operates at degraded head/flow performance",
            "2",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: ["Track and manage cyclic loads to reduce the risk of fatigue failure."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "7b",
            "Pressure Regulator",
            "Operates at excessive temperature performance",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: ["Ensure the lubrication system is effective to reduce friction."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "7c",
            "Pressure Regulator",
            "Fails to start on demand",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: ["Regularly inspect and secure all electrical connections."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
        ]
      }
    ]
  },
  {
    slug: "air-receiver",
    type: "COMPRESSED_AIR_SYSTEM",
    specs: {
      functionalGroup: "Propulsion Function Group",
      system: "Diesel Engine",
      subsystem: "Compressed Air System",
      equipmentID: "CA-AR-01",
      equipmentName: "Air Receiver",
      drawing: "Sistem Pipa Udara Tekan",
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
            "storing compressed air to provide a steady and consistent supply of pressurized air to various pneumatic devices and equipment onboard the ship. Working Pressure on 2,94 Mpa and Capacity onr 200 Liter",
            "Primary",
            ["1,1", "1,2", "1,3"],
            [
              "Fails to store and distribute compressed air (Total Failure)",
              "Working Pressure under 2,94 Mpa (Partial Failure)",
              "Capacity under 200 Liter",
            ],
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
          "Part",
          "Failure Mode",
          "Causes",
          "Failure Charasteristic",
          "Local Effect",
          "Functional Failure",
        ],
        body: [
          [
            "1a",
            "Inlet and Outlet",
            "Leakage",
            [
              "1.1  Electrical Wiring Fault: This cause involves issues with the wiring connected to the inlet valve, such as short circuits, loose connections, or damaged insulation.",
              "1.2 Component Damage: Damage to electrical components within the inlet valve, such as solenoids or sensors, due to wear and tear or external factors."
            ],
            ["Random", "Wear-out"],
            {
              type: "number",
              text: ["Interruption or erratic behavior of electrical signals", "Degradation of electrical components"]
            },
            [
              "1.1 fails to store and distribute compressed air effectively",
              "1.2 Working Pressure under 2,94 Mpa",
              "1.3 Capacity under 200 Liter",
            ]
          ],
          [
            "1b",
            "Inlet and Outlet",
            "Wear and Tear",
            [
              "2.1 Continuous usage and friction between moving parts can lead to mechanical wear and tear of the inlet and outlet components, such as seals, gaskets, or valve seats, compromising their sealing effectiveness and integrity.",
              "2.2 Over time, repeated opening and closing of the inlet and outlet valves, coupled with fluid flow and pressure fluctuations, result in abrasion, erosion, or deformation of the sealing surfaces, reducing their ability to form a tight seal and regulate fluid flow."
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Leakage Pathways", "Reduced Sealing Effectiveness"]
            },
            [
              "1.1 fails to store and distribute compressed air effectively",
              "1.2 Working Pressure under 2,94 Mpa",
              "1.3 Capacity under 200 Liter",
            ]
          ],
          [
            "1c",
            "Inlet and Outlet",
            "Corroded",
            [
              "3.1 Chemical Exposure: Exposure to corrosive chemicals or substances in the fluid being transported can lead to corrosion of the inlet and outlet components.",
              "3.2 Abrasive Particles: Presence of abrasive particles or sediments in the fluid flow can cause erosion of the inlet and outlet surfaces over time."
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Surface Degradation", "Leakage Pathways"]
            },
            [
              "1.2 Working Pressure under 2,94 Mpa",
              "1.3 Capacity under 200 Liter",
            ]
          ],
          [
            "2a",
            "Pressure Gauge",
            "Inaccurate Reading",
            [
              "4.1 Internal Damage: Internal components of the pressure gauge, such as the bourdon tube or dial mechanism, may become damaged due to wear and tear, excessive pressure, or mechanical shock.",
              "4.2 Calibration Drift: Over time, the accuracy of the pressure gauge may drift due to factors like environmental conditions, vibration, or exposure to corrosive substances, leading to incorrect pressure readings."
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Calibration drift", "Sticking or Jamming"]
            },
            [
              "1.2 Working Pressure under 2,94 Mpa",
              "1.3 Capacity under 200 Liter",
            ]
          ],
          [
            "2b",
            "Pressure Gauge",
            "Mechanical Damage",
            [
              "5.1  Physical Impact: Accidental impact or mechanical shock to the pressure gauge, such as dropping heavy objects on it or bumping into it during maintenance activities, can cause mechanical damage.",
              "5.2 Excessive Pressure: Exposure to pressures beyond the gauge's specified range or sudden pressure spikes in the system can overload the internal components, leading to mechanical failure."
            ],
            ["Random", "Random"],
            {
              type: "number",
              text: ["Visible Damage","Functional Impairment"]
            },
            [
              "1.1 fails to store and distribute compressed air effectively",
              "1.2 Working Pressure under 2,94 Mpa",
              "1.3 Capacity under 200 Liter",
            ]
          ],
          [
            "2c",
            "Pressure Gauge",
            "Calibration Drift",
            [
              "6.1 Environmental Factors: Changes in temperature, humidity, or atmospheric pressure can affect the properties of the pressure gauge's internal components, leading to calibration drift over time.",
              "6.2 Wear and Tear: Normal wear and tear on the gauge's mechanical or electronic components, such as the bourdon tube or sensing element, can cause gradual changes in its calibration accuracy."
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Shift in Reading", "Erroneous Readings"]
            },
            [
              "1.2 Working Pressure under 2,94 Mpa",
              "1.3 Capacity under 200 Liter",
            ]
          ],
          [
            "3a",
            "Pressure Relief",
            "Plugged/choked inlet",
            [
              "7.1 Spring Fatigue: Over time, the spring in the pressure relief valve may weaken or lose elasticity due to cyclic loading, high temperatures, or corrosion, resulting in inadequate relief pressure.",
              "7.2 Buildup of Deposits: Accumulation of debris, scale, or sediment within the pressure relief valve can obstruct its mechanism, preventing proper operation and release of excess pressure."
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Inadequate Pressure Relief", "Leakage or Weepin"]
            },
            [
              "1.2 Working Pressure under 2,94 Mpa",
              "1.3 Capacity under 200 Liter",
            ]
          ],
          [
            "3b",
            "Pressure Relief",
            "Plugged/choked outlet",
            [
              "8.1 Mechanical Obstruction: Accumulation of debris, corrosion, or foreign objects in the valve's internal passages or seat may prevent it from fully opening during overpressure conditions.",
              "8.2 Spring Failure: Weakening or failure of the valve's spring mechanism, which provides the force necessary to open the valve, can lead to insufficient force to overcome the pressure."
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Inadequate Pressure Relief", "Increased Pressure Buildup"]
            },
            [
              "1.2 Working Pressure under 2,94 Mpa",
              "1.3 Capacity under 200 Liter",
            ]
          ],
          [
            "3c",
            "Pressure Relief",
            "External leak/rupture",
            [
              "9.1 Seal Degradation: Deterioration or damage to the valve seals due to age, chemical exposure, or mechanical wear can result in leakage.",
              "9.2 Seat Misalignment: Misalignment of the valve seat or disc caused by improper installation, mechanical stress, or system vibration may lead to inadequate sealing and leakage."
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Fluid Loss", "Environmental Contamination"]
            },
            [
              "1.1 fails to store and distribute compressed air effectively",
              "1.2 Working Pressure under 2,94 Mpa",
              "1.3 Capacity under 200 Liter",
            ]
          ],
          [
            "4a",
            "Drain Valve",
            "Plugged/choked inlet",
            [
              "10.1 Corrosion and Rust: Exposure to moisture and corrosive elements can cause the drain valve components, such as seals, threads, or metal parts, to corrode or rust over time, leading to degradation and malfunction.",
              "10.2 Sediment Buildup: Accumulation of debris, scale, or sediment within the drain valve can obstruct its operation, preventing proper opening or closure and resulting in blockages or leaks."
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Leakage or Dripping", "Reduced Drainage Capacity"]
            },
            [
              "1.2 Working Pressure under 2,94 Mpa",
              "1.3 Capacity under 200 Liter",
            ]
          ],
          [
            "4b",
            "Drain Valve",
            "External leak/rupture",
            [
              "11.1 Seal Degradation: Deterioration or damage to the valve seals due to age, chemical exposure, or mechanical wear can result in leakage.",
              "11.2 Corrosion: Corrosive substances present in the fluid or environment can corrode the valve components, compromising their integrity and causing leakage."
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Fluid Loss", "Environmental Contamination"]
            },
            [
              "1.2 Working Pressure under 2,94 Mpa",
              "1.3 Capacity under 200 Liter",
            ]
          ],
          [
            "4c",
            "Drain Valve",
            "Plugged/choked outlet",
            [
              "12.1 Debris Accumulation: Accumulation of dirt, sediment, or foreign objects in the valve passage can obstruct the flow path and prevent proper valve operation.",
              "12.2 Scaling: Scaling due to mineral deposits or corrosion products can form inside the valve, narrowing the passage and impeding fluid flow."
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: ["Reduced Flow Rate", "Increased Pressure Drop"]
            },
            [
              "1.2 Working Pressure under 2,94 Mpa",
              "1.3 Capacity under 200 Liter",
            ]
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
          "Part",
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
            "1a",
            "Inlet and Outlet",
            "Leakage",
            "Potential damage to electrical components: Continued operation with a ground fault can lead to further damage or complete failure of electrical components.",
            "1",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: ["Visual inspection", "Monitoring of electrical signals"],
            },
            {
              type: "dot",
              text: [
                "Regular inspection and testing of electrical wiring and connections",
              ],
            },
          ],
          [
            "1b",
            "Inlet and Outlet",
            "Wear and Tear",
            "Fluid Loss: Inadequate sealing due to mechanical wear and tear results in fluid loss through the inlet and outlet valves, leading to wastage, reduced system efficiency, and potential contamination of surrounding areas.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: ["Visual inspection", "Monitoring of electrical signals"],
            },
            {
              type: "dot",
              text: [
                "implement a proactive maintenance program",
              ],
            },
          ],
          [
            "1c",
            "Inlet and Outlet",
            "Corroded",
            "Fluid Contamination: Corroded or eroded inlet and outlet surfaces introduce contaminants into the fluid flow, potentially contaminating the sanitary supply system and downstream processes.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: ["Visual inspection", "Material Thickness Measurement"],
            },
            {
              type: "dot",
              text: [
                "Implement corrosion-resistant coatings, linings, or materials",
              ],
            },
          ],
          [
            "2a",
            "Pressure Gauge",
            "Inaccurate Reading",
            "System Mismanagement: Inaccurate pressure readings from the gauge can lead to improper system operation, such as overpressurization or underpressurization, which may cause equipment damage or system failure.",
            "1",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: ["Functionality Test", "Comparison with Reference Gauges"],
            },
            {
              type: "dot",
              text: [
                "Implement a schedule for regular calibration",
              ],
            },
          ],
          [
            "2b",
            "Pressure Gauge",
            "Mechanical Damage",
            "Safety Hazard: Malfunctioning pressure gauges may fail to alert operators to unsafe pressure conditions, posing a safety hazard to personnel or equipment.",
            "1",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: ["mechanical operation", "Functionality Test"],
            },
            {
              type: "dot",
              text: [
                "Install protective guards or shields around the pressure gauge",
              ],
            },
          ],
          [
            "2c",
            "Pressure Gauge",
            "Calibration Drift",
            "System Inefficiency: Inaccurate pressure readings due to calibration drift can lead to suboptimal system operation, affecting process efficiency, energy consumption, or product quality.",
            "1",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: ["Calibration Checks", "Functional Testing"],
            },
            {
              type: "dot",
              text: [
                "Implement a regular calibration schedule",
              ],
            },
          ],
          [
            "3a",
            "Pressure Relief",
            "Plugged/choked inlet",
            "Spring Fatigue: Over time, the spring in the pressure relief valve may weaken or lose elasticity due to cyclic loading, high temperatures, or corrosion, resulting in inadequate relief pressure.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: ["Visual inspection", "Pressure Monitoring"],
            },
            {
              type: "dot",
              text: [
                "Implement a regular maintenance program",
              ],
            },
          ],
          [
            "3b",
            "Pressure Relief",
            "Plugged/choked outlet",
            "System Overpressure: Failure of the pressure relief valve to open results in sustained overpressure conditions within the system, leading to potential equipment failure, leaks, or ruptures.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: ["Visual inspection", "Functional Testing"],
            },
            {
              type: "dot",
              text: [
                "Implement a scheduled maintenance program",
              ],
            },
          ],
          [
            "3c",
            "Pressure Relief",
            "External leak/rupture",
            "System Inefficiency: Persistent leakage compromises the efficiency of the system, resulting in increased energy consumption, decreased productivity, and potential damage to downstream components.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: ["Visual inspection", "Fluid Level Monitoring"],
            },
            {
              type: "dot",
              text: [
                "Conduct routine maintenance, cleaning, and lubrication",
              ],
            },
          ],
          [
            "4a",
            "Drain Valve",
            "Plugged/choked inlet",
            "System Contamination: Inadequate drainage due to valve malfunction can result in the buildup of stagnant water or fluids within the system, promoting microbial growth, fouling, or contamination, compromising water quality and system integrity.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: ["Visual inspection", "Pressure Monitoring"],
            },
            {
              type: "dot",
              text: [
                "Conduct routine maintenance, cleaning, and lubrication",
              ],
            },
          ],
          [
            "4b",
            "Drain Valve",
            "External leak/rupture",
            "System Inefficiency: Persistent leakage compromises the efficiency of the system, resulting in increased energy consumption, decreased productivity, and potential damage to downstream components.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: ["Visual inspection", "Functional Testing"],
            },
            {
              type: "dot",
              text: [
                "Replace worn or damaged seals with new ones made",
              ],
            },
          ],
          [
            "4c",
            "Drain Valve",
            "Plugged/choked outlet",
            "Water Supply Disruption: Complete blockage of the valve passage can disrupt water supply to critical areas, causing inconvenience, operational disruptions, and potential safety hazards..",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: ["Visual inspection", "Fluid Level Monitoring"],
            },
            {
              type: "dot",
              text: [
                "Conduct regular operational checks",
              ],
            },
          ],
        ]
      },
      {
        title: "Maintenance Task Selection",
        backgroundColor: "#f5eafa",
        borderColor: "#912BBC",
        headRow: 2,
        head: [
          "No",
          "Part",
          "Failure Mode",
          ["Risk Characterization", ["CoF", "Rec PoF", "Current Risk"]],
          ["Task Selection", ["Proposed Action (s)", "Proj PoF", "Proj Risk"]],
        ],
        body: [
          [
            "1a",
            "Inlet and Outlet",
            "Leakage",
            "1",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: ["Conduct routine inspections and repairs of electrical wiring to ensure there are no short circuits or loose connections."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "1b",
            "Inlet and Outlet",
            "Wear and Tear",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: ["Perform regular maintenance to check and replace worn seals, gaskets, and valve seats."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "1c",
            "Inlet and Outlet",
            "Corroded",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: ["Apply protective coatings to prevent corrosion on inlet and outlet components."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "2a",
            "Pressure Gauge",
            "Inaccurate Reading",
            "1",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: ["Inspect and replace damaged internal components of the pressure gauge."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "2b",
            "Pressure Gauge",
            "Mechanical Damage",
            "1",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: ["Provide physical protection for the pressure gauge to avoid mechanical impact or shock."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "2c",
            "Pressure Gauge",
            "Calibration Drift",
            "1",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: ["Use environmental protection measures to maintain stable temperature, humidity, and atmospheric pressure conditions."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "3a",
            "Pressure Relief",
            "Plugged/choked inlet",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: ["Periodically replace the spring in the pressure relief valve to prevent spring fatigue."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "3b",
            "Pressure Relief",
            "Plugged/choked outlet",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: ["Routinely clean the internal passages of the valve to prevent accumulation of debris or corrosion."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "3c",
            "Pressure Relief",
            "External leak/rupture",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: ["Replace degraded or damaged valve seals to prevent leakage."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "4a",
            "Drain Valve",
            "Plugged/choked inlet",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: ["Apply anti-corrosion coatings to protect valve components from rust."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "4b",
            "Drain Valve",
            "External leak/rupture",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: ["Regularly replace worn or damaged valve seals."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "4c",
            "Drain Valve",
            "Plugged/choked outlet",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: ["Regularly clean to remove dirt, sediment, or foreign objects in the valve passage."],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
        ]
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
              text: [
                "Inspect and repair damaged wires and secure all connections.",
              ],
            },
            "CM",
            ["1.1", "1.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "500 hours and/or Performed on: Regular electrical inspections When faults or short circuits occur",
            "-",
            "Performed by a mechanic. Repairs should be done immediately if any damage is found",
          ],
          [
            {
              type: "dot",
              text: [
                "Lubricate parts, inspect seals, and replace worn components.",
              ],
            },
            "PM",
            ["2.1", "2.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "1000 hours and/or Performed on: Routine maintenance schedule When leaks or wear are detected",
            "-",
            "Follow manufacturer/vendor recommendations. Repairs should be done immediately if any damage is found.",
          ],
          [
            {
              type: "dot",
              text: [
                "Apply corrosion-resistant coatings and clean corrosion products.",
              ],
            },
            "CM/PM",
            ["3.1", "3.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "2000 hours and/or Performed on: Annual maintenance When corrosion is detected",
            "-",
            "Performed by a mechanic. Repairs should be done immediately if any damage is found",
          ],
          [
            {
              type: "dot",
              text: [
                "Calibrate the gauge and install protective covers.",
              ],
            },
            "FF",
            ["4.1", "4.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "1000 hours and/or Performed on: Routine calibration schedule When inaccurate readings are observed",
            "-",
            "Follow manufacturer/vendor recommendations. Repairs should be done immediately if any damage is found.",
          ],
          [
            {
              type: "dot",
              text: [
                "Install guards and test pressure limiters.",
              ],
            },
            "OTC",
            ["1.1", "1.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "2000 hours and/or Performed on: Annual inspection When pressure anomalies are detected",
            "-",
            "Performed by a mechanic. Repairs should be done immediately if any damage is found",
          ],
          [
            {
              type: "dot",
              text: [
                "Calibrate the gauge per manufacturer guidelines.",
              ],
            },
            "PM",
            ["6.1", "6.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "1000 hours and/or Performed on: Scheduled calibration When calibration drift is observed",
            "-",
            "Follow manufacturer/vendor recommendations. Performed by a mechanic.",
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
              text: ["Test and recertify valve set pressure and performance."]
            },
            "FF",
            ["8.1", "8.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "2000 hours and/or Performed on: Annual testing schedule When relief pressure issues are observed",
            "-",
            "Performed by a mechanic. Repairs should be done immediately if any damage is found",
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
              text: ["Clean, lubricate, reassemble, and test the valve."]
            },
            "PM",
            ["7.1", "7.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "2000 hours and/or Performed on: Annual testing schedule When relief pressure issues are observed",
            "-",
            "Performed by a mechanic. Repairs should be done immediately if any damage is found",
          ],
          [
            { 
              type: "dot", 
              text: ["Clean, lubricate, reassemble, and test the valve."]
            },
            "PM",
            ["9.1", "9.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "1000 hours and/or Performed on: Routine maintenance schedule When blockage or malfunction is detected",
            "-",
            "Follow manufacturer/vendor recommendations. Performed by a mechanic.",
          ],
          [
            { 
              type: "dot", 
              text: ["Clean, lubricate, reassemble, and test the valve."]
            },
            "PM",
            ["10.1", "10.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "1000 hours and/or Performed on: Routine maintenance schedule When blockage or malfunction is detected",
            "-",
            "Repairs should be done immediately if any damage is found. Follow manufacturer/vendor recommendations.",
          ],
          [
            { 
              type: "dot", 
              text: ["Replace seals, clean, and lubricate valve components."]
            },
            "RTF",
            ["11.1", "11.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "2000 hours and/or Performed on: Annual testing schedule When relief pressure issues are observed",
            "-",
            "Follow manufacturer/vendor recommendations. Performed by a mechanic.",
          ],
          [
            { 
              type: "dot", 
              text: ["Flush the valve and perform operational checks."]
            },
            "PM",
            ["12.1", "12.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "1000 hours and/or Performed on: Routine maintenance schedule When blockage or malfunction is detected",
            "-",
            "Performed by a mechanic. Repairs should be done immediately if any damage is found",
          ],
        ],
      },
    ]
  },
  {
    slug: "storage-tank-fo",
    type: "FUEL_OIL_SYSTEM",
    specs: {
      functionalGroup: "Propulsion Function Group",
      system: "Diesel Engine",
      subsystem: "Fuel Oil System",
      equipmentID: "FO-STT-01",
      equipmentName: "Storage Tank FO",
      drawing: "Sistem Pipa Bahan Bakar",
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
            "Berfungsi untuk menyimpan bahan bakar minyak yang diperlukan untuk mesin utama",
            "Primary",
            "1,1",
            "Tangki tidak dapat menyimpan bahan bakar minyak untuk storage tank",
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
            "Kebocoran pada storage tank",
            "1.1 Dinding menipis karena korosi oleh waktu dari kondisi lingkungan atau air laut",
            "Wear-out",
            {
              type: "number",
              text: [
                "Hilangnya Kemampuan menyimpan bahan bakar",
                "Kerusakan struktural  pada tanki"
              ]
            },
            "1,1 Tangki tidak dapat menyimpan bahan bakar minyak untuk storage tank"
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
            "Kebocoran pada storage tank",
            "Kebocoran dapat menyebabkab keluarnya bahan bakar yang berpotensi terjadi kebakaran atau ledakan. Dapat mengurangi endurance kapal.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: ["Visual inspeksi", "Pemantauan level bahan bakar"],
            },
            {
              type: "dot",
              text: [
                "Pembersihan dan inspeksi pada tanki",
              ],
            },
          ],
        ]
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
            "Kebocoran pada storage tank",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                "Pembersihan dan inspeksi pada tanki utama bahan bakar", 
                "Uji tes ketebalan plat dengan Metode NDT ((Non-Destructive Test)"		
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
        ]
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
              text: ["Pembersihan dan inspeksi pada tanki utama bahan bakar"]
            },
            "CM",
            "1.1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "Special Survey Docking",
            "Class",
            "Tanki perlu di kosongkan dan dibersikan, sebelum dilakukan inspeksi internal tanki",
          ],
          [
            { 
              type: "dot", 
              text: ["Uji tes ketebalan plat dengan Metode NDT ((Non-Destructive Test)"]
            },
            "FF",
            "1.1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "Setiap Docking",
            "Class",
            "Untuk memantau ketebalan plat tanki yang berhubungan langsung dengan air laut",
          ],
        ],
      },
    ]
  },
  {
    slug: "fo-transfer-pump-1",
    type: "FUEL_OIL_SYSTEM",
    specs: {
      functionalGroup: "Propulsion Function Group",
      system: "Diesel Engine",
      subsystem: "Fuel Oil System",
      equipmentID: "FO-TP-01",
      equipmentName: "FO Transfer Pump 01",
      drawing: "Sistem Pipa Bahan Bakar",
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
            "Berfungsi untuk memompa dan transfer bahan bakar dari storage tank ke tangki harian dengan debit tidak kurang dari 18 m3/h dengan head pompa 30 m.",
            "Primary",
            ["2,1", "2,2"],
            [
              "Tidak ada aliran bahan bakar minyak yang dipindahkan",
              "Memompa bahan bakar dengan debit dibawah 18m3/Jam pada head 30 m"
            ],
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
            "1a",
            "Tidak ada aliran bahan bakar minyak",
            "2.1 Suction saringan pompa tersumbat sepenuhnya",
            "Wear-out",
            {
              type: "number",
              text: [
                "Pompa tidak dapat memindahkan bahan bakar",
                "Tangki harian tidak menerima bahan bakar sesuai dengan kebutuhan",
              ]
            },
            "2,1 Tidak ada aliran bahan bakar minyak yang dipindahkan"
          ],
          [
            "1b",
            "Tidak ada aliran bahan bakar minyak",
            "2.2 Motor elektrik gagal bekerja",
            "Random",
            {
              type: "number",
              text: [
                "Pompa tidak dapat memindahkan bahan bakar",
                "Tangki harian tidak menerima bahan bakar sesuai dengan kebutuhan",
              ]
            },
            "2,1 Tidak ada aliran bahan bakar minyak yang dipindahkan"
          ],
          [
            "2a",
            "Beroperasi pada  head atau flow dibawah kinerja",
            "2.3 Keausan komponen internal atau mechanical fatigue.",
            "Wear-out",
            {
              type: "number",
              text: [
                "Kapasitas pompa berkurang",
                "Tangki harian tidak menerima bahan bakar  yang cukup sesuai dengan kebutuhan",
              ]
            },
            "2,2 Memompa bahan bakar dengan debit dibawah 18m3/Jam pada head 30 m"
          ],
          [
            "2b",
            "Beroperasi pada  head atau flow dibawah kinerja",
            "2.4 Suction saringan pompa tersumbat sebagian",
            "Wear-out",
            {
              type: "number",
              text: [
                "Kapasitas pompa berkurang",
                "Tangki harian tidak menerima bahan bakar  yang cukup sesuai dengan kebutuhan",
              ]
            },
            "2,2 Memompa bahan bakar dengan debit dibawah 18m3/Jam pada head 30 m"
          ],
          [
            "2a",
            "Beroperasi pada  head atau flow dibawah kinerja",
            "2.5 Udara bocor masuk ke suction pipa atau seal poros pompa",
            "Random",
            {
              type: "number",
              text: [
                "Aliran pompa menurun", 
                "Tangki harian tidak menerima bahan bakar sesuai dengan kebutuhan",
                "Adanya kavitasi",
              ]
            },
            "2,2 Memompa bahan bakar dengan debit dibawah 18m3/Jam pada head 30 m"
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
            "1a",
            "Tidak ada aliran bahan bakar minyak",
            "Operasional tertunda selama pengisian bahan bakar. Diperlukan pergantian suction filter yang tersumbat",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Tidak ada aliran"],
            },
            {
              type: "dot",
              text: [
                "Pemeriksan dan pembersihan rutin",
              ],
            },
          ],
          [
            "1b",
            "Tidak ada aliran bahan bakar minyak",
            "Operasional tertunda selama pengisian bahan bakar. Diperlukan pergantian suction filter yang tersumbat",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: ["Motor tidak bergerak saat dihidupkan"],
            },
            {
              type: "dot",
              text: [
                "Inspeksi dan perawatan",
              ],
            },
          ],
          [
            "2a",
            "Beroperasi pada  head atau flow dibawah kinerja",
            "Operasional tertunda selama pengisian bahan bakar. Komponen internal harus diganti",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: ["Kebisingan dan getaran yang tidak normal", "Penurunan laju aliran dan tekanan"],
            },
            {
              type: "dot",
              text: [
                "Visual check dan pemeriksaan pelumasan",
                "Inspeksi dan perawatan",
              ],
            },
          ],
          [
            "2b",
            "Beroperasi pada  head atau flow dibawah kinerja",
            "Operasional tertunda selama pengisian bahan bakar. Diperlukan pembersihan atau pergantian suction filter yang tersumbat",
            "2",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Kebisingan dan getaran yang tidak normal", "Penurunan laju aliran dan tekanan"],
            },
            {
              type: "dot",
              text: [
                "Pemeriksan dan pembersihan rutin",
              ],
            },
          ],
          [
            "2c",
            "Beroperasi pada  head atau flow dibawah kinerja",
            "Operasional tertunda selama pengisian bahan bakar. Diperlukan perbaikan pipa hisab atau seal poros pompa",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: ["Adaya kebocoran", "Kebisingan dan getaran yang tidak normal"],
            },
            {
              type: "dot",
              text: [
                "Pemeriksaan rutin",
              ],
            },
          ],
        ]
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
            "1a",
            "Tidak ada aliran bahan bakar minyak",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Pemeriksaan  dan pembersihann saringan hisap"		
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "1b",
            "Tidak ada aliran bahan bakar minyak",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                "Inspeksi dan perawatan electic motor"		
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "2a",
            "Beroperasi pada  head atau flow dibawah kinerja",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                "Pemeriksaan visual apakah ada kebocoran, suara dan getaran tidak normal",
                "Pelumasan seal dan bearing serta periksa kekencangan baut",
                "Inspeksi dan perawatan pompa",
                "Pergantian komponen yang rusak",				
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "2b",
            "Beroperasi pada  head atau flow dibawah kinerja",
            "2",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Pemeriksaan visual pompa dan bersihkan saringan hisap",				
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "2c",
            "Beroperasi pada  head atau flow dibawah kinerja",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                "Pemeriksaan visual apakah ada kebocoran pipa suction",
                "Penanganan sementara pada pipa bocor",
                "Pergantian seal pompa",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
        ]
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
              text: [" Pemeriksaan dan pembersihann saringan hisap"]
            },
            "PM",
            ["2.1", "3.1"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "2 Minggu",
            "-",
            "Dilakukan oleh mekanik",
          ],
          [
            { 
              type: "dot", 
              text: ["Pemeriksaan visual apakah ada kebocoran, suara dan getaran tidak normal"]
            },
            "CM",
            ["2.3", "3.3"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "Harian",
            "-",
            "Segera dilakukan perbaikan, jika terjadi kerusakan",
          ],
          [
            { 
              type: "dot", 
              text: ["Pelumasan seal dan bearing serta periksa kekencangan baut"]
            },
            "PM",
            ["2.3", "3.3"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "6 bulan",
            "-",
            "Dilakukan oleh mekanik",
          ],
          [
            { 
              type: "dot", 
              text: ["Pemeriksaan visual pompa dan bersihkan saringan hisap"]
            },
            "CM",
            ["2.4", "3.4"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "2 Minggu",
            "-",
            "Dilakukan oleh mekanik",
          ],
          [
            { 
              type: "dot", 
              text: ["Pemeriksaan visual pompa dan bersihkan saringan hisap"]
            },
            "CM",
            ["2.2", "3.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "2 Minggu",
            "-",
            "Dilakukan oleh mekanik",
          ],
          [
            { 
              type: "dot", 
              text: ["Penanganan sementara pada pipa bocor"]
            },
            "OTC",
            ["2.5", "3.5"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "Jika terjadi kerusakan",
            "-",
            "Segera dilakukan perbaikan, jika terjadi kerusakan",
          ],
          [
            { 
              type: "dot", 
              text: ["Pergantian seal pompa"]
            },
            "OTC",
            ["2.5", "3.5"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "Jika terjadi kerusakan",
            "-",
            "Segera dilakukan perbaikan, jika terjadi kerusakan",
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
              text: ["Pergantian komponen yang rusak"]
            },
            "OTC",
            ["2.2", "3.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "Jika terjadi kerusakan",
            "-",
            "Segera dilakukan perbaikan, jika terjadi kerusakan",
          ],
        ]
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
              text: ["Pembersihan dan inspeksi pada tanki utama bahan bakar"]
            },
            "CM",
            "1.1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "Special Survey Docking",
            "Class",
            "Tanki perlu di kosongkan dan dibersikan, sebelum dilakukan inspeksi internal tanki",
          ],
          [
            { 
              type: "dot", 
              text: ["Uji tes ketebalan plat dengan Metode NDT ((Non-Destructive Test)"]
            },
            "FF",
            "1.1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "Setiap Docking",
            "Class",
            "Untuk memantau ketebalan plat tanki yang berhubungan langsung dengan air laut",
          ],
        ]
      },
    ]
  },
  {
    slug: "fo-transfer-pump-2",
    type: "FUEL_OIL_SYSTEM",
    specs: {
      functionalGroup: "Propulsion Function Group",
      system: "Diesel Engine",
      subsystem: "Fuel Oil System",
      equipmentID: "FO-TP-02",
      equipmentName: "FO Transfer Pump 02",
      drawing: "Sistem Pipa Bahan Bakar",
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
            "Berfungsi untuk memompa dan transfer bahan bakar dari storage tank ke tangki harian dengan debit tidak kurang dari 18 m3/h dengan head pompa 30 m.",
            "Primary",
            ["2,1", "2,2"],
            [
              "Tidak ada aliran bahan bakar minyak yang dipindahkan",
              "Memompa bahan bakar dengan debit dibawah 18m3/Jam pada head 30 m"
            ],
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
            "1a",
            "Tidak ada aliran bahan bakar minyak",
            "2.1 Suction saringan pompa tersumbat sepenuhnya",
            "Wear-out",
            {
              type: "number",
              text: [
                "Pompa tidak dapat memindahkan bahan bakar",
                "Tangki harian tidak menerima bahan bakar sesuai dengan kebutuhan",
              ]
            },
            "2,1 Tidak ada aliran bahan bakar minyak yang dipindahkan"
          ],
          [
            "1b",
            "Tidak ada aliran bahan bakar minyak",
            "2.2 Motor elektrik gagal bekerja",
            "Random",
            {
              type: "number",
              text: [
                "Pompa tidak dapat memindahkan bahan bakar",
                "Tangki harian tidak menerima bahan bakar sesuai dengan kebutuhan",
              ]
            },
            "2,1 Tidak ada aliran bahan bakar minyak yang dipindahkan"
          ],
          [
            "2a",
            "Beroperasi pada  head atau flow dibawah kinerja",
            "2.3 Keausan komponen internal atau mechanical fatigue.",
            "Wear-out",
            {
              type: "number",
              text: [
                "Kapasitas pompa berkurang",
                "Tangki harian tidak menerima bahan bakar  yang cukup sesuai dengan kebutuhan",
              ]
            },
            "2,2 Memompa bahan bakar dengan debit dibawah 18m3/Jam pada head 30 m"
          ],
          [
            "2b",
            "Beroperasi pada  head atau flow dibawah kinerja",
            "2.4 Suction saringan pompa tersumbat sebagian",
            "Wear-out",
            {
              type: "number",
              text: [
                "Kapasitas pompa berkurang",
                "Tangki harian tidak menerima bahan bakar  yang cukup sesuai dengan kebutuhan",
              ]
            },
            "2,2 Memompa bahan bakar dengan debit dibawah 18m3/Jam pada head 30 m"
          ],
          [
            "2a",
            "Beroperasi pada  head atau flow dibawah kinerja",
            "2.5 Udara bocor masuk ke suction pipa atau seal poros pompa",
            "Random",
            {
              type: "number",
              text: [
                "Aliran pompa menurun", 
                "Tangki harian tidak menerima bahan bakar sesuai dengan kebutuhan",
                "Adanya kavitasi",
              ]
            },
            "2,2 Memompa bahan bakar dengan debit dibawah 18m3/Jam pada head 30 m"
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
            "1a",
            "Tidak ada aliran bahan bakar minyak",
            "Operasional tertunda selama pengisian bahan bakar. Diperlukan pergantian suction filter yang tersumbat",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Tidak ada aliran"],
            },
            {
              type: "dot",
              text: [
                "Pemeriksan dan pembersihan rutin",
              ],
            },
          ],
          [
            "1b",
            "Tidak ada aliran bahan bakar minyak",
            "Operasional tertunda selama pengisian bahan bakar. Diperlukan pergantian suction filter yang tersumbat",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: ["Motor tidak bergerak saat dihidupkan"],
            },
            {
              type: "dot",
              text: [
                "Inspeksi dan perawatan",
              ],
            },
          ],
          [
            "2a",
            "Beroperasi pada  head atau flow dibawah kinerja",
            "Operasional tertunda selama pengisian bahan bakar. Komponen internal harus diganti",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: ["Kebisingan dan getaran yang tidak normal", "Penurunan laju aliran dan tekanan"],
            },
            {
              type: "dot",
              text: [
                "Visual check dan pemeriksaan pelumasan",
                "Inspeksi dan perawatan",
              ],
            },
          ],
          [
            "2b",
            "Beroperasi pada  head atau flow dibawah kinerja",
            "Operasional tertunda selama pengisian bahan bakar. Diperlukan pembersihan atau pergantian suction filter yang tersumbat",
            "2",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Kebisingan dan getaran yang tidak normal", "Penurunan laju aliran dan tekanan"],
            },
            {
              type: "dot",
              text: [
                "Pemeriksan dan pembersihan rutin",
              ],
            },
          ],
          [
            "2c",
            "Beroperasi pada  head atau flow dibawah kinerja",
            "Operasional tertunda selama pengisian bahan bakar. Diperlukan perbaikan pipa hisab atau seal poros pompa",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: ["Adaya kebocoran", "Kebisingan dan getaran yang tidak normal"],
            },
            {
              type: "dot",
              text: [
                "Pemeriksaan rutin",
              ],
            },
          ],
        ]
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
            "1a",
            "Tidak ada aliran bahan bakar minyak",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Pemeriksaan  dan pembersihann saringan hisap"		
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "1b",
            "Tidak ada aliran bahan bakar minyak",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                "Inspeksi dan perawatan electic motor"		
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "2a",
            "Beroperasi pada  head atau flow dibawah kinerja",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                "Pemeriksaan visual apakah ada kebocoran, suara dan getaran tidak normal",
                "Pelumasan seal dan bearing serta periksa kekencangan baut",
                "Inspeksi dan perawatan pompa",
                "Pergantian komponen yang rusak",				
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "2b",
            "Beroperasi pada  head atau flow dibawah kinerja",
            "2",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Pemeriksaan visual pompa dan bersihkan saringan hisap",				
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "2c",
            "Beroperasi pada  head atau flow dibawah kinerja",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                "Pemeriksaan visual apakah ada kebocoran pipa suction",
                "Penanganan sementara pada pipa bocor",
                "Pergantian seal pompa",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
        ]
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
              text: [" Pemeriksaan dan pembersihann saringan hisap"]
            },
            "PM",
            ["2.1", "3.1"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "2 Minggu",
            "-",
            "Dilakukan oleh mekanik",
          ],
          [
            { 
              type: "dot", 
              text: ["Pemeriksaan visual apakah ada kebocoran, suara dan getaran tidak normal"]
            },
            "CM",
            ["2.3", "3.3"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "Harian",
            "-",
            "Segera dilakukan perbaikan, jika terjadi kerusakan",
          ],
          [
            { 
              type: "dot", 
              text: ["Pelumasan seal dan bearing serta periksa kekencangan baut"]
            },
            "PM",
            ["2.3", "3.3"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "6 bulan",
            "-",
            "Dilakukan oleh mekanik",
          ],
          [
            { 
              type: "dot", 
              text: ["Pemeriksaan visual pompa dan bersihkan saringan hisap"]
            },
            "CM",
            ["2.4", "3.4"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "2 Minggu",
            "-",
            "Dilakukan oleh mekanik",
          ],
          [
            { 
              type: "dot", 
              text: ["Pemeriksaan visual pompa dan bersihkan saringan hisap"]
            },
            "CM",
            ["2.2", "3.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "2 Minggu",
            "-",
            "Dilakukan oleh mekanik",
          ],
          [
            { 
              type: "dot", 
              text: ["Penanganan sementara pada pipa bocor"]
            },
            "OTC",
            ["2.5", "3.5"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "Jika terjadi kerusakan",
            "-",
            "Segera dilakukan perbaikan, jika terjadi kerusakan",
          ],
          [
            { 
              type: "dot", 
              text: ["Pergantian seal pompa"]
            },
            "OTC",
            ["2.5", "3.5"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "Jika terjadi kerusakan",
            "-",
            "Segera dilakukan perbaikan, jika terjadi kerusakan",
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
              text: ["Pergantian komponen yang rusak"]
            },
            "OTC",
            ["2.2", "3.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "Jika terjadi kerusakan",
            "-",
            "Segera dilakukan perbaikan, jika terjadi kerusakan",
          ],
        ]
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
              text: ["Pembersihan dan inspeksi pada tanki utama bahan bakar"]
            },
            "CM",
            "1.1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "Special Survey Docking",
            "Class",
            "Tanki perlu di kosongkan dan dibersikan, sebelum dilakukan inspeksi internal tanki",
          ],
          [
            { 
              type: "dot", 
              text: ["Uji tes ketebalan plat dengan Metode NDT ((Non-Destructive Test)"]
            },
            "FF",
            "1.1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "Setiap Docking",
            "Class",
            "Untuk memantau ketebalan plat tanki yang berhubungan langsung dengan air laut",
          ],
        ]
      },
    ]
  },
  {
    slug: "air-handling-unit-1",
    type: "COOLING_SYSTEM",
    specs: {
      functionalGroup: "Propulsion Function Group",
      system: "Diesel Engine",
      subsystem: "Cooling System",
      equipmentID: "CO-AHU-01",
      equipmentName: "Air Handling Unit",
      drawing: "Cooling System",
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
            "serves as the central component responsible for the circulation, temperature regulation, and filtration of air throughout the vessel.",
            "Primary",
            ["1,1", "1,2"],
            [
              "Failed to compromised ventilation and cooling performance (Total Failure)",
              "inadequate ventilation and reduced cooling efficiency, within capacity less than 6500 CFM (Partial Failure)"
            ],
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
          "Part",
          "Failure Mode",
          "Causes",
          "Failure Charasteristic",
          "Local Effect",
          "Functional Failure",
        ],
        body: [
          [
            "1a",
            "rotor",
            "Overheats",
            [
              "1.1 Moisture ingress: Entry of moisture into the motor winding can compromise insulation integrity and cause breakdown.",
              "1.2 Voltage spikes: Sudden voltage surges can exceed the insulation's dielectric strength, leading to insulation breakdown."
            ],
            ["Random","Random"],
            {
              type: "number",
              text: [
                "Formation of hotspots",
                "Potential arcing",
              ]
            },
            "1.1 Failed to compromised ventilation and cooling performance"
          ],
          [
            "1b",
            "rotor",
            "Worn",
            [
              "2.1 Lack of lubrication: Inadequate lubrication of the motor bearings can lead to increased friction and heat generation, accelerating wear and potentially causing bearing failure.",
              "2.2  Contamination by foreign particles: Entry of dirt, dust, or other foreign particles into the bearing assembly can cause abrasion and scoring of bearing surfaces, leading to premature wear and eventual failure."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "inncreased friction and heat generation within the bearings  ",
                "Abrasion and scoring of bearing surfaces due to foreign particle ingress",
              ]
            },
            "1.1 Failed to compromised ventilation and cooling performance"
          ],
          [
            "1c",
            "rotor",
            "rotor",
            [
              "3.1 Exposure to moisture and corrosive elements: Moisture and corrosive elements can infiltrate the motor's electrical components, such as terminals and wiring, leading to degradation of insulation materials and increased conductivity between electrical paths.",
              "3.2 Build-up of conductive contaminants: Over time, dust, dirt, and other conductive contaminants can accumulate on electrical connections, creating a pathway for electricity to flow where it shouldn't, increasing resistance, and generating heat."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Increased risk of short circuits",
                "Accumulation of dust and debris on electrical connections",
              ]
            },
            "1.1 Failed to compromised ventilation and cooling performance"
          ],
          [
            "2a",
            "Coils",
            "Overheats",
            [
              "4.1  Overloading: Operating the coils beyond their rated capacity can lead to excessive heat generation and overheating.",
              "4.2  Poor ventilation: Inadequate airflow around the coils restricts heat dissipation, causing temperature buildup."
            ],
            ["Random","Wear-out"],
            {
              type: "number",
              text: [
                "Localized temperature rise",
                "Thermal expansion",
              ]
            },
            "1.2 inadequate ventilation and reduced cooling efficiency, within capacity less than 6500 CFM (Partial Failure)"
          ],
          [
            "2b",
            "Coils",
            "Corroded",
            [
              "5.1  Exposure to corrosive environments: Exposure of the coils to corrosive environments, such as saltwater or chemical fumes, can lead to Corroded of coil surfaces and degradation of coil materials.",
              "5.2  Inadequate protective coatings or sealing: Lack of proper protective coatings or sealing on coil surfaces leaves them vulnerable to Corroded from environmental exposure, accelerating material degradation."
            ],
            ["Wear-out","Random"],
            {
              type: "number",
              text: [
                "Formation of rust or Corroded pits on coil surfaces",
                "Thinning or weakening of coil material due to Corroded",
              ]
            },
            "1.1 Failed to compromised ventilation and cooling performance"
          ],
          [
            "2c",
            "Coils",
            "Leaking",
            [
              "6.2  Blockage of airflow due to dirt accumulation: Accumulation of dirt, dust, and other debris on the coils can obstruct airflow, reducing heat transfer efficiency and causing the coil surface temperatures to drop, leading to freezing.",
              "6.2  Blockage of airflow due to dirt accumulation: Accumulation of dirt, dust, and other debris on the coils can obstruct airflow, reducing heat transfer efficiency and causing the coil surface temperatures to drop, leading to freezing."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Reduced heat absorption capacity of coils due to low refrigerant levels",
                "Hindered airflow and decreased heat transfer efficiency caused by dirt accumulation",
              ]
            },
            "1.2 inadequate ventilation and reduced cooling efficiency, within capacity less than 6500 CFM (Partial Failure)"
          ],
          [
            "3a",
            "Air Filter",
            "Clogging",
            [
              "7.1 Accumulation of airborne particles and debris: Continuous operation of the air filter in dusty or debris-laden environments leads to the accumulation of airborne particles and debris on the filter media, gradually reducing airflow.",
              "7.2   Inadequate filter maintenance or replacement intervals: Failure to perform regular filter maintenance or replace clogged filters according to recommended intervals allows debris accumulation to reach levels that impede airflow and filtration efficiency."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Gradual reduction in airflow through the filter media",
                " Increased pressure drop across the filter",
              ]
            },
            "1.1 Failed to compromised ventilation and cooling performance"
          ],
          [
            "3b",
            "Air Filter",
            "Cracked",
            [
              "8.1  High-pressure differential: Excessive pressure differential across the filter due to clogging or restricted airflow can lead to structural failure.",
              "8.2  Mechanical damage: Impact or mishandling during installation or maintenance can cause structural damage to the filter."
            ],
            ["Wear-out","Random"],
            {
              type: "number",
              text: [
                "Deformation or collapse",
                "Tearing or ripping",
              ]
            },
            "1.2 inadequate ventilation and reduced cooling efficiency, within capacity less than 6500 CFM (Partial Failure)  "
          ],
          [
            "3c",
            "Air Filter",
            "Corroded",
            [
              "9.1   Exposure to corrosive chemicals: Exposure to corrosive chemicals in the air or surrounding environment can lead to the deterioration of filter media, resulting in tears and holes that compromise filtration efficiency.",
              "9.2 Growth of mold and bacteria: Mold and bacteria growth on the air filter can block filter media and impede airflow, reducing filtration efficiency and promoting the spread of airborne contaminants.Growth of mold and bacteria"
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Deterioration of filter media, leading to increased bypass of contaminants",
                "Blockage of filter media and potential contamination of the air supply",
              ]
            },
            "1.1 Failed to compromised ventilation and cooling performance"
          ],
          [
            "4a",
            "Gear",
            "Worn",
            [
              "10.1  Inadequate lubricant quantity or quality: Insufficient lubricant quantity or use of low-quality lubricants in the gear assembly can result in inadequate lubrication film thickness, increasing friction and wear between gear surfaces.",
              "10.2  Contamination of lubricant by foreign particles: Entry of dirt, dust, or other foreign particles into the gear lubricant can cause abrasive wear on gear surfaces and breakdown of lubricant film, leading to increased friction and heat generation."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Increased friction and wear between gear surfaces",
                "Formation of abrasive particles or debris in the gear assembly",
              ]
            },
            "1.2 inadequate ventilation and reduced cooling efficiency, within capacity less than 6500 CFM (Partial Failure)"
          ],
          [
            "4b",
            "Gear",
            "Misalignment",
            [
              "11.1 Inadequate Lubrication: Insufficient lubrication between gear teeth leads to increased friction and accelerated wear.",
              "11.2  Contamination: Entry of abrasive particles or debris into the gear meshing area causes abrasive wear on gear teeth."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Surface Pitting and Scoring",
                "Material Removal and Deformation",
              ]
            },
            "Material Removal and Deformation"
          ],
          [
            "4c",
            "Gear",
            "Leaking",
            [
              "12.1 Lack of lubrication: Inadequate lubrication of gear components can lead to increased friction between gear teeth, accelerating wear and potentially causing mechanical failure.",
              "12.2  Corroded due to chemical exposure: Exposure to corrosive chemicals can deteriorate gear material, weakening the gear structure and increasing the risk of gear failure under load conditions."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Increased friction between gear teeth",
                "Abrasion and Corroded of gear surfaces due to the presence of contaminant",
              ]
            },
            "1.2 inadequate ventilation and reduced cooling efficiency, within capacity less than 6500 CFM (Partial Failure)"
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
          "Part",
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
            "1a",
            "rotor",
            "Overheats",
            "Short circuits: Insulation breakdown can result in short circuits within the motor winding, causing sudden motor failure and system downtime.",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Monitoring of motor temperature and abnormal noises.","Visual inspection for signs of Corroded and moisture ingress."],
            },
            "Regular cleaning and lubrication of rotor components..Implementing moisture barriers and Corroded-resistant coatings. Scheduled replacement of lubricants and bearings."
          ],
          [
            "1b",
            "rotor",
            "Worn",
            "Bearing seizure and motor shaft immobilization: Severe wear or damage to the bearings can result in bearing seizure, causing the motor shaft to become immobilized and leading to sudden motor failure.",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Monitoring of motor temperature and abnormal noises.",
                "Visual inspection for signs of Corroded and moisture ingress."
              ],
            },
            "Regular cleaning and lubrication of motor bearings. Implementing moisture barriers and Corroded-resistant coatings. Scheduled replacement of lubricants and bearings."
          ],
          [
            "1c",
            "rotor",
            "Leaking",
            "Sudden motor failure, potentially leading to system downtime and safety hazards: Electrical failure within the motor can result in the sudden cessation of motor operation, leading to system downtime and potential safety hazards, especially if the motor is critical for essential ship functions.",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: [
                "Regular inspection for signs of moisture ingress and Corroded on electrical components",
                "Monitoring of electrical connections for signs of overheating and voltage fluctuations."
              ],
            },
            "Implementing moisture barriers and Corroded-resistant coatings. Regular cleaning and inspection of electrical connections. Scheduled replacement of motor windings and insulation."
          ],
          [
            "2a",
            "Coils",
            "Overheats",
            "Coil damage: Prolonged overheating can cause damage to coil insulation and materials, compromising coil integrity and performance.",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Visual inspection of coil surfaces for dirt accumulation.",
                "Visual inspection for signs of microbial growth and musty odors."
              ],
            },
            "Regular cleaning and maintenance of coil surfaces. Implementing UV-C or other disinfection methods. Implementing protective coatings and Corroded-resistant materials."
          ],
          [
            "2b",
            "Coils",
            "Corroded",
            "Reduced coil efficiency and heat transfer capacity: Corroded-induced degradation of coil surfaces reduces their efficiency in transferring heat, leading to decreased system performance and potentially causing overheating.",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Visual inspection for signs of Corroded and structural weakness.",
                "Regular inspection for signs of Corroded and pitting on coil surfaces."
              ],
            },
            "'Implementing protective coatings and Corroded-resistant materials.Implementing Corroded-resistant coatings and materials for coils. Implementing UV-C or other disinfection methods."
          ],
          [
            "2c",
            "Coils",
            "Leaking",
            " Low refrigerant level due to leakage: Refrigerant leakage from the coils can result in a decreased heat absorption capacity, causing the temperature of the coils to drop below freezing point and leading to ice formation.",
            "1",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Monitoring of refrigerant levels and pressure differentials across the coil.",
                "Visual inspection for signs of dirt accumulation and temperature differentials across the coil."
              ],
            },
            "Regular inspection and maintenance to detect and repair refrigerant leaks.Regular cleaning and maintenance of coil surfaces and surrounding areas. Implementing UV-C or other disinfection methods."
          ],
          [
            "3a",
            "Air Filter",
            "Clogging",
            "Decreased indoor air quality or cooling system efficiency: Reduced airflow and filtration efficiency resulting from clogged filters lead to decreased indoor air quality or cooling system performance, potentially causing discomfort or health issues for occupants.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                " Monitoring of pressure differentials across the filter",
                "Visual inspection for signs of microbial growth and musty odors. 3. Regular inspection for signs of Corroded and structural weakness.."
              ],
            },
            "Regular cleaning or replacement of air filters. Implementing UV-C or other disinfection methods.Implementing Corroded-resistant filter materials and housings."
          ],
          [
            "3b",
            "Air Filter",
            "Cracked",
            "Loss of filtration efficiency: Structural failure compromises the integrity of the filter, reducing its ability to capture airborne contaminants effectively.",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Monitoring of pressure differentials across the filter",
                "Visual inspection for signs of microbial growth and musty odors.."
              ],
            },
            "Regular cleaning or replacement of air filters.Implementing UV-C or other disinfection methods.Implementing Corroded-resistant filter materials and housings."
          ],
          [
            "3c",
            "Air Filter",
            "Corroded",
            "Increased bypass of contaminants and reduced filtration efficiency: Damage to the air filter media allows contaminants to pass through the filter, reducing its ability to capture airborne particles and potentially compromising indoor air quality.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Regular inspection for signs of physical damage and structural weakness.",
                "Visual inspection for signs of microbial growth and musty odors."
              ],
            },
            "Implementing Corroded-resistant filter materials and housings.Implementing UV-C or other disinfection methods. Implementing Corroded-resistant filter materials and housings."
          ],
          [
            "4a",
            "Gear",
            "Worn",
            "Progressive wear and degradation of gear teeth: Continued friction and wear between gear surfaces result in progressive damage and degradation of gear teeth, leading to reduced gear efficiency and potential gear failure.",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Monitoring of gear temperature and vibration levels.",
                "Visual inspection for signs of contamination and wear on gear surfaces."
              ],
            },
            "Scheduled lubrication and inspection of gear components. Implementing proper sealing and contamination prevention measures.Implementing Corroded-resistant coatings and materials for gears."
          ],
          [
            "4b",
            "Gear",
            "Misalignment",
            "Reduced Gear Efficiency: Tooth wear decreases gear efficiency and transmission accuracy, resulting in reduced system performance.",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Monitoring of gear temperature and vibration levels.",
                "Visual inspection for signs of contamination and wear on gear surfaces."
              ],
            },
            "Scheduled lubrication and inspection of gear components.Implementing proper sealing and contamination prevention measures.Implementing Corroded-resistant coatings and materials for gears."
          ],
          [
            "4c",
            "Gear",
            "Leaking",
            "Gradual loss of gear efficiency and potential mechanical failure: Increased wear and deterioration of gear components lead to a gradual loss of gear efficiency, potentially resulting in gear failure and system downtime.",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: [
                "Monitoring of gear temperature and vibration levels.",
                "Visual inspection for signs of contamination and wear on gear surfaces."
              ],
            },
            "Regular inspection- Regular Cleaning: Implement a routine maintenance schedule to flush or clean the valve to remove accumulated debris, sediment, or scale Scheduled lubrication and inspection of gear components. Implementing proper sealing and contamination prevention measures. Implementing Corroded-resistant coatings and materials for gears."
          ],
        ]
      },
      {
        title: "Maintenance Task Selection",
        backgroundColor: "#f5eafa",
        borderColor: "#912BBC",
        headRow: 2,
        head: [
          "No",
          "Part",
          "Failure Mode",
          ["Risk Characterization", ["CoF", "Rec PoF", "Current Risk"]],
          ["Task Selection", ["Proposed Action (s)", "Proj PoF", "Proj Risk"]],
        ],
        body: [
          [
            "1a",
            "rotor",
            "Overheats",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Implement routine cleaning and lubrication schedule for rotor components.",
                "Apply moisture barriers and Corroded-resistant coatings.",
                "Schedule regular replacement of lubricants and bearings."		
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "1b",
            "rotor",
            "Worn",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Implement routine cleaning and lubrication schedule for motor bearings.",
                "Apply moisture barriers and Corroded-resistant coatings.",
                "Schedule regular replacement of lubricants and bearings."		
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "1c",
            "rotor",
            "Leaking",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "dot",
              text: [
                "Apply moisture barriers and Corroded-resistant coatings.",
                "Implement routine cleaning and inspection schedule for electrical connections.",
                "Schedule regular replacement of motor windings and insulation.",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "2a",
            "Coils",
            "Overheats",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Implement routine cleaning and maintenance schedule for coil surfaces.",
                "Apply UV-C or other disinfection methods.",
                "Use protective coatings and Corroded-resistant materials.",				
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "2b",
            "Coils",
            "Corroded",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Apply protective coatings and use Corroded-resistant materials.",
                "Apply Corroded-resistant coatings specifically for coils.",
                "Implement UV-C or other disinfection methods.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "2c",
            "Coils",
            "Leaking",
            "1",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                "Implement regular inspection and maintenance to detect and repair refrigerant leaks.",
                "Implement routine cleaning and maintenance schedule for coil surfaces and surrounding areas.",
                "Apply UV-C or other disinfection methods.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "3a",
            "Air Filter",
            "Clogging",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                "Implement routine cleaning or replacement schedule for air filters.",
                "Apply UV-C or other disinfection methods.",
                "Use Corroded-resistant filter materials and housings.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "3b",
            "Air Filter",
            "Cracked",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Implement routine cleaning or replacement schedule for air filters.",
                "Apply UV-C or other disinfection methods.",
                "Use Corroded-resistant filter materials and housings.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "3c",
            "Air Filter",
            "Corroded",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                "Use Corroded-resistant filter materials and housings.",
                "Apply UV-C or other disinfection methods.",
                "Use Corroded-resistant filter materials and housings (duplicate action).",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "4a",
            "Gear",
            "Worn",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Implement routine lubrication and inspection schedule for gear components.",
                "Apply proper sealing and contamination prevention measures.",
                "Use Corroded-resistant coatings and materials for gears.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "4b",
            "Gear",
            "Misalignment",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Implement routine lubrication and inspection schedule for gear components.",
                "Apply proper sealing and contamination prevention measures.",
                "Use Corroded-resistant coatings and materials for gears.",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "4c",
            "Gear",
            "Leaking",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "dot",
              text: [
                "Implement routine maintenance schedule for valve cleaning to remove debris, sediment, or scale.",
                "Implement routine lubrication and inspection schedule for gear components.",
                "Apply proper sealing and contamination prevention measures.",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
        ]
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
              text: ["immediately clean and re-lubricate the rotor, apply a moisture barrier, and replace any corroded or damaged bearings."]
            },
            "CM/PM",
            ["1.1", "1.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "500 hours and/or Performed on: Damage or performance degradation detection test When corrosion or bearing damage occurs",
            "-",
            "It ensures the rotor operates efficiently and prevents further damage by replacing corroded or damaged bearings promptly.",
          ],
          [
            { 
              type: "dot", 
              text: ["promptly clean and re-lubricate the bearings, apply a corrosion-resistant coating, and replace the damaged bearings."]
            },
            "CM/PM",
            ["2.1", "2.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "250 hours and/or Performed on: Bearing inspection or performance issues When bearing corrosion or damage is detected",
            "-",
            "Applying a corrosion-resistant coating and replacing damaged bearings are critical steps for long-term durability and performance.",
          ],
          [
            { 
              type: "dot", 
              text: ["clean and lubricate rotor components, repair moisture barriers, apply corrosion-resistant coatings, and replace failed lubricants and bearings"]
            },
            "CM/PM",
            ["3.1", "3.2"],
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "1000 hours and/or Performed on: Implementing moisture barriers and corrosion-resistant coatings:",
            "-",
            "It ensures the rotor operate smoothly and have a longer service life.",
          ],
          [
            { 
              type: "dot", 
              text: ["clean and disinfect the coils using UV-C methods, apply a protective coating, and replace any damaged coil sections with corrosion-resistant materials."]
            },
            "CM/PM",
            ["4.1", "4.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "1000 hours and/or Performed on: Coil condition assessment When coil contamination or damage occurs",
            "-",
            "The use of UV-C disinfection and corrosion-resistant materials helps ensure both hygiene and durability.",
          ],
          [
            { 
              type: "dot", 
              text: ["apply protective coatings to the affected coils, replace damaged coil sections with corrosion-resistant materials, and disinfect the area using UV-C methods."]
            },
            "OTC",
            ["5.1", "5.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "500 hours and/or Performed on: Coil damage or contamination inspection When damage or corrosion is detected",
            "-",
            "Applying protective coatings and replacing damaged sections with corrosion-resistant materials help prevent future issues, while UV-C disinfection ensures the area remains hygienic.",
          ],
          [
            { 
              type: "dot", 
              text: ["immediately repair the leak, clean and disinfect the coil surfaces and surrounding areas using UV-C methods, and ensure proper sealing of the repaired area."]
            },
            "CM/PM",
            ["6.1", "6.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "200 hours and/or Performed on: Filter damage or performance issues When a filter is found to be damaged or contaminated",
            "-",
            "Immediate attention to the leak and thorough disinfection with UV-C methods are crucial for preventing further issues and maintaining system integrity.",
          ],
          [
            { 
              type: "dot", 
              text: ["replace the filter with a corrosion-resistant one, clean the filter housing, and disinfect the area using UV-C methods to prevent further contamination."]
            },
            "CM/PM",
            ["7.1", "7.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "200 hours and/or Performed on: Filter inspection or clogging When filter damage or contamination occurs",
            "-",
            "Using a corrosion-resistant filter and disinfecting with UV-C methods ensures that the system remains efficient and free from contamination.",
          ],
          [
            { 
              type: "dot", 
              text: ["immediately replace it with a corrosion-resistant alternative, clean the housing, and use UV-C disinfection to ensure cleanliness."]
            },
            "CM/PM",
            ["8.1", "8.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "200 hours and/or Performed on: Filter damage or performance issues When a filter is found to be damaged or contaminated",
            "-",
            "Using corrosion-resistant materials and UV-C disinfection ensures that the replacement part functions optimally and prevents future contamination.",
          ],
          [
            { 
              type: "dot", 
              text: ["replace them with corrosion-resistant ones, clean the housing, and disinfect using UV-C methods to maintain hygiene."]
            },
            "OTC",
            ["9.1", "9.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "200 hours and/or Performed on: Filter inspection or contamination check When filter corrosion or damage is detected",
            "-",
            "Regular cleaning and UV-C disinfection help maintain hygiene and system efficiency.",
          ],
          [
            { 
              type: "dot", 
              text: ["lubricate and inspect the gears, apply proper seals, and replace damaged gears with corrosion-resistant alternatives."]
            },
            "CM/PM",
            ["10.1", "10.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "1000 hours and/or Performed on: Gear inspection or performance review When gear damage or wear is detected",
            "-",
            "It ensures the gears operate smoothly and have a longer service life.",
          ],
          [
            { 
              type: "dot", 
              text: ["re-lubricate the gear components, ensure proper sealing to prevent contamination, and replace damaged gears with corrosion-resistant materials."]
            },
            "CM/PM",
            ["11.1", "11.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "500 hours and/or Performed on: Gear component inspection or lubrication check When gears are found to be damaged or contaminated",
            "-",
            "Proper sealing and corrosion-resistant materials are crucial for maintaining gear performance and longevity.",
          ],
          [
            { 
              type: "dot", 
              text: ["flush or clean the valve to remove debris, re-lubricate the gear components, apply proper sealing, and replace any damaged parts with corrosion-resistant materials."]
            },
            "CM/PM",
            ["12.1", "12.2"],
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "1000 hours and/or Performed on: Valve inspection or maintenance schedule When valve debris or gear damage is detected",
            "-",
            "It ensures both the valve and gear components are well-maintained and protected against future issues.",
          ],
        ],
      },
    ]
  },
  {
    slug: "air-handling-unit-2",
    type: "COOLING_SYSTEM",
    specs: {
      functionalGroup: "Propulsion Function Group",
      system: "Diesel Engine",
      subsystem: "Cooling System",
      equipmentID: "CO-AHU-02",
      equipmentName: "Air Handling Unit",
      drawing: "Cooling System",
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
            "serves as the central component responsible for the circulation, temperature regulation, and filtration of air throughout the vessel.",
            "Primary",
            ["1,1", "1,2"],
            [
              "Failed to compromised ventilation and cooling performance (Total Failure)",
              "inadequate ventilation and reduced cooling efficiency, within capacity less than 6500 CFM (Partial Failure)"
            ],
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
          "Part",
          "Failure Mode",
          "Causes",
          "Failure Charasteristic",
          "Local Effect",
          "Functional Failure",
        ],
        body: [
          [
            "1a",
            "rotor",
            "Overheats",
            [
              "1.1 Moisture ingress: Entry of moisture into the motor winding can compromise insulation integrity and cause breakdown.",
              "1.2 Voltage spikes: Sudden voltage surges can exceed the insulation's dielectric strength, leading to insulation breakdown."
            ],
            ["Random","Random"],
            {
              type: "number",
              text: [
                "Formation of hotspots",
                "Potential arcing",
              ]
            },
            "1.1 Failed to compromised ventilation and cooling performance"
          ],
          [
            "1b",
            "rotor",
            "Worn",
            [
              "2.1 Lack of lubrication: Inadequate lubrication of the motor bearings can lead to increased friction and heat generation, accelerating wear and potentially causing bearing failure.",
              "2.2  Contamination by foreign particles: Entry of dirt, dust, or other foreign particles into the bearing assembly can cause abrasion and scoring of bearing surfaces, leading to premature wear and eventual failure."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "inncreased friction and heat generation within the bearings  ",
                "Abrasion and scoring of bearing surfaces due to foreign particle ingress",
              ]
            },
            "1.1 Failed to compromised ventilation and cooling performance"
          ],
          [
            "1c",
            "rotor",
            "Leaking",
            [
              "3.1 Exposure to moisture and corrosive elements: Moisture and corrosive elements can infiltrate the motor's electrical components, such as terminals and wiring, leading to degradation of insulation materials and increased conductivity between electrical paths.",
              "3.2 Build-up of conductive contaminants: Over time, dust, dirt, and other conductive contaminants can accumulate on electrical connections, creating a pathway for electricity to flow where it shouldn't, increasing resistance, and generating heat."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Increased risk of short circuits",
                "Accumulation of dust and debris on electrical connections",
              ]
            },
            "1.1 Failed to compromised ventilation and cooling performance"
          ],
          [
            "2a",
            "Coils",
            "Overheats",
            [
              "4.1  Overloading: Operating the coils beyond their rated capacity can lead to excessive heat generation and overheating.",
              "4.2  Poor ventilation: Inadequate airflow around the coils restricts heat dissipation, causing temperature buildup."
            ],
            ["Random","Wear-out"],
            {
              type: "number",
              text: [
                "Localized temperature rise",
                "Thermal expansion",
              ]
            },
            "1.2 inadequate ventilation and reduced cooling efficiency, within capacity less than 6500 CFM (Partial Failure)"
          ],
          [
            "2b",
            "Coils",
            "Corroded",
            [
              "5.1  Exposure to corrosive environments: Exposure of the coils to corrosive environments, such as saltwater or chemical fumes, can lead to Corroded of coil surfaces and degradation of coil materials.",
              "5.2  Inadequate protective coatings or sealing: Lack of proper protective coatings or sealing on coil surfaces leaves them vulnerable to Corroded from environmental exposure, accelerating material degradation."
            ],
            ["Wear-out","Random"],
            {
              type: "number",
              text: [
                "Formation of rust or Corroded pits on coil surfaces",
                "Thinning or weakening of coil material due to Corroded",
              ]
            },
            "1.1 Failed to compromised ventilation and cooling performance"
          ],
          [
            "2c",
            "Coils",
            "Leaking",
            [
              "6.2  Blockage of airflow due to dirt accumulation: Accumulation of dirt, dust, and other debris on the coils can obstruct airflow, reducing heat transfer efficiency and causing the coil surface temperatures to drop, leading to freezing.",
              "6.2  Blockage of airflow due to dirt accumulation: Accumulation of dirt, dust, and other debris on the coils can obstruct airflow, reducing heat transfer efficiency and causing the coil surface temperatures to drop, leading to freezing."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Reduced heat absorption capacity of coils due to low refrigerant levels",
                "Hindered airflow and decreased heat transfer efficiency caused by dirt accumulation",
              ]
            },
            "1.2 inadequate ventilation and reduced cooling efficiency, within capacity less than 6500 CFM (Partial Failure)"
          ],
          [
            "3a",
            "Air Filter",
            "Clogging",
            [
              "7.1 Accumulation of airborne particles and debris: Continuous operation of the air filter in dusty or debris-laden environments leads to the accumulation of airborne particles and debris on the filter media, gradually reducing airflow.",
              "7.2   Inadequate filter maintenance or replacement intervals: Failure to perform regular filter maintenance or replace clogged filters according to recommended intervals allows debris accumulation to reach levels that impede airflow and filtration efficiency."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Gradual reduction in airflow through the filter media",
                " Increased pressure drop across the filter",
              ]
            },
            "1.1 Failed to compromised ventilation and cooling performance"
          ],
          [
            "3b",
            "Air Filter",
            "Cracked",
            [
              "8.1  High-pressure differential: Excessive pressure differential across the filter due to clogging or restricted airflow can lead to structural failure.",
              "8.2  Mechanical damage: Impact or mishandling during installation or maintenance can cause structural damage to the filter."
            ],
            ["Wear-out","Random"],
            {
              type: "number",
              text: [
                "Deformation or collapse",
                "Tearing or ripping",
              ]
            },
            "1.2 inadequate ventilation and reduced cooling efficiency, within capacity less than 6500 CFM (Partial Failure)  "
          ],
          [
            "3c",
            "Air Filter",
            "Corroded",
            [
              "9.1   Exposure to corrosive chemicals: Exposure to corrosive chemicals in the air or surrounding environment can lead to the deterioration of filter media, resulting in tears and holes that compromise filtration efficiency.",
              "9.2 Growth of mold and bacteria: Mold and bacteria growth on the air filter can block filter media and impede airflow, reducing filtration efficiency and promoting the spread of airborne contaminants.Growth of mold and bacteria"
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Deterioration of filter media, leading to increased bypass of contaminants",
                "Blockage of filter media and potential contamination of the air supply",
              ]
            },
            "1.1 Failed to compromised ventilation and cooling performance"
          ],
          [
            "4a",
            "Gear",
            "Worn",
            [
              "10.1  Inadequate lubricant quantity or quality: Insufficient lubricant quantity or use of low-quality lubricants in the gear assembly can result in inadequate lubrication film thickness, increasing friction and wear between gear surfaces.",
              "10.2  Contamination of lubricant by foreign particles: Entry of dirt, dust, or other foreign particles into the gear lubricant can cause abrasive wear on gear surfaces and breakdown of lubricant film, leading to increased friction and heat generation."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Increased friction and wear between gear surfaces",
                "Formation of abrasive particles or debris in the gear assembly",
              ]
            },
            "1.2 inadequate ventilation and reduced cooling efficiency, within capacity less than 6500 CFM (Partial Failure)"
          ],
          [
            "4b",
            "Gear",
            "Misalignment",
            [
              "11.1 Inadequate Lubrication: Insufficient lubrication between gear teeth leads to increased friction and accelerated wear.",
              "11.2  Contamination: Entry of abrasive particles or debris into the gear meshing area causes abrasive wear on gear teeth."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Surface Pitting and Scoring",
                "Material Removal and Deformation",
              ]
            },
            "Material Removal and Deformation"
          ],
          [
            "4c",
            "Gear",
            "Leaking",
            [
              "12.1 Lack of lubrication: Inadequate lubrication of gear components can lead to increased friction between gear teeth, accelerating wear and potentially causing mechanical failure.",
              "12.2  Corroded due to chemical exposure: Exposure to corrosive chemicals can deteriorate gear material, weakening the gear structure and increasing the risk of gear failure under load conditions."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Increased friction between gear teeth",
                "Abrasion and Corroded of gear surfaces due to the presence of contaminant",
              ]
            },
            "1.2 inadequate ventilation and reduced cooling efficiency, within capacity less than 6500 CFM (Partial Failure)"
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
          "Part",
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
            "1a",
            "rotor",
            "Overheats",
            "Short circuits: Insulation breakdown can result in short circuits within the motor winding, causing sudden motor failure and system downtime.",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Monitoring of motor temperature and abnormal noises.","Visual inspection for signs of Corroded and moisture ingress."],
            },
            "Regular cleaning and lubrication of rotor components..Implementing moisture barriers and Corroded-resistant coatings. Scheduled replacement of lubricants and bearings."
          ],
          [
            "1b",
            "rotor",
            "Worn",
            "Bearing seizure and motor shaft immobilization: Severe wear or damage to the bearings can result in bearing seizure, causing the motor shaft to become immobilized and leading to sudden motor failure.",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Monitoring of motor temperature and abnormal noises.",
                "Visual inspection for signs of Corroded and moisture ingress."
              ],
            },
            "Regular cleaning and lubrication of motor bearings. Implementing moisture barriers and Corroded-resistant coatings. Scheduled replacement of lubricants and bearings."
          ],
          [
            "1c",
            "rotor",
            "Leaking",
            "Sudden motor failure, potentially leading to system downtime and safety hazards: Electrical failure within the motor can result in the sudden cessation of motor operation, leading to system downtime and potential safety hazards, especially if the motor is critical for essential ship functions.",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: [
                "Regular inspection for signs of moisture ingress and Corroded on electrical components",
                "Monitoring of electrical connections for signs of overheating and voltage fluctuations."
              ],
            },
            "Implementing moisture barriers and Corroded-resistant coatings. Regular cleaning and inspection of electrical connections. Scheduled replacement of motor windings and insulation."
          ],
          [
            "2a",
            "Coils",
            "Overheats",
            "Coil damage: Prolonged overheating can cause damage to coil insulation and materials, compromising coil integrity and performance.",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Visual inspection of coil surfaces for dirt accumulation.",
                "Visual inspection for signs of microbial growth and musty odors."
              ],
            },
            "Regular cleaning and maintenance of coil surfaces. Implementing UV-C or other disinfection methods. Implementing protective coatings and Corroded-resistant materials."
          ],
          [
            "2b",
            "Coils",
            "Corroded",
            "Reduced coil efficiency and heat transfer capacity: Corroded-induced degradation of coil surfaces reduces their efficiency in transferring heat, leading to decreased system performance and potentially causing overheating.",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Visual inspection for signs of Corroded and structural weakness.",
                "Regular inspection for signs of Corroded and pitting on coil surfaces."
              ],
            },
            "'Implementing protective coatings and Corroded-resistant materials.Implementing Corroded-resistant coatings and materials for coils. Implementing UV-C or other disinfection methods."
          ],
          [
            "2c",
            "Coils",
            "Leaking",
            " Low refrigerant level due to leakage: Refrigerant leakage from the coils can result in a decreased heat absorption capacity, causing the temperature of the coils to drop below freezing point and leading to ice formation.",
            "1",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Monitoring of refrigerant levels and pressure differentials across the coil.",
                "Visual inspection for signs of dirt accumulation and temperature differentials across the coil."
              ],
            },
            "Regular inspection and maintenance to detect and repair refrigerant leaks.Regular cleaning and maintenance of coil surfaces and surrounding areas. Implementing UV-C or other disinfection methods."
          ],
          [
            "3a",
            "Air Filter",
            "Clogging",
            "Decreased indoor air quality or cooling system efficiency: Reduced airflow and filtration efficiency resulting from clogged filters lead to decreased indoor air quality or cooling system performance, potentially causing discomfort or health issues for occupants.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                " Monitoring of pressure differentials across the filter",
                "Visual inspection for signs of microbial growth and musty odors. 3. Regular inspection for signs of Corroded and structural weakness.."
              ],
            },
            "Regular cleaning or replacement of air filters. Implementing UV-C or other disinfection methods.Implementing Corroded-resistant filter materials and housings."
          ],
          [
            "3b",
            "Air Filter",
            "Cracked",
            "Loss of filtration efficiency: Structural failure compromises the integrity of the filter, reducing its ability to capture airborne contaminants effectively.",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Monitoring of pressure differentials across the filter",
                "Visual inspection for signs of microbial growth and musty odors.."
              ],
            },
            "Regular cleaning or replacement of air filters.Implementing UV-C or other disinfection methods.Implementing Corroded-resistant filter materials and housings."
          ],
          [
            "3c",
            "Air Filter",
            "Corroded",
            "Increased bypass of contaminants and reduced filtration efficiency: Damage to the air filter media allows contaminants to pass through the filter, reducing its ability to capture airborne particles and potentially compromising indoor air quality.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Regular inspection for signs of physical damage and structural weakness.",
                "Visual inspection for signs of microbial growth and musty odors."
              ],
            },
            "Implementing Corroded-resistant filter materials and housings.Implementing UV-C or other disinfection methods. Implementing Corroded-resistant filter materials and housings."
          ],
          [
            "4a",
            "Gear",
            "Worn",
            "Progressive wear and degradation of gear teeth: Continued friction and wear between gear surfaces result in progressive damage and degradation of gear teeth, leading to reduced gear efficiency and potential gear failure.",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Monitoring of gear temperature and vibration levels.",
                "Visual inspection for signs of contamination and wear on gear surfaces."
              ],
            },
            "Scheduled lubrication and inspection of gear components. Implementing proper sealing and contamination prevention measures.Implementing Corroded-resistant coatings and materials for gears."
          ],
          [
            "4b",
            "Gear",
            "Misalignment",
            "Reduced Gear Efficiency: Tooth wear decreases gear efficiency and transmission accuracy, resulting in reduced system performance.",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Monitoring of gear temperature and vibration levels.",
                "Visual inspection for signs of contamination and wear on gear surfaces."
              ],
            },
            "Scheduled lubrication and inspection of gear components.Implementing proper sealing and contamination prevention measures.Implementing Corroded-resistant coatings and materials for gears."
          ],
          [
            "4c",
            "Gear",
            "Leaking",
            "Gradual loss of gear efficiency and potential mechanical failure: Increased wear and deterioration of gear components lead to a gradual loss of gear efficiency, potentially resulting in gear failure and system downtime.",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: [
                "Monitoring of gear temperature and vibration levels.",
                "Visual inspection for signs of contamination and wear on gear surfaces."
              ],
            },
            "Regular inspection- Regular Cleaning: Implement a routine maintenance schedule to flush or clean the valve to remove accumulated debris, sediment, or scale Scheduled lubrication and inspection of gear components. Implementing proper sealing and contamination prevention measures. Implementing Corroded-resistant coatings and materials for gears."
          ],
        ]
      },
      {
        title: "Maintenance Task Selection",
        backgroundColor: "#f5eafa",
        borderColor: "#912BBC",
        headRow: 2,
        head: [
          "No",
          "Part",
          "Failure Mode",
          ["Risk Characterization", ["CoF", "Rec PoF", "Current Risk"]],
          ["Task Selection", ["Proposed Action (s)", "Proj PoF", "Proj Risk"]],
        ],
        body: [
          [
            "1a",
            "rotor",
            "Overheats",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Implement routine cleaning and lubrication schedule for rotor components.",
                "Apply moisture barriers and Corroded-resistant coatings.",
                "Schedule regular replacement of lubricants and bearings."		
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "1b",
            "rotor",
            "Worn",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Implement routine cleaning and lubrication schedule for motor bearings.",
                "Apply moisture barriers and Corroded-resistant coatings.",
                "Schedule regular replacement of lubricants and bearings."		
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "1c",
            "rotor",
            "Leaking",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "dot",
              text: [
                "Apply moisture barriers and Corroded-resistant coatings.",
                "Implement routine cleaning and inspection schedule for electrical connections.",
                "Schedule regular replacement of motor windings and insulation.",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "2a",
            "Coils",
            "Overheats",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Implement routine cleaning and maintenance schedule for coil surfaces.",
                "Apply UV-C or other disinfection methods.",
                "Use protective coatings and Corroded-resistant materials.",				
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "2b",
            "Coils",
            "Corroded",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Apply protective coatings and use Corroded-resistant materials.",
                "Apply Corroded-resistant coatings specifically for coils.",
                "Implement UV-C or other disinfection methods.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "2c",
            "Coils",
            "Leaking",
            "1",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                "Implement regular inspection and maintenance to detect and repair refrigerant leaks.",
                "Implement routine cleaning and maintenance schedule for coil surfaces and surrounding areas.",
                "Apply UV-C or other disinfection methods.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "3a",
            "Air Filter",
            "Clogging",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                "Implement routine cleaning or replacement schedule for air filters.",
                "Apply UV-C or other disinfection methods.",
                "Use Corroded-resistant filter materials and housings.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "3b",
            "Air Filter",
            "Cracked",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Implement routine cleaning or replacement schedule for air filters.",
                "Apply UV-C or other disinfection methods.",
                "Use Corroded-resistant filter materials and housings.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "3c",
            "Air Filter",
            "Corroded",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                "Use Corroded-resistant filter materials and housings.",
                "Apply UV-C or other disinfection methods.",
                "Use Corroded-resistant filter materials and housings (duplicate action).",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "4a",
            "Gear",
            "Worn",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Implement routine lubrication and inspection schedule for gear components.",
                "Apply proper sealing and contamination prevention measures.",
                "Use Corroded-resistant coatings and materials for gears.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "4b",
            "Gear",
            "Misalignment",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Implement routine lubrication and inspection schedule for gear components.",
                "Apply proper sealing and contamination prevention measures.",
                "Use Corroded-resistant coatings and materials for gears.",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "4c",
            "Gear",
            "Leaking",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "dot",
              text: [
                "Implement routine maintenance schedule for valve cleaning to remove debris, sediment, or scale.",
                "Implement routine lubrication and inspection schedule for gear components.",
                "Apply proper sealing and contamination prevention measures.",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
        ]
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
              text: ["immediately clean and re-lubricate the rotor, apply a moisture barrier, and replace any corroded or damaged bearings."]
            },
            "CM/PM",
            ["1.1", "1.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "500 hours and/or Performed on: Damage or performance degradation detection test When corrosion or bearing damage occurs",
            "-",
            "It ensures the rotor operates efficiently and prevents further damage by replacing corroded or damaged bearings promptly.",
          ],
          [
            { 
              type: "dot", 
              text: ["promptly clean and re-lubricate the bearings, apply a corrosion-resistant coating, and replace the damaged bearings."]
            },
            "CM/PM",
            ["2.1", "2.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "250 hours and/or Performed on: Bearing inspection or performance issues When bearing corrosion or damage is detected",
            "-",
            "Applying a corrosion-resistant coating and replacing damaged bearings are critical steps for long-term durability and performance.",
          ],
          [
            { 
              type: "dot", 
              text: ["clean and lubricate rotor components, repair moisture barriers, apply corrosion-resistant coatings, and replace failed lubricants and bearings"]
            },
            "CM/PM",
            ["3.1", "3.2"],
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "1000 hours and/or Performed on: Implementing moisture barriers and corrosion-resistant coatings:",
            "-",
            "It ensures the rotor operate smoothly and have a longer service life.",
          ],
          [
            { 
              type: "dot", 
              text: ["clean and disinfect the coils using UV-C methods, apply a protective coating, and replace any damaged coil sections with corrosion-resistant materials."]
            },
            "CM/PM",
            ["4.1", "4.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "1000 hours and/or Performed on: Coil condition assessment When coil contamination or damage occurs",
            "-",
            "The use of UV-C disinfection and corrosion-resistant materials helps ensure both hygiene and durability.",
          ],
          [
            { 
              type: "dot", 
              text: ["apply protective coatings to the affected coils, replace damaged coil sections with corrosion-resistant materials, and disinfect the area using UV-C methods."]
            },
            "OTC",
            ["5.1", "5.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "500 hours and/or Performed on: Coil damage or contamination inspection When damage or corrosion is detected",
            "-",
            "Applying protective coatings and replacing damaged sections with corrosion-resistant materials help prevent future issues, while UV-C disinfection ensures the area remains hygienic.",
          ],
          [
            { 
              type: "dot", 
              text: ["immediately repair the leak, clean and disinfect the coil surfaces and surrounding areas using UV-C methods, and ensure proper sealing of the repaired area."]
            },
            "CM/PM",
            ["6.1", "6.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "200 hours and/or Performed on: Filter damage or performance issues When a filter is found to be damaged or contaminated",
            "-",
            "Immediate attention to the leak and thorough disinfection with UV-C methods are crucial for preventing further issues and maintaining system integrity.",
          ],
          [
            { 
              type: "dot", 
              text: ["replace the filter with a corrosion-resistant one, clean the filter housing, and disinfect the area using UV-C methods to prevent further contamination."]
            },
            "CM/PM",
            ["7.1", "7.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "200 hours and/or Performed on: Filter inspection or clogging When filter damage or contamination occurs",
            "-",
            "Using a corrosion-resistant filter and disinfecting with UV-C methods ensures that the system remains efficient and free from contamination.",
          ],
          [
            { 
              type: "dot", 
              text: ["immediately replace it with a corrosion-resistant alternative, clean the housing, and use UV-C disinfection to ensure cleanliness."]
            },
            "CM/PM",
            ["8.1", "8.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "200 hours and/or Performed on: Filter damage or performance issues When a filter is found to be damaged or contaminated",
            "-",
            "Using corrosion-resistant materials and UV-C disinfection ensures that the replacement part functions optimally and prevents future contamination.",
          ],
          [
            { 
              type: "dot", 
              text: ["replace them with corrosion-resistant ones, clean the housing, and disinfect using UV-C methods to maintain hygiene."]
            },
            "OTC",
            ["9.1", "9.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "200 hours and/or Performed on: Filter inspection or contamination check When filter corrosion or damage is detected",
            "-",
            "Regular cleaning and UV-C disinfection help maintain hygiene and system efficiency.",
          ],
          [
            { 
              type: "dot", 
              text: ["lubricate and inspect the gears, apply proper seals, and replace damaged gears with corrosion-resistant alternatives."]
            },
            "CM/PM",
            ["10.1", "10.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "1000 hours and/or Performed on: Gear inspection or performance review When gear damage or wear is detected",
            "-",
            "It ensures the gears operate smoothly and have a longer service life.",
          ],
          [
            { 
              type: "dot", 
              text: ["re-lubricate the gear components, ensure proper sealing to prevent contamination, and replace damaged gears with corrosion-resistant materials."]
            },
            "CM/PM",
            ["11.1", "11.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "500 hours and/or Performed on: Gear component inspection or lubrication check When gears are found to be damaged or contaminated",
            "-",
            "Proper sealing and corrosion-resistant materials are crucial for maintaining gear performance and longevity.",
          ],
          [
            { 
              type: "dot", 
              text: ["flush or clean the valve to remove debris, re-lubricate the gear components, apply proper sealing, and replace any damaged parts with corrosion-resistant materials."]
            },
            "CM/PM",
            ["12.1", "12.2"],
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "1000 hours and/or Performed on: Valve inspection or maintenance schedule When valve debris or gear damage is detected",
            "-",
            "It ensures both the valve and gear components are well-maintained and protected against future issues.",
          ],
        ],
      },
    ]
  },
  {
    slug: "air-handling-unit-3",
    type: "COOLING_SYSTEM",
    specs: {
      functionalGroup: "Propulsion Function Group",
      system: "Diesel Engine",
      subsystem: "Cooling System",
      equipmentID: "CO-AHU-03",
      equipmentName: "Air Handling Unit",
      drawing: "Cooling System",
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
            "serves as the central component responsible for the circulation, temperature regulation, and filtration of air throughout the vessel.",
            "Primary",
            ["1,1", "1,2"],
            [
              "Failed to compromised ventilation and cooling performance (Total Failure)",
              "inadequate ventilation and reduced cooling efficiency, within capacity less than 6500 CFM (Partial Failure)"
            ],
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
          "Part",
          "Failure Mode",
          "Causes",
          "Failure Charasteristic",
          "Local Effect",
          "Functional Failure",
        ],
        body: [
          [
            "1a",
            "rotor",
            "Overheats",
            [
              "1.1 Moisture ingress: Entry of moisture into the motor winding can compromise insulation integrity and cause breakdown.",
              "1.2 Voltage spikes: Sudden voltage surges can exceed the insulation's dielectric strength, leading to insulation breakdown."
            ],
            ["Random","Random"],
            {
              type: "number",
              text: [
                "Formation of hotspots",
                "Potential arcing",
              ]
            },
            "1.1 Failed to compromised ventilation and cooling performance"
          ],
          [
            "1b",
            "rotor",
            "Worn",
            [
              "2.1 Lack of lubrication: Inadequate lubrication of the motor bearings can lead to increased friction and heat generation, accelerating wear and potentially causing bearing failure.",
              "2.2  Contamination by foreign particles: Entry of dirt, dust, or other foreign particles into the bearing assembly can cause abrasion and scoring of bearing surfaces, leading to premature wear and eventual failure."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "inncreased friction and heat generation within the bearings  ",
                "Abrasion and scoring of bearing surfaces due to foreign particle ingress",
              ]
            },
            "1.1 Failed to compromised ventilation and cooling performance"
          ],
          [
            "1c",
            "rotor",
            "Leaking",
            [
              "3.1 Exposure to moisture and corrosive elements: Moisture and corrosive elements can infiltrate the motor's electrical components, such as terminals and wiring, leading to degradation of insulation materials and increased conductivity between electrical paths.",
              "3.2 Build-up of conductive contaminants: Over time, dust, dirt, and other conductive contaminants can accumulate on electrical connections, creating a pathway for electricity to flow where it shouldn't, increasing resistance, and generating heat."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Increased risk of short circuits",
                "Accumulation of dust and debris on electrical connections",
              ]
            },
            "1.1 Failed to compromised ventilation and cooling performance"
          ],
          [
            "2a",
            "Coils",
            "Overheats",
            [
              "4.1  Overloading: Operating the coils beyond their rated capacity can lead to excessive heat generation and overheating.",
              "4.2  Poor ventilation: Inadequate airflow around the coils restricts heat dissipation, causing temperature buildup."
            ],
            ["Random","Wear-out"],
            {
              type: "number",
              text: [
                "Localized temperature rise",
                "Thermal expansion",
              ]
            },
            "1.2 inadequate ventilation and reduced cooling efficiency, within capacity less than 6500 CFM (Partial Failure)"
          ],
          [
            "2b",
            "Coils",
            "Corroded",
            [
              "5.1  Exposure to corrosive environments: Exposure of the coils to corrosive environments, such as saltwater or chemical fumes, can lead to Corroded of coil surfaces and degradation of coil materials.",
              "5.2  Inadequate protective coatings or sealing: Lack of proper protective coatings or sealing on coil surfaces leaves them vulnerable to Corroded from environmental exposure, accelerating material degradation."
            ],
            ["Wear-out","Random"],
            {
              type: "number",
              text: [
                "Formation of rust or Corroded pits on coil surfaces",
                "Thinning or weakening of coil material due to Corroded",
              ]
            },
            "1.1 Failed to compromised ventilation and cooling performance"
          ],
          [
            "2c",
            "Coils",
            "Leaking",
            [
              "6.2  Blockage of airflow due to dirt accumulation: Accumulation of dirt, dust, and other debris on the coils can obstruct airflow, reducing heat transfer efficiency and causing the coil surface temperatures to drop, leading to freezing.",
              "6.2  Blockage of airflow due to dirt accumulation: Accumulation of dirt, dust, and other debris on the coils can obstruct airflow, reducing heat transfer efficiency and causing the coil surface temperatures to drop, leading to freezing."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Reduced heat absorption capacity of coils due to low refrigerant levels",
                "Hindered airflow and decreased heat transfer efficiency caused by dirt accumulation",
              ]
            },
            "1.2 inadequate ventilation and reduced cooling efficiency, within capacity less than 6500 CFM (Partial Failure)"
          ],
          [
            "3a",
            "Air Filter",
            "Clogging",
            [
              "7.1 Accumulation of airborne particles and debris: Continuous operation of the air filter in dusty or debris-laden environments leads to the accumulation of airborne particles and debris on the filter media, gradually reducing airflow.",
              "7.2   Inadequate filter maintenance or replacement intervals: Failure to perform regular filter maintenance or replace clogged filters according to recommended intervals allows debris accumulation to reach levels that impede airflow and filtration efficiency."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Gradual reduction in airflow through the filter media",
                " Increased pressure drop across the filter",
              ]
            },
            "1.1 Failed to compromised ventilation and cooling performance"
          ],
          [
            "3b",
            "Air Filter",
            "Cracked",
            [
              "8.1  High-pressure differential: Excessive pressure differential across the filter due to clogging or restricted airflow can lead to structural failure.",
              "8.2  Mechanical damage: Impact or mishandling during installation or maintenance can cause structural damage to the filter."
            ],
            ["Wear-out","Random"],
            {
              type: "number",
              text: [
                "Deformation or collapse",
                "Tearing or ripping",
              ]
            },
            "1.2 inadequate ventilation and reduced cooling efficiency, within capacity less than 6500 CFM (Partial Failure)  "
          ],
          [
            "3c",
            "Air Filter",
            "Corroded",
            [
              "9.1   Exposure to corrosive chemicals: Exposure to corrosive chemicals in the air or surrounding environment can lead to the deterioration of filter media, resulting in tears and holes that compromise filtration efficiency.",
              "9.2 Growth of mold and bacteria: Mold and bacteria growth on the air filter can block filter media and impede airflow, reducing filtration efficiency and promoting the spread of airborne contaminants.Growth of mold and bacteria"
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Deterioration of filter media, leading to increased bypass of contaminants",
                "Blockage of filter media and potential contamination of the air supply",
              ]
            },
            "1.1 Failed to compromised ventilation and cooling performance"
          ],
          [
            "4a",
            "Gear",
            "Worn",
            [
              "10.1  Inadequate lubricant quantity or quality: Insufficient lubricant quantity or use of low-quality lubricants in the gear assembly can result in inadequate lubrication film thickness, increasing friction and wear between gear surfaces.",
              "10.2  Contamination of lubricant by foreign particles: Entry of dirt, dust, or other foreign particles into the gear lubricant can cause abrasive wear on gear surfaces and breakdown of lubricant film, leading to increased friction and heat generation."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Increased friction and wear between gear surfaces",
                "Formation of abrasive particles or debris in the gear assembly",
              ]
            },
            "1.2 inadequate ventilation and reduced cooling efficiency, within capacity less than 6500 CFM (Partial Failure)"
          ],
          [
            "4b",
            "Gear",
            "Misalignment",
            [
              "11.1 Inadequate Lubrication: Insufficient lubrication between gear teeth leads to increased friction and accelerated wear.",
              "11.2  Contamination: Entry of abrasive particles or debris into the gear meshing area causes abrasive wear on gear teeth."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Surface Pitting and Scoring",
                "Material Removal and Deformation",
              ]
            },
            "Material Removal and Deformation"
          ],
          [
            "4c",
            "Gear",
            "Leaking",
            [
              "12.1 Lack of lubrication: Inadequate lubrication of gear components can lead to increased friction between gear teeth, accelerating wear and potentially causing mechanical failure.",
              "12.2  Corroded due to chemical exposure: Exposure to corrosive chemicals can deteriorate gear material, weakening the gear structure and increasing the risk of gear failure under load conditions."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Increased friction between gear teeth",
                "Abrasion and Corroded of gear surfaces due to the presence of contaminant",
              ]
            },
            "1.2 inadequate ventilation and reduced cooling efficiency, within capacity less than 6500 CFM (Partial Failure)"
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
          "Part",
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
            "1a",
            "rotor",
            "Overheats",
            "Short circuits: Insulation breakdown can result in short circuits within the motor winding, causing sudden motor failure and system downtime.",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Monitoring of motor temperature and abnormal noises.","Visual inspection for signs of Corroded and moisture ingress."],
            },
            "Regular cleaning and lubrication of rotor components..Implementing moisture barriers and Corroded-resistant coatings. Scheduled replacement of lubricants and bearings."
          ],
          [
            "1b",
            "rotor",
            "Worn",
            "Bearing seizure and motor shaft immobilization: Severe wear or damage to the bearings can result in bearing seizure, causing the motor shaft to become immobilized and leading to sudden motor failure.",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Monitoring of motor temperature and abnormal noises.",
                "Visual inspection for signs of Corroded and moisture ingress."
              ],
            },
            "Regular cleaning and lubrication of motor bearings. Implementing moisture barriers and Corroded-resistant coatings. Scheduled replacement of lubricants and bearings."
          ],
          [
            "1c",
            "rotor",
            "Leaking",
            "Sudden motor failure, potentially leading to system downtime and safety hazards: Electrical failure within the motor can result in the sudden cessation of motor operation, leading to system downtime and potential safety hazards, especially if the motor is critical for essential ship functions.",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: [
                "Regular inspection for signs of moisture ingress and Corroded on electrical components",
                "Monitoring of electrical connections for signs of overheating and voltage fluctuations."
              ],
            },
            "Implementing moisture barriers and Corroded-resistant coatings. Regular cleaning and inspection of electrical connections. Scheduled replacement of motor windings and insulation."
          ],
          [
            "2a",
            "Coils",
            "Overheats",
            "Coil damage: Prolonged overheating can cause damage to coil insulation and materials, compromising coil integrity and performance.",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Visual inspection of coil surfaces for dirt accumulation.",
                "Visual inspection for signs of microbial growth and musty odors."
              ],
            },
            "Regular cleaning and maintenance of coil surfaces. Implementing UV-C or other disinfection methods. Implementing protective coatings and Corroded-resistant materials."
          ],
          [
            "2b",
            "Coils",
            "Corroded",
            "Reduced coil efficiency and heat transfer capacity: Corroded-induced degradation of coil surfaces reduces their efficiency in transferring heat, leading to decreased system performance and potentially causing overheating.",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Visual inspection for signs of Corroded and structural weakness.",
                "Regular inspection for signs of Corroded and pitting on coil surfaces."
              ],
            },
            "'Implementing protective coatings and Corroded-resistant materials.Implementing Corroded-resistant coatings and materials for coils. Implementing UV-C or other disinfection methods."
          ],
          [
            "2c",
            "Coils",
            "Leaking",
            " Low refrigerant level due to leakage: Refrigerant leakage from the coils can result in a decreased heat absorption capacity, causing the temperature of the coils to drop below freezing point and leading to ice formation.",
            "1",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Monitoring of refrigerant levels and pressure differentials across the coil.",
                "Visual inspection for signs of dirt accumulation and temperature differentials across the coil."
              ],
            },
            "Regular inspection and maintenance to detect and repair refrigerant leaks.Regular cleaning and maintenance of coil surfaces and surrounding areas. Implementing UV-C or other disinfection methods."
          ],
          [
            "3a",
            "Air Filter",
            "Clogging",
            "Decreased indoor air quality or cooling system efficiency: Reduced airflow and filtration efficiency resulting from clogged filters lead to decreased indoor air quality or cooling system performance, potentially causing discomfort or health issues for occupants.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                " Monitoring of pressure differentials across the filter",
                "Visual inspection for signs of microbial growth and musty odors. 3. Regular inspection for signs of Corroded and structural weakness.."
              ],
            },
            "Regular cleaning or replacement of air filters. Implementing UV-C or other disinfection methods.Implementing Corroded-resistant filter materials and housings."
          ],
          [
            "3b",
            "Air Filter",
            "Cracked",
            "Loss of filtration efficiency: Structural failure compromises the integrity of the filter, reducing its ability to capture airborne contaminants effectively.",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Monitoring of pressure differentials across the filter",
                "Visual inspection for signs of microbial growth and musty odors.."
              ],
            },
            "Regular cleaning or replacement of air filters.Implementing UV-C or other disinfection methods.Implementing Corroded-resistant filter materials and housings."
          ],
          [
            "3c",
            "Air Filter",
            "Corroded",
            "Increased bypass of contaminants and reduced filtration efficiency: Damage to the air filter media allows contaminants to pass through the filter, reducing its ability to capture airborne particles and potentially compromising indoor air quality.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Regular inspection for signs of physical damage and structural weakness.",
                "Visual inspection for signs of microbial growth and musty odors."
              ],
            },
            "Implementing Corroded-resistant filter materials and housings.Implementing UV-C or other disinfection methods. Implementing Corroded-resistant filter materials and housings."
          ],
          [
            "4a",
            "Gear",
            "Worn",
            "Progressive wear and degradation of gear teeth: Continued friction and wear between gear surfaces result in progressive damage and degradation of gear teeth, leading to reduced gear efficiency and potential gear failure.",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Monitoring of gear temperature and vibration levels.",
                "Visual inspection for signs of contamination and wear on gear surfaces."
              ],
            },
            "Scheduled lubrication and inspection of gear components. Implementing proper sealing and contamination prevention measures.Implementing Corroded-resistant coatings and materials for gears."
          ],
          [
            "4b",
            "Gear",
            "Misalignment",
            "Reduced Gear Efficiency: Tooth wear decreases gear efficiency and transmission accuracy, resulting in reduced system performance.",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Monitoring of gear temperature and vibration levels.",
                "Visual inspection for signs of contamination and wear on gear surfaces."
              ],
            },
            "Scheduled lubrication and inspection of gear components.Implementing proper sealing and contamination prevention measures.Implementing Corroded-resistant coatings and materials for gears."
          ],
          [
            "4c",
            "Gear",
            "Leaking",
            "Gradual loss of gear efficiency and potential mechanical failure: Increased wear and deterioration of gear components lead to a gradual loss of gear efficiency, potentially resulting in gear failure and system downtime.",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: [
                "Monitoring of gear temperature and vibration levels.",
                "Visual inspection for signs of contamination and wear on gear surfaces."
              ],
            },
            "Regular inspection- Regular Cleaning: Implement a routine maintenance schedule to flush or clean the valve to remove accumulated debris, sediment, or scale Scheduled lubrication and inspection of gear components. Implementing proper sealing and contamination prevention measures. Implementing Corroded-resistant coatings and materials for gears."
          ],
        ]
      },
      {
        title: "Maintenance Task Selection",
        backgroundColor: "#f5eafa",
        borderColor: "#912BBC",
        headRow: 2,
        head: [
          "No",
          "Part",
          "Failure Mode",
          ["Risk Characterization", ["CoF", "Rec PoF", "Current Risk"]],
          ["Task Selection", ["Proposed Action (s)", "Proj PoF", "Proj Risk"]],
        ],
        body: [
          [
            "1a",
            "rotor",
            "Overheats",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Implement routine cleaning and lubrication schedule for rotor components.",
                "Apply moisture barriers and Corroded-resistant coatings.",
                "Schedule regular replacement of lubricants and bearings."		
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "1b",
            "rotor",
            "Worn",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Implement routine cleaning and lubrication schedule for motor bearings.",
                "Apply moisture barriers and Corroded-resistant coatings.",
                "Schedule regular replacement of lubricants and bearings."		
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "1c",
            "rotor",
            "Leaking",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "dot",
              text: [
                "Apply moisture barriers and Corroded-resistant coatings.",
                "Implement routine cleaning and inspection schedule for electrical connections.",
                "Schedule regular replacement of motor windings and insulation.",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "2a",
            "Coils",
            "Overheats",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Implement routine cleaning and maintenance schedule for coil surfaces.",
                "Apply UV-C or other disinfection methods.",
                "Use protective coatings and Corroded-resistant materials.",				
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "2b",
            "Coils",
            "Corroded",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Apply protective coatings and use Corroded-resistant materials.",
                "Apply Corroded-resistant coatings specifically for coils.",
                "Implement UV-C or other disinfection methods.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "2c",
            "Coils",
            "Leaking",
            "1",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                "Implement regular inspection and maintenance to detect and repair refrigerant leaks.",
                "Implement routine cleaning and maintenance schedule for coil surfaces and surrounding areas.",
                "Apply UV-C or other disinfection methods.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "3a",
            "Air Filter",
            "Clogging",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                "Implement routine cleaning or replacement schedule for air filters.",
                "Apply UV-C or other disinfection methods.",
                "Use Corroded-resistant filter materials and housings.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "3b",
            "Air Filter",
            "Cracked",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Implement routine cleaning or replacement schedule for air filters.",
                "Apply UV-C or other disinfection methods.",
                "Use Corroded-resistant filter materials and housings.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "3c",
            "Air Filter",
            "Corroded",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                "Use Corroded-resistant filter materials and housings.",
                "Apply UV-C or other disinfection methods.",
                "Use Corroded-resistant filter materials and housings (duplicate action).",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "4a",
            "Gear",
            "Worn",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Implement routine lubrication and inspection schedule for gear components.",
                "Apply proper sealing and contamination prevention measures.",
                "Use Corroded-resistant coatings and materials for gears.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "4b",
            "Gear",
            "Misalignment",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Implement routine lubrication and inspection schedule for gear components.",
                "Apply proper sealing and contamination prevention measures.",
                "Use Corroded-resistant coatings and materials for gears.",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "4c",
            "Gear",
            "Leaking",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "dot",
              text: [
                "Implement routine maintenance schedule for valve cleaning to remove debris, sediment, or scale.",
                "Implement routine lubrication and inspection schedule for gear components.",
                "Apply proper sealing and contamination prevention measures.",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
        ]
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
              text: ["immediately clean and re-lubricate the rotor, apply a moisture barrier, and replace any corroded or damaged bearings."]
            },
            "CM/PM",
            ["1.1", "1.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "500 hours and/or Performed on: Damage or performance degradation detection test When corrosion or bearing damage occurs",
            "-",
            "It ensures the rotor operates efficiently and prevents further damage by replacing corroded or damaged bearings promptly.",
          ],
          [
            { 
              type: "dot", 
              text: ["promptly clean and re-lubricate the bearings, apply a corrosion-resistant coating, and replace the damaged bearings."]
            },
            "CM/PM",
            ["2.1", "2.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "250 hours and/or Performed on: Bearing inspection or performance issues When bearing corrosion or damage is detected",
            "-",
            "Applying a corrosion-resistant coating and replacing damaged bearings are critical steps for long-term durability and performance.",
          ],
          [
            { 
              type: "dot", 
              text: ["clean and lubricate rotor components, repair moisture barriers, apply corrosion-resistant coatings, and replace failed lubricants and bearings"]
            },
            "CM/PM",
            ["3.1", "3.2"],
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "1000 hours and/or Performed on: Implementing moisture barriers and corrosion-resistant coatings:",
            "-",
            "It ensures the rotor operate smoothly and have a longer service life.",
          ],
          [
            { 
              type: "dot", 
              text: ["clean and disinfect the coils using UV-C methods, apply a protective coating, and replace any damaged coil sections with corrosion-resistant materials."]
            },
            "CM/PM",
            ["4.1", "4.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "1000 hours and/or Performed on: Coil condition assessment When coil contamination or damage occurs",
            "-",
            "The use of UV-C disinfection and corrosion-resistant materials helps ensure both hygiene and durability.",
          ],
          [
            { 
              type: "dot", 
              text: ["apply protective coatings to the affected coils, replace damaged coil sections with corrosion-resistant materials, and disinfect the area using UV-C methods."]
            },
            "OTC",
            ["5.1", "5.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "500 hours and/or Performed on: Coil damage or contamination inspection When damage or corrosion is detected",
            "-",
            "Applying protective coatings and replacing damaged sections with corrosion-resistant materials help prevent future issues, while UV-C disinfection ensures the area remains hygienic.",
          ],
          [
            { 
              type: "dot", 
              text: ["immediately repair the leak, clean and disinfect the coil surfaces and surrounding areas using UV-C methods, and ensure proper sealing of the repaired area."]
            },
            "CM/PM",
            ["6.1", "6.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "200 hours and/or Performed on: Filter damage or performance issues When a filter is found to be damaged or contaminated",
            "-",
            "Immediate attention to the leak and thorough disinfection with UV-C methods are crucial for preventing further issues and maintaining system integrity.",
          ],
          [
            { 
              type: "dot", 
              text: ["replace the filter with a corrosion-resistant one, clean the filter housing, and disinfect the area using UV-C methods to prevent further contamination."]
            },
            "CM/PM",
            ["7.1", "7.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "200 hours and/or Performed on: Filter inspection or clogging When filter damage or contamination occurs",
            "-",
            "Using a corrosion-resistant filter and disinfecting with UV-C methods ensures that the system remains efficient and free from contamination.",
          ],
          [
            { 
              type: "dot", 
              text: ["immediately replace it with a corrosion-resistant alternative, clean the housing, and use UV-C disinfection to ensure cleanliness."]
            },
            "CM/PM",
            ["8.1", "8.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "200 hours and/or Performed on: Filter damage or performance issues When a filter is found to be damaged or contaminated",
            "-",
            "Using corrosion-resistant materials and UV-C disinfection ensures that the replacement part functions optimally and prevents future contamination.",
          ],
          [
            { 
              type: "dot", 
              text: ["replace them with corrosion-resistant ones, clean the housing, and disinfect using UV-C methods to maintain hygiene."]
            },
            "OTC",
            ["9.1", "9.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "200 hours and/or Performed on: Filter inspection or contamination check When filter corrosion or damage is detected",
            "-",
            "Regular cleaning and UV-C disinfection help maintain hygiene and system efficiency.",
          ],
          [
            { 
              type: "dot", 
              text: ["lubricate and inspect the gears, apply proper seals, and replace damaged gears with corrosion-resistant alternatives."]
            },
            "CM/PM",
            ["10.1", "10.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "1000 hours and/or Performed on: Gear inspection or performance review When gear damage or wear is detected",
            "-",
            "It ensures the gears operate smoothly and have a longer service life.",
          ],
          [
            { 
              type: "dot", 
              text: ["re-lubricate the gear components, ensure proper sealing to prevent contamination, and replace damaged gears with corrosion-resistant materials."]
            },
            "CM/PM",
            ["11.1", "11.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "500 hours and/or Performed on: Gear component inspection or lubrication check When gears are found to be damaged or contaminated",
            "-",
            "Proper sealing and corrosion-resistant materials are crucial for maintaining gear performance and longevity.",
          ],
          [
            { 
              type: "dot", 
              text: ["flush or clean the valve to remove debris, re-lubricate the gear components, apply proper sealing, and replace any damaged parts with corrosion-resistant materials."]
            },
            "CM/PM",
            ["12.1", "12.2"],
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "1000 hours and/or Performed on: Valve inspection or maintenance schedule When valve debris or gear damage is detected",
            "-",
            "It ensures both the valve and gear components are well-maintained and protected against future issues.",
          ],
        ],
      },
    ]
  },
  {
    slug: "air-handling-unit-4",
    type: "COOLING_SYSTEM",
    specs: {
      functionalGroup: "Propulsion Function Group",
      system: "Diesel Engine",
      subsystem: "Cooling System",
      equipmentID: "CO-AHU-04",
      equipmentName: "Air Handling Unit",
      drawing: "Cooling System",
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
            "serves as the central component responsible for the circulation, temperature regulation, and filtration of air throughout the vessel.",
            "Primary",
            ["1,1", "1,2"],
            [
              "Failed to compromised ventilation and cooling performance (Total Failure)",
              "inadequate ventilation and reduced cooling efficiency, within capacity less than 6500 CFM (Partial Failure)"
            ],
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
          "Part",
          "Failure Mode",
          "Causes",
          "Failure Charasteristic",
          "Local Effect",
          "Functional Failure",
        ],
        body: [
          [
            "1a",
            "rotor",
            "Overheats",
            [
              "1.1 Moisture ingress: Entry of moisture into the motor winding can compromise insulation integrity and cause breakdown.",
              "1.2 Voltage spikes: Sudden voltage surges can exceed the insulation's dielectric strength, leading to insulation breakdown."
            ],
            ["Random","Random"],
            {
              type: "number",
              text: [
                "Formation of hotspots",
                "Potential arcing",
              ]
            },
            "1.1 Failed to compromised ventilation and cooling performance"
          ],
          [
            "1b",
            "rotor",
            "Worn",
            [
              "2.1 Lack of lubrication: Inadequate lubrication of the motor bearings can lead to increased friction and heat generation, accelerating wear and potentially causing bearing failure.",
              "2.2  Contamination by foreign particles: Entry of dirt, dust, or other foreign particles into the bearing assembly can cause abrasion and scoring of bearing surfaces, leading to premature wear and eventual failure."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "inncreased friction and heat generation within the bearings  ",
                "Abrasion and scoring of bearing surfaces due to foreign particle ingress",
              ]
            },
            "1.1 Failed to compromised ventilation and cooling performance"
          ],
          [
            "1c",
            "rotor",
            "Leaking",
            [
              "3.1 Exposure to moisture and corrosive elements: Moisture and corrosive elements can infiltrate the motor's electrical components, such as terminals and wiring, leading to degradation of insulation materials and increased conductivity between electrical paths.",
              "3.2 Build-up of conductive contaminants: Over time, dust, dirt, and other conductive contaminants can accumulate on electrical connections, creating a pathway for electricity to flow where it shouldn't, increasing resistance, and generating heat."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Increased risk of short circuits",
                "Accumulation of dust and debris on electrical connections",
              ]
            },
            "1.1 Failed to compromised ventilation and cooling performance"
          ],
          [
            "2a",
            "Coils",
            "Overheats",
            [
              "4.1  Overloading: Operating the coils beyond their rated capacity can lead to excessive heat generation and overheating.",
              "4.2  Poor ventilation: Inadequate airflow around the coils restricts heat dissipation, causing temperature buildup."
            ],
            ["Random","Wear-out"],
            {
              type: "number",
              text: [
                "Localized temperature rise",
                "Thermal expansion",
              ]
            },
            "1.2 inadequate ventilation and reduced cooling efficiency, within capacity less than 6500 CFM (Partial Failure)"
          ],
          [
            "2b",
            "Coils",
            "Corroded",
            [
              "5.1  Exposure to corrosive environments: Exposure of the coils to corrosive environments, such as saltwater or chemical fumes, can lead to Corroded of coil surfaces and degradation of coil materials.",
              "5.2  Inadequate protective coatings or sealing: Lack of proper protective coatings or sealing on coil surfaces leaves them vulnerable to Corroded from environmental exposure, accelerating material degradation."
            ],
            ["Wear-out","Random"],
            {
              type: "number",
              text: [
                "Formation of rust or Corroded pits on coil surfaces",
                "Thinning or weakening of coil material due to Corroded",
              ]
            },
            "1.1 Failed to compromised ventilation and cooling performance"
          ],
          [
            "2c",
            "Coils",
            "Leaking",
            [
              "6.2  Blockage of airflow due to dirt accumulation: Accumulation of dirt, dust, and other debris on the coils can obstruct airflow, reducing heat transfer efficiency and causing the coil surface temperatures to drop, leading to freezing.",
              "6.2  Blockage of airflow due to dirt accumulation: Accumulation of dirt, dust, and other debris on the coils can obstruct airflow, reducing heat transfer efficiency and causing the coil surface temperatures to drop, leading to freezing."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Reduced heat absorption capacity of coils due to low refrigerant levels",
                "Hindered airflow and decreased heat transfer efficiency caused by dirt accumulation",
              ]
            },
            "1.2 inadequate ventilation and reduced cooling efficiency, within capacity less than 6500 CFM (Partial Failure)"
          ],
          [
            "3a",
            "Air Filter",
            "Clogging",
            [
              "7.1 Accumulation of airborne particles and debris: Continuous operation of the air filter in dusty or debris-laden environments leads to the accumulation of airborne particles and debris on the filter media, gradually reducing airflow.",
              "7.2   Inadequate filter maintenance or replacement intervals: Failure to perform regular filter maintenance or replace clogged filters according to recommended intervals allows debris accumulation to reach levels that impede airflow and filtration efficiency."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Gradual reduction in airflow through the filter media",
                " Increased pressure drop across the filter",
              ]
            },
            "1.1 Failed to compromised ventilation and cooling performance"
          ],
          [
            "3b",
            "Air Filter",
            "Cracked",
            [
              "8.1  High-pressure differential: Excessive pressure differential across the filter due to clogging or restricted airflow can lead to structural failure.",
              "8.2  Mechanical damage: Impact or mishandling during installation or maintenance can cause structural damage to the filter."
            ],
            ["Wear-out","Random"],
            {
              type: "number",
              text: [
                "Deformation or collapse",
                "Tearing or ripping",
              ]
            },
            "1.2 inadequate ventilation and reduced cooling efficiency, within capacity less than 6500 CFM (Partial Failure)  "
          ],
          [
            "3c",
            "Air Filter",
            "Corroded",
            [
              "9.1   Exposure to corrosive chemicals: Exposure to corrosive chemicals in the air or surrounding environment can lead to the deterioration of filter media, resulting in tears and holes that compromise filtration efficiency.",
              "9.2 Growth of mold and bacteria: Mold and bacteria growth on the air filter can block filter media and impede airflow, reducing filtration efficiency and promoting the spread of airborne contaminants.Growth of mold and bacteria"
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Deterioration of filter media, leading to increased bypass of contaminants",
                "Blockage of filter media and potential contamination of the air supply",
              ]
            },
            "1.1 Failed to compromised ventilation and cooling performance"
          ],
          [
            "4a",
            "Gear",
            "Worn",
            [
              "10.1  Inadequate lubricant quantity or quality: Insufficient lubricant quantity or use of low-quality lubricants in the gear assembly can result in inadequate lubrication film thickness, increasing friction and wear between gear surfaces.",
              "10.2  Contamination of lubricant by foreign particles: Entry of dirt, dust, or other foreign particles into the gear lubricant can cause abrasive wear on gear surfaces and breakdown of lubricant film, leading to increased friction and heat generation."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Increased friction and wear between gear surfaces",
                "Formation of abrasive particles or debris in the gear assembly",
              ]
            },
            "1.2 inadequate ventilation and reduced cooling efficiency, within capacity less than 6500 CFM (Partial Failure)"
          ],
          [
            "4b",
            "Gear",
            "Misalignment",
            [
              "11.1 Inadequate Lubrication: Insufficient lubrication between gear teeth leads to increased friction and accelerated wear.",
              "11.2  Contamination: Entry of abrasive particles or debris into the gear meshing area causes abrasive wear on gear teeth."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Surface Pitting and Scoring",
                "Material Removal and Deformation",
              ]
            },
            "Material Removal and Deformation"
          ],
          [
            "4c",
            "Gear",
            "Leaking",
            [
              "12.1 Lack of lubrication: Inadequate lubrication of gear components can lead to increased friction between gear teeth, accelerating wear and potentially causing mechanical failure.",
              "12.2  Corroded due to chemical exposure: Exposure to corrosive chemicals can deteriorate gear material, weakening the gear structure and increasing the risk of gear failure under load conditions."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Increased friction between gear teeth",
                "Abrasion and Corroded of gear surfaces due to the presence of contaminant",
              ]
            },
            "1.2 inadequate ventilation and reduced cooling efficiency, within capacity less than 6500 CFM (Partial Failure)"
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
          "Part",
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
            "1a",
            "rotor",
            "Overheats",
            "Short circuits: Insulation breakdown can result in short circuits within the motor winding, causing sudden motor failure and system downtime.",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Monitoring of motor temperature and abnormal noises.","Visual inspection for signs of Corroded and moisture ingress."],
            },
            "Regular cleaning and lubrication of rotor components..Implementing moisture barriers and Corroded-resistant coatings. Scheduled replacement of lubricants and bearings."
          ],
          [
            "1b",
            "rotor",
            "Worn",
            "Bearing seizure and motor shaft immobilization: Severe wear or damage to the bearings can result in bearing seizure, causing the motor shaft to become immobilized and leading to sudden motor failure.",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Monitoring of motor temperature and abnormal noises.",
                "Visual inspection for signs of Corroded and moisture ingress."
              ],
            },
            "Regular cleaning and lubrication of motor bearings. Implementing moisture barriers and Corroded-resistant coatings. Scheduled replacement of lubricants and bearings."
          ],
          [
            "1c",
            "rotor",
            "Leaking",
            "Sudden motor failure, potentially leading to system downtime and safety hazards: Electrical failure within the motor can result in the sudden cessation of motor operation, leading to system downtime and potential safety hazards, especially if the motor is critical for essential ship functions.",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: [
                "Regular inspection for signs of moisture ingress and Corroded on electrical components",
                "Monitoring of electrical connections for signs of overheating and voltage fluctuations."
              ],
            },
            "Implementing moisture barriers and Corroded-resistant coatings. Regular cleaning and inspection of electrical connections. Scheduled replacement of motor windings and insulation."
          ],
          [
            "2a",
            "Coils",
            "Overheats",
            "Coil damage: Prolonged overheating can cause damage to coil insulation and materials, compromising coil integrity and performance.",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Visual inspection of coil surfaces for dirt accumulation.",
                "Visual inspection for signs of microbial growth and musty odors."
              ],
            },
            "Regular cleaning and maintenance of coil surfaces. Implementing UV-C or other disinfection methods. Implementing protective coatings and Corroded-resistant materials."
          ],
          [
            "2b",
            "Coils",
            "Corroded",
            "Reduced coil efficiency and heat transfer capacity: Corroded-induced degradation of coil surfaces reduces their efficiency in transferring heat, leading to decreased system performance and potentially causing overheating.",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Visual inspection for signs of Corroded and structural weakness.",
                "Regular inspection for signs of Corroded and pitting on coil surfaces."
              ],
            },
            "'Implementing protective coatings and Corroded-resistant materials.Implementing Corroded-resistant coatings and materials for coils. Implementing UV-C or other disinfection methods."
          ],
          [
            "2c",
            "Coils",
            "Leaking",
            " Low refrigerant level due to leakage: Refrigerant leakage from the coils can result in a decreased heat absorption capacity, causing the temperature of the coils to drop below freezing point and leading to ice formation.",
            "1",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Monitoring of refrigerant levels and pressure differentials across the coil.",
                "Visual inspection for signs of dirt accumulation and temperature differentials across the coil."
              ],
            },
            "Regular inspection and maintenance to detect and repair refrigerant leaks.Regular cleaning and maintenance of coil surfaces and surrounding areas. Implementing UV-C or other disinfection methods."
          ],
          [
            "3a",
            "Air Filter",
            "Clogging",
            "Decreased indoor air quality or cooling system efficiency: Reduced airflow and filtration efficiency resulting from clogged filters lead to decreased indoor air quality or cooling system performance, potentially causing discomfort or health issues for occupants.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                " Monitoring of pressure differentials across the filter",
                "Visual inspection for signs of microbial growth and musty odors. 3. Regular inspection for signs of Corroded and structural weakness.."
              ],
            },
            "Regular cleaning or replacement of air filters. Implementing UV-C or other disinfection methods.Implementing Corroded-resistant filter materials and housings."
          ],
          [
            "3b",
            "Air Filter",
            "Cracked",
            "Loss of filtration efficiency: Structural failure compromises the integrity of the filter, reducing its ability to capture airborne contaminants effectively.",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Monitoring of pressure differentials across the filter",
                "Visual inspection for signs of microbial growth and musty odors.."
              ],
            },
            "Regular cleaning or replacement of air filters.Implementing UV-C or other disinfection methods.Implementing Corroded-resistant filter materials and housings."
          ],
          [
            "3c",
            "Air Filter",
            "Corroded",
            "Increased bypass of contaminants and reduced filtration efficiency: Damage to the air filter media allows contaminants to pass through the filter, reducing its ability to capture airborne particles and potentially compromising indoor air quality.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Regular inspection for signs of physical damage and structural weakness.",
                "Visual inspection for signs of microbial growth and musty odors."
              ],
            },
            "Implementing Corroded-resistant filter materials and housings.Implementing UV-C or other disinfection methods. Implementing Corroded-resistant filter materials and housings."
          ],
          [
            "4a",
            "Gear",
            "Worn",
            "Progressive wear and degradation of gear teeth: Continued friction and wear between gear surfaces result in progressive damage and degradation of gear teeth, leading to reduced gear efficiency and potential gear failure.",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Monitoring of gear temperature and vibration levels.",
                "Visual inspection for signs of contamination and wear on gear surfaces."
              ],
            },
            "Scheduled lubrication and inspection of gear components. Implementing proper sealing and contamination prevention measures.Implementing Corroded-resistant coatings and materials for gears."
          ],
          [
            "4b",
            "Gear",
            "Misalignment",
            "Reduced Gear Efficiency: Tooth wear decreases gear efficiency and transmission accuracy, resulting in reduced system performance.",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Monitoring of gear temperature and vibration levels.",
                "Visual inspection for signs of contamination and wear on gear surfaces."
              ],
            },
            "Scheduled lubrication and inspection of gear components.Implementing proper sealing and contamination prevention measures.Implementing Corroded-resistant coatings and materials for gears."
          ],
          [
            "4c",
            "Gear",
            "Leaking",
            "Gradual loss of gear efficiency and potential mechanical failure: Increased wear and deterioration of gear components lead to a gradual loss of gear efficiency, potentially resulting in gear failure and system downtime.",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: [
                "Monitoring of gear temperature and vibration levels.",
                "Visual inspection for signs of contamination and wear on gear surfaces."
              ],
            },
            "Regular inspection- Regular Cleaning: Implement a routine maintenance schedule to flush or clean the valve to remove accumulated debris, sediment, or scale Scheduled lubrication and inspection of gear components. Implementing proper sealing and contamination prevention measures. Implementing Corroded-resistant coatings and materials for gears."
          ],
        ]
      },
      {
        title: "Maintenance Task Selection",
        backgroundColor: "#f5eafa",
        borderColor: "#912BBC",
        headRow: 2,
        head: [
          "No",
          "Part",
          "Failure Mode",
          ["Risk Characterization", ["CoF", "Rec PoF", "Current Risk"]],
          ["Task Selection", ["Proposed Action (s)", "Proj PoF", "Proj Risk"]],
        ],
        body: [
          [
            "1a",
            "rotor",
            "Overheats",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Implement routine cleaning and lubrication schedule for rotor components.",
                "Apply moisture barriers and Corroded-resistant coatings.",
                "Schedule regular replacement of lubricants and bearings."		
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "1b",
            "rotor",
            "Worn",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Implement routine cleaning and lubrication schedule for motor bearings.",
                "Apply moisture barriers and Corroded-resistant coatings.",
                "Schedule regular replacement of lubricants and bearings."		
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "1c",
            "rotor",
            "Leaking",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "dot",
              text: [
                "Apply moisture barriers and Corroded-resistant coatings.",
                "Implement routine cleaning and inspection schedule for electrical connections.",
                "Schedule regular replacement of motor windings and insulation.",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "2a",
            "Coils",
            "Overheats",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Implement routine cleaning and maintenance schedule for coil surfaces.",
                "Apply UV-C or other disinfection methods.",
                "Use protective coatings and Corroded-resistant materials.",				
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "2b",
            "Coils",
            "Corroded",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Apply protective coatings and use Corroded-resistant materials.",
                "Apply Corroded-resistant coatings specifically for coils.",
                "Implement UV-C or other disinfection methods.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "2c",
            "Coils",
            "Leaking",
            "1",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                "Implement regular inspection and maintenance to detect and repair refrigerant leaks.",
                "Implement routine cleaning and maintenance schedule for coil surfaces and surrounding areas.",
                "Apply UV-C or other disinfection methods.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "3a",
            "Air Filter",
            "Clogging",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                "Implement routine cleaning or replacement schedule for air filters.",
                "Apply UV-C or other disinfection methods.",
                "Use Corroded-resistant filter materials and housings.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "3b",
            "Air Filter",
            "Cracked",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Implement routine cleaning or replacement schedule for air filters.",
                "Apply UV-C or other disinfection methods.",
                "Use Corroded-resistant filter materials and housings.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "3c",
            "Air Filter",
            "Corroded",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                "Use Corroded-resistant filter materials and housings.",
                "Apply UV-C or other disinfection methods.",
                "Use Corroded-resistant filter materials and housings (duplicate action).",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "4a",
            "Gear",
            "Worn",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Implement routine lubrication and inspection schedule for gear components.",
                "Apply proper sealing and contamination prevention measures.",
                "Use Corroded-resistant coatings and materials for gears.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "4b",
            "Gear",
            "Misalignment",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Implement routine lubrication and inspection schedule for gear components.",
                "Apply proper sealing and contamination prevention measures.",
                "Use Corroded-resistant coatings and materials for gears.",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "4c",
            "Gear",
            "Leaking",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "dot",
              text: [
                "Implement routine maintenance schedule for valve cleaning to remove debris, sediment, or scale.",
                "Implement routine lubrication and inspection schedule for gear components.",
                "Apply proper sealing and contamination prevention measures.",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
        ]
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
              text: ["immediately clean and re-lubricate the rotor, apply a moisture barrier, and replace any corroded or damaged bearings."]
            },
            "CM/PM",
            ["1.1", "1.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "500 hours and/or Performed on: Damage or performance degradation detection test When corrosion or bearing damage occurs",
            "-",
            "It ensures the rotor operates efficiently and prevents further damage by replacing corroded or damaged bearings promptly.",
          ],
          [
            { 
              type: "dot", 
              text: ["promptly clean and re-lubricate the bearings, apply a corrosion-resistant coating, and replace the damaged bearings."]
            },
            "CM/PM",
            ["2.1", "2.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "250 hours and/or Performed on: Bearing inspection or performance issues When bearing corrosion or damage is detected",
            "-",
            "Applying a corrosion-resistant coating and replacing damaged bearings are critical steps for long-term durability and performance.",
          ],
          [
            { 
              type: "dot", 
              text: ["clean and lubricate rotor components, repair moisture barriers, apply corrosion-resistant coatings, and replace failed lubricants and bearings"]
            },
            "CM/PM",
            ["3.1", "3.2"],
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "1000 hours and/or Performed on: Implementing moisture barriers and corrosion-resistant coatings:",
            "-",
            "It ensures the rotor operate smoothly and have a longer service life.",
          ],
          [
            { 
              type: "dot", 
              text: ["clean and disinfect the coils using UV-C methods, apply a protective coating, and replace any damaged coil sections with corrosion-resistant materials."]
            },
            "CM/PM",
            ["4.1", "4.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "1000 hours and/or Performed on: Coil condition assessment When coil contamination or damage occurs",
            "-",
            "The use of UV-C disinfection and corrosion-resistant materials helps ensure both hygiene and durability.",
          ],
          [
            { 
              type: "dot", 
              text: ["apply protective coatings to the affected coils, replace damaged coil sections with corrosion-resistant materials, and disinfect the area using UV-C methods."]
            },
            "OTC",
            ["5.1", "5.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "500 hours and/or Performed on: Coil damage or contamination inspection When damage or corrosion is detected",
            "-",
            "Applying protective coatings and replacing damaged sections with corrosion-resistant materials help prevent future issues, while UV-C disinfection ensures the area remains hygienic.",
          ],
          [
            { 
              type: "dot", 
              text: ["immediately repair the leak, clean and disinfect the coil surfaces and surrounding areas using UV-C methods, and ensure proper sealing of the repaired area."]
            },
            "CM/PM",
            ["6.1", "6.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "200 hours and/or Performed on: Filter damage or performance issues When a filter is found to be damaged or contaminated",
            "-",
            "Immediate attention to the leak and thorough disinfection with UV-C methods are crucial for preventing further issues and maintaining system integrity.",
          ],
          [
            { 
              type: "dot", 
              text: ["replace the filter with a corrosion-resistant one, clean the filter housing, and disinfect the area using UV-C methods to prevent further contamination."]
            },
            "CM/PM",
            ["7.1", "7.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "200 hours and/or Performed on: Filter inspection or clogging When filter damage or contamination occurs",
            "-",
            "Using a corrosion-resistant filter and disinfecting with UV-C methods ensures that the system remains efficient and free from contamination.",
          ],
          [
            { 
              type: "dot", 
              text: ["immediately replace it with a corrosion-resistant alternative, clean the housing, and use UV-C disinfection to ensure cleanliness."]
            },
            "CM/PM",
            ["8.1", "8.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "200 hours and/or Performed on: Filter damage or performance issues When a filter is found to be damaged or contaminated",
            "-",
            "Using corrosion-resistant materials and UV-C disinfection ensures that the replacement part functions optimally and prevents future contamination.",
          ],
          [
            { 
              type: "dot", 
              text: ["replace them with corrosion-resistant ones, clean the housing, and disinfect using UV-C methods to maintain hygiene."]
            },
            "OTC",
            ["9.1", "9.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "200 hours and/or Performed on: Filter inspection or contamination check When filter corrosion or damage is detected",
            "-",
            "Regular cleaning and UV-C disinfection help maintain hygiene and system efficiency.",
          ],
          [
            { 
              type: "dot", 
              text: ["lubricate and inspect the gears, apply proper seals, and replace damaged gears with corrosion-resistant alternatives."]
            },
            "CM/PM",
            ["10.1", "10.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "1000 hours and/or Performed on: Gear inspection or performance review When gear damage or wear is detected",
            "-",
            "It ensures the gears operate smoothly and have a longer service life.",
          ],
          [
            { 
              type: "dot", 
              text: ["re-lubricate the gear components, ensure proper sealing to prevent contamination, and replace damaged gears with corrosion-resistant materials."]
            },
            "CM/PM",
            ["11.1", "11.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "500 hours and/or Performed on: Gear component inspection or lubrication check When gears are found to be damaged or contaminated",
            "-",
            "Proper sealing and corrosion-resistant materials are crucial for maintaining gear performance and longevity.",
          ],
          [
            { 
              type: "dot", 
              text: ["flush or clean the valve to remove debris, re-lubricate the gear components, apply proper sealing, and replace any damaged parts with corrosion-resistant materials."]
            },
            "CM/PM",
            ["12.1", "12.2"],
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "1000 hours and/or Performed on: Valve inspection or maintenance schedule When valve debris or gear damage is detected",
            "-",
            "It ensures both the valve and gear components are well-maintained and protected against future issues.",
          ],
        ],
      },
    ]
  },
  {
    slug: "air-handling-unit-5",
    type: "COOLING_SYSTEM",
    specs: {
      functionalGroup: "Propulsion Function Group",
      system: "Diesel Engine",
      subsystem: "Cooling System",
      equipmentID: "CO-AHU-05",
      equipmentName: "Air Handling Unit",
      drawing: "Cooling System",
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
            "serves as the central component responsible for the circulation, temperature regulation, and filtration of air throughout the vessel.",
            "Primary",
            ["1,1", "1,2"],
            [
              "Failed to compromised ventilation and cooling performance (Total Failure)",
              "inadequate ventilation and reduced cooling efficiency, within capacity less than 6500 CFM (Partial Failure)"
            ],
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
          "Part",
          "Failure Mode",
          "Causes",
          "Failure Charasteristic",
          "Local Effect",
          "Functional Failure",
        ],
        body: [
          [
            "1a",
            "rotor",
            "Overheats",
            [
              "1.1 Moisture ingress: Entry of moisture into the motor winding can compromise insulation integrity and cause breakdown.",
              "1.2 Voltage spikes: Sudden voltage surges can exceed the insulation's dielectric strength, leading to insulation breakdown."
            ],
            ["Random","Random"],
            {
              type: "number",
              text: [
                "Formation of hotspots",
                "Potential arcing",
              ]
            },
            "1.1 Failed to compromised ventilation and cooling performance"
          ],
          [
            "1b",
            "rotor",
            "Worn",
            [
              "2.1 Lack of lubrication: Inadequate lubrication of the motor bearings can lead to increased friction and heat generation, accelerating wear and potentially causing bearing failure.",
              "2.2  Contamination by foreign particles: Entry of dirt, dust, or other foreign particles into the bearing assembly can cause abrasion and scoring of bearing surfaces, leading to premature wear and eventual failure."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "inncreased friction and heat generation within the bearings  ",
                "Abrasion and scoring of bearing surfaces due to foreign particle ingress",
              ]
            },
            "1.1 Failed to compromised ventilation and cooling performance"
          ],
          [
            "1c",
            "rotor",
            "Leaking",
            [
              "3.1 Exposure to moisture and corrosive elements: Moisture and corrosive elements can infiltrate the motor's electrical components, such as terminals and wiring, leading to degradation of insulation materials and increased conductivity between electrical paths.",
              "3.2 Build-up of conductive contaminants: Over time, dust, dirt, and other conductive contaminants can accumulate on electrical connections, creating a pathway for electricity to flow where it shouldn't, increasing resistance, and generating heat."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Increased risk of short circuits",
                "Accumulation of dust and debris on electrical connections",
              ]
            },
            "1.1 Failed to compromised ventilation and cooling performance"
          ],
          [
            "2a",
            "Coils",
            "Overheats",
            [
              "4.1  Overloading: Operating the coils beyond their rated capacity can lead to excessive heat generation and overheating.",
              "4.2  Poor ventilation: Inadequate airflow around the coils restricts heat dissipation, causing temperature buildup."
            ],
            ["Random","Wear-out"],
            {
              type: "number",
              text: [
                "Localized temperature rise",
                "Thermal expansion",
              ]
            },
            "1.2 inadequate ventilation and reduced cooling efficiency, within capacity less than 6500 CFM (Partial Failure)"
          ],
          [
            "2b",
            "Coils",
            "Corroded",
            [
              "5.1  Exposure to corrosive environments: Exposure of the coils to corrosive environments, such as saltwater or chemical fumes, can lead to Corroded of coil surfaces and degradation of coil materials.",
              "5.2  Inadequate protective coatings or sealing: Lack of proper protective coatings or sealing on coil surfaces leaves them vulnerable to Corroded from environmental exposure, accelerating material degradation."
            ],
            ["Wear-out","Random"],
            {
              type: "number",
              text: [
                "Formation of rust or Corroded pits on coil surfaces",
                "Thinning or weakening of coil material due to Corroded",
              ]
            },
            "1.1 Failed to compromised ventilation and cooling performance"
          ],
          [
            "2c",
            "Coils",
            "Leaking",
            [
              "6.2  Blockage of airflow due to dirt accumulation: Accumulation of dirt, dust, and other debris on the coils can obstruct airflow, reducing heat transfer efficiency and causing the coil surface temperatures to drop, leading to freezing.",
              "6.2  Blockage of airflow due to dirt accumulation: Accumulation of dirt, dust, and other debris on the coils can obstruct airflow, reducing heat transfer efficiency and causing the coil surface temperatures to drop, leading to freezing."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Reduced heat absorption capacity of coils due to low refrigerant levels",
                "Hindered airflow and decreased heat transfer efficiency caused by dirt accumulation",
              ]
            },
            "1.2 inadequate ventilation and reduced cooling efficiency, within capacity less than 6500 CFM (Partial Failure)"
          ],
          [
            "3a",
            "Air Filter",
            "Clogging",
            [
              "7.1 Accumulation of airborne particles and debris: Continuous operation of the air filter in dusty or debris-laden environments leads to the accumulation of airborne particles and debris on the filter media, gradually reducing airflow.",
              "7.2   Inadequate filter maintenance or replacement intervals: Failure to perform regular filter maintenance or replace clogged filters according to recommended intervals allows debris accumulation to reach levels that impede airflow and filtration efficiency."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Gradual reduction in airflow through the filter media",
                " Increased pressure drop across the filter",
              ]
            },
            "1.1 Failed to compromised ventilation and cooling performance"
          ],
          [
            "3b",
            "Air Filter",
            "Cracked",
            [
              "8.1  High-pressure differential: Excessive pressure differential across the filter due to clogging or restricted airflow can lead to structural failure.",
              "8.2  Mechanical damage: Impact or mishandling during installation or maintenance can cause structural damage to the filter."
            ],
            ["Wear-out","Random"],
            {
              type: "number",
              text: [
                "Deformation or collapse",
                "Tearing or ripping",
              ]
            },
            "1.2 inadequate ventilation and reduced cooling efficiency, within capacity less than 6500 CFM (Partial Failure)  "
          ],
          [
            "3c",
            "Air Filter",
            "Corroded",
            [
              "9.1   Exposure to corrosive chemicals: Exposure to corrosive chemicals in the air or surrounding environment can lead to the deterioration of filter media, resulting in tears and holes that compromise filtration efficiency.",
              "9.2 Growth of mold and bacteria: Mold and bacteria growth on the air filter can block filter media and impede airflow, reducing filtration efficiency and promoting the spread of airborne contaminants.Growth of mold and bacteria"
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Deterioration of filter media, leading to increased bypass of contaminants",
                "Blockage of filter media and potential contamination of the air supply",
              ]
            },
            "1.1 Failed to compromised ventilation and cooling performance"
          ],
          [
            "4a",
            "Gear",
            "Worn",
            [
              "10.1  Inadequate lubricant quantity or quality: Insufficient lubricant quantity or use of low-quality lubricants in the gear assembly can result in inadequate lubrication film thickness, increasing friction and wear between gear surfaces.",
              "10.2  Contamination of lubricant by foreign particles: Entry of dirt, dust, or other foreign particles into the gear lubricant can cause abrasive wear on gear surfaces and breakdown of lubricant film, leading to increased friction and heat generation."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Increased friction and wear between gear surfaces",
                "Formation of abrasive particles or debris in the gear assembly",
              ]
            },
            "1.2 inadequate ventilation and reduced cooling efficiency, within capacity less than 6500 CFM (Partial Failure)"
          ],
          [
            "4b",
            "Gear",
            "Misalignment",
            [
              "11.1 Inadequate Lubrication: Insufficient lubrication between gear teeth leads to increased friction and accelerated wear.",
              "11.2  Contamination: Entry of abrasive particles or debris into the gear meshing area causes abrasive wear on gear teeth."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Surface Pitting and Scoring",
                "Material Removal and Deformation",
              ]
            },
            "Material Removal and Deformation"
          ],
          [
            "4c",
            "Gear",
            "Leaking",
            [
              "12.1 Lack of lubrication: Inadequate lubrication of gear components can lead to increased friction between gear teeth, accelerating wear and potentially causing mechanical failure.",
              "12.2  Corroded due to chemical exposure: Exposure to corrosive chemicals can deteriorate gear material, weakening the gear structure and increasing the risk of gear failure under load conditions."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Increased friction between gear teeth",
                "Abrasion and Corroded of gear surfaces due to the presence of contaminant",
              ]
            },
            "1.2 inadequate ventilation and reduced cooling efficiency, within capacity less than 6500 CFM (Partial Failure)"
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
          "Part",
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
            "1a",
            "rotor",
            "Overheats",
            "Short circuits: Insulation breakdown can result in short circuits within the motor winding, causing sudden motor failure and system downtime.",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Monitoring of motor temperature and abnormal noises.","Visual inspection for signs of Corroded and moisture ingress."],
            },
            "Regular cleaning and lubrication of rotor components..Implementing moisture barriers and Corroded-resistant coatings. Scheduled replacement of lubricants and bearings."
          ],
          [
            "1b",
            "rotor",
            "Worn",
            "Bearing seizure and motor shaft immobilization: Severe wear or damage to the bearings can result in bearing seizure, causing the motor shaft to become immobilized and leading to sudden motor failure.",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Monitoring of motor temperature and abnormal noises.",
                "Visual inspection for signs of Corroded and moisture ingress."
              ],
            },
            "Regular cleaning and lubrication of motor bearings. Implementing moisture barriers and Corroded-resistant coatings. Scheduled replacement of lubricants and bearings."
          ],
          [
            "1c",
            "rotor",
            "Leaking",
            "Sudden motor failure, potentially leading to system downtime and safety hazards: Electrical failure within the motor can result in the sudden cessation of motor operation, leading to system downtime and potential safety hazards, especially if the motor is critical for essential ship functions.",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: [
                "Regular inspection for signs of moisture ingress and Corroded on electrical components",
                "Monitoring of electrical connections for signs of overheating and voltage fluctuations."
              ],
            },
            "Implementing moisture barriers and Corroded-resistant coatings. Regular cleaning and inspection of electrical connections. Scheduled replacement of motor windings and insulation."
          ],
          [
            "2a",
            "Coils",
            "Overheats",
            "Coil damage: Prolonged overheating can cause damage to coil insulation and materials, compromising coil integrity and performance.",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Visual inspection of coil surfaces for dirt accumulation.",
                "Visual inspection for signs of microbial growth and musty odors."
              ],
            },
            "Regular cleaning and maintenance of coil surfaces. Implementing UV-C or other disinfection methods. Implementing protective coatings and Corroded-resistant materials."
          ],
          [
            "2b",
            "Coils",
            "Corroded",
            "Reduced coil efficiency and heat transfer capacity: Corroded-induced degradation of coil surfaces reduces their efficiency in transferring heat, leading to decreased system performance and potentially causing overheating.",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Visual inspection for signs of Corroded and structural weakness.",
                "Regular inspection for signs of Corroded and pitting on coil surfaces."
              ],
            },
            "'Implementing protective coatings and Corroded-resistant materials.Implementing Corroded-resistant coatings and materials for coils. Implementing UV-C or other disinfection methods."
          ],
          [
            "2c",
            "Coils",
            "Leaking",
            " Low refrigerant level due to leakage: Refrigerant leakage from the coils can result in a decreased heat absorption capacity, causing the temperature of the coils to drop below freezing point and leading to ice formation.",
            "1",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Monitoring of refrigerant levels and pressure differentials across the coil.",
                "Visual inspection for signs of dirt accumulation and temperature differentials across the coil."
              ],
            },
            "Regular inspection and maintenance to detect and repair refrigerant leaks.Regular cleaning and maintenance of coil surfaces and surrounding areas. Implementing UV-C or other disinfection methods."
          ],
          [
            "3a",
            "Air Filter",
            "Clogging",
            "Decreased indoor air quality or cooling system efficiency: Reduced airflow and filtration efficiency resulting from clogged filters lead to decreased indoor air quality or cooling system performance, potentially causing discomfort or health issues for occupants.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                " Monitoring of pressure differentials across the filter",
                "Visual inspection for signs of microbial growth and musty odors. 3. Regular inspection for signs of Corroded and structural weakness.."
              ],
            },
            "Regular cleaning or replacement of air filters. Implementing UV-C or other disinfection methods.Implementing Corroded-resistant filter materials and housings."
          ],
          [
            "3b",
            "Air Filter",
            "Cracked",
            "Loss of filtration efficiency: Structural failure compromises the integrity of the filter, reducing its ability to capture airborne contaminants effectively.",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Monitoring of pressure differentials across the filter",
                "Visual inspection for signs of microbial growth and musty odors.."
              ],
            },
            "Regular cleaning or replacement of air filters.Implementing UV-C or other disinfection methods.Implementing Corroded-resistant filter materials and housings."
          ],
          [
            "3c",
            "Air Filter",
            "Corroded",
            "Increased bypass of contaminants and reduced filtration efficiency: Damage to the air filter media allows contaminants to pass through the filter, reducing its ability to capture airborne particles and potentially compromising indoor air quality.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Regular inspection for signs of physical damage and structural weakness.",
                "Visual inspection for signs of microbial growth and musty odors."
              ],
            },
            "Implementing Corroded-resistant filter materials and housings.Implementing UV-C or other disinfection methods. Implementing Corroded-resistant filter materials and housings."
          ],
          [
            "4a",
            "Gear",
            "Worn",
            "Progressive wear and degradation of gear teeth: Continued friction and wear between gear surfaces result in progressive damage and degradation of gear teeth, leading to reduced gear efficiency and potential gear failure.",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Monitoring of gear temperature and vibration levels.",
                "Visual inspection for signs of contamination and wear on gear surfaces."
              ],
            },
            "Scheduled lubrication and inspection of gear components. Implementing proper sealing and contamination prevention measures.Implementing Corroded-resistant coatings and materials for gears."
          ],
          [
            "4b",
            "Gear",
            "Misalignment",
            "Reduced Gear Efficiency: Tooth wear decreases gear efficiency and transmission accuracy, resulting in reduced system performance.",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Monitoring of gear temperature and vibration levels.",
                "Visual inspection for signs of contamination and wear on gear surfaces."
              ],
            },
            "Scheduled lubrication and inspection of gear components.Implementing proper sealing and contamination prevention measures.Implementing Corroded-resistant coatings and materials for gears."
          ],
          [
            "4c",
            "Gear",
            "Leaking",
            "Gradual loss of gear efficiency and potential mechanical failure: Increased wear and deterioration of gear components lead to a gradual loss of gear efficiency, potentially resulting in gear failure and system downtime.",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: [
                "Monitoring of gear temperature and vibration levels.",
                "Visual inspection for signs of contamination and wear on gear surfaces."
              ],
            },
            "Regular inspection- Regular Cleaning: Implement a routine maintenance schedule to flush or clean the valve to remove accumulated debris, sediment, or scale Scheduled lubrication and inspection of gear components. Implementing proper sealing and contamination prevention measures. Implementing Corroded-resistant coatings and materials for gears."
          ],
        ]
      },
      {
        title: "Maintenance Task Selection",
        backgroundColor: "#f5eafa",
        borderColor: "#912BBC",
        headRow: 2,
        head: [
          "No",
          "Part",
          "Failure Mode",
          ["Risk Characterization", ["CoF", "Rec PoF", "Current Risk"]],
          ["Task Selection", ["Proposed Action (s)", "Proj PoF", "Proj Risk"]],
        ],
        body: [
          [
            "1a",
            "rotor",
            "Overheats",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Implement routine cleaning and lubrication schedule for rotor components.",
                "Apply moisture barriers and Corroded-resistant coatings.",
                "Schedule regular replacement of lubricants and bearings."		
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "1b",
            "rotor",
            "Worn",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Implement routine cleaning and lubrication schedule for motor bearings.",
                "Apply moisture barriers and Corroded-resistant coatings.",
                "Schedule regular replacement of lubricants and bearings."		
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "1c",
            "rotor",
            "Leaking",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "dot",
              text: [
                "Apply moisture barriers and Corroded-resistant coatings.",
                "Implement routine cleaning and inspection schedule for electrical connections.",
                "Schedule regular replacement of motor windings and insulation.",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "2a",
            "Coils",
            "Overheats",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Implement routine cleaning and maintenance schedule for coil surfaces.",
                "Apply UV-C or other disinfection methods.",
                "Use protective coatings and Corroded-resistant materials.",				
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "2b",
            "Coils",
            "Corroded",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Apply protective coatings and use Corroded-resistant materials.",
                "Apply Corroded-resistant coatings specifically for coils.",
                "Implement UV-C or other disinfection methods.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "2c",
            "Coils",
            "Leaking",
            "1",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                "Implement regular inspection and maintenance to detect and repair refrigerant leaks.",
                "Implement routine cleaning and maintenance schedule for coil surfaces and surrounding areas.",
                "Apply UV-C or other disinfection methods.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "3a",
            "Air Filter",
            "Clogging",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                "Implement routine cleaning or replacement schedule for air filters.",
                "Apply UV-C or other disinfection methods.",
                "Use Corroded-resistant filter materials and housings.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "3b",
            "Air Filter",
            "Cracked",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Implement routine cleaning or replacement schedule for air filters.",
                "Apply UV-C or other disinfection methods.",
                "Use Corroded-resistant filter materials and housings.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "3c",
            "Air Filter",
            "Corroded",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                "Use Corroded-resistant filter materials and housings.",
                "Apply UV-C or other disinfection methods.",
                "Use Corroded-resistant filter materials and housings (duplicate action).",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "4a",
            "Gear",
            "Worn",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Implement routine lubrication and inspection schedule for gear components.",
                "Apply proper sealing and contamination prevention measures.",
                "Use Corroded-resistant coatings and materials for gears.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "4b",
            "Gear",
            "Misalignment",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Implement routine lubrication and inspection schedule for gear components.",
                "Apply proper sealing and contamination prevention measures.",
                "Use Corroded-resistant coatings and materials for gears.",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "4c",
            "Gear",
            "Leaking",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "dot",
              text: [
                "Implement routine maintenance schedule for valve cleaning to remove debris, sediment, or scale.",
                "Implement routine lubrication and inspection schedule for gear components.",
                "Apply proper sealing and contamination prevention measures.",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
        ]
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
              text: ["immediately clean and re-lubricate the rotor, apply a moisture barrier, and replace any corroded or damaged bearings."]
            },
            "CM/PM",
            ["1.1", "1.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "500 hours and/or Performed on: Damage or performance degradation detection test When corrosion or bearing damage occurs",
            "-",
            "It ensures the rotor operates efficiently and prevents further damage by replacing corroded or damaged bearings promptly.",
          ],
          [
            { 
              type: "dot", 
              text: ["promptly clean and re-lubricate the bearings, apply a corrosion-resistant coating, and replace the damaged bearings."]
            },
            "CM/PM",
            ["2.1", "2.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "250 hours and/or Performed on: Bearing inspection or performance issues When bearing corrosion or damage is detected",
            "-",
            "Applying a corrosion-resistant coating and replacing damaged bearings are critical steps for long-term durability and performance.",
          ],
          [
            { 
              type: "dot", 
              text: ["clean and lubricate rotor components, repair moisture barriers, apply corrosion-resistant coatings, and replace failed lubricants and bearings"]
            },
            "CM/PM",
            ["3.1", "3.2"],
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "1000 hours and/or Performed on: Implementing moisture barriers and corrosion-resistant coatings:",
            "-",
            "It ensures the rotor operate smoothly and have a longer service life.",
          ],
          [
            { 
              type: "dot", 
              text: ["clean and disinfect the coils using UV-C methods, apply a protective coating, and replace any damaged coil sections with corrosion-resistant materials."]
            },
            "CM/PM",
            ["4.1", "4.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "1000 hours and/or Performed on: Coil condition assessment When coil contamination or damage occurs",
            "-",
            "The use of UV-C disinfection and corrosion-resistant materials helps ensure both hygiene and durability.",
          ],
          [
            { 
              type: "dot", 
              text: ["apply protective coatings to the affected coils, replace damaged coil sections with corrosion-resistant materials, and disinfect the area using UV-C methods."]
            },
            "OTC",
            ["5.1", "5.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "500 hours and/or Performed on: Coil damage or contamination inspection When damage or corrosion is detected",
            "-",
            "Applying protective coatings and replacing damaged sections with corrosion-resistant materials help prevent future issues, while UV-C disinfection ensures the area remains hygienic.",
          ],
          [
            { 
              type: "dot", 
              text: ["immediately repair the leak, clean and disinfect the coil surfaces and surrounding areas using UV-C methods, and ensure proper sealing of the repaired area."]
            },
            "CM/PM",
            ["6.1", "6.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "200 hours and/or Performed on: Filter damage or performance issues When a filter is found to be damaged or contaminated",
            "-",
            "Immediate attention to the leak and thorough disinfection with UV-C methods are crucial for preventing further issues and maintaining system integrity.",
          ],
          [
            { 
              type: "dot", 
              text: ["replace the filter with a corrosion-resistant one, clean the filter housing, and disinfect the area using UV-C methods to prevent further contamination."]
            },
            "CM/PM",
            ["7.1", "7.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "200 hours and/or Performed on: Filter inspection or clogging When filter damage or contamination occurs",
            "-",
            "Using a corrosion-resistant filter and disinfecting with UV-C methods ensures that the system remains efficient and free from contamination.",
          ],
          [
            { 
              type: "dot", 
              text: ["immediately replace it with a corrosion-resistant alternative, clean the housing, and use UV-C disinfection to ensure cleanliness."]
            },
            "CM/PM",
            ["8.1", "8.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "200 hours and/or Performed on: Filter damage or performance issues When a filter is found to be damaged or contaminated",
            "-",
            "Using corrosion-resistant materials and UV-C disinfection ensures that the replacement part functions optimally and prevents future contamination.",
          ],
          [
            { 
              type: "dot", 
              text: ["replace them with corrosion-resistant ones, clean the housing, and disinfect using UV-C methods to maintain hygiene."]
            },
            "OTC",
            ["9.1", "9.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "200 hours and/or Performed on: Filter inspection or contamination check When filter corrosion or damage is detected",
            "-",
            "Regular cleaning and UV-C disinfection help maintain hygiene and system efficiency.",
          ],
          [
            { 
              type: "dot", 
              text: ["lubricate and inspect the gears, apply proper seals, and replace damaged gears with corrosion-resistant alternatives."]
            },
            "CM/PM",
            ["10.1", "10.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "1000 hours and/or Performed on: Gear inspection or performance review When gear damage or wear is detected",
            "-",
            "It ensures the gears operate smoothly and have a longer service life.",
          ],
          [
            { 
              type: "dot", 
              text: ["re-lubricate the gear components, ensure proper sealing to prevent contamination, and replace damaged gears with corrosion-resistant materials."]
            },
            "CM/PM",
            ["11.1", "11.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "500 hours and/or Performed on: Gear component inspection or lubrication check When gears are found to be damaged or contaminated",
            "-",
            "Proper sealing and corrosion-resistant materials are crucial for maintaining gear performance and longevity.",
          ],
          [
            { 
              type: "dot", 
              text: ["flush or clean the valve to remove debris, re-lubricate the gear components, apply proper sealing, and replace any damaged parts with corrosion-resistant materials."]
            },
            "CM/PM",
            ["12.1", "12.2"],
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "1000 hours and/or Performed on: Valve inspection or maintenance schedule When valve debris or gear damage is detected",
            "-",
            "It ensures both the valve and gear components are well-maintained and protected against future issues.",
          ],
        ],
      },
    ]
  },
  {
    slug: "circulating-pump-1",
    type: "COOLING_SYSTEM",
    specs: {
      functionalGroup: "Propulsion Function Group",
      system: "Diesel Engine",
      subsystem: "Cooling System",
      equipmentID: "CO-CIP-01",
      equipmentName: "Ciculating Pump",
      drawing: "Cooling System",
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
            "Circulate coolant throughout various components of the ship's cooling system, ensuring optimal operating temperatures and preventing overheating of critical machinery and systems, within specification Capacity 100 M3/H, Head 20m.",
            "Primary",
            ["1,1", "1,2"],
            [
              "No pumping water to initiate coolant circulation (Total Failure)",
              "Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
            ],
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
          "Part",
          "Failure Mode",
          "Causes",
          "Failure Charasteristic",
          "Local Effect",
          "Functional Failure",
        ],
        body: [
          [
            "1a",
            " Pump Casing",
            "Corroded",
            [
              "1.1 Mechanical Stress: Operating conditions such as vibration, pressure changes, and mechanical shocks can subject the casing to mechanical stress. Over time, this stress can cause deformation, especially if the casing material is not sufficiently robust.",
              "1.2 Age and Wear: Like any other equipment on a ship, Cooling pumps and their casings are subject to wear and tear over time. With age, the protective coatings on the casing may degrade, making it more susceptible to corrosion"
            ],
            ["Random","Wear-out"],
            {
              type: "number",
              text: [
                "Reduced Pump Efficiency",
                "Pump Operation with Vibration and Noise",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "1b",
            " Pump Casing",
            "Fractured",
            [
              "2.1 Mechanical Stress: The casing may experience mechanical stress due to factors such as vibration, shock loads, or impacts during normal operation or in rough sea conditions. Over time, this stress can lead to fatigue and eventually fracture of the casing.",
              "2.2  Overloading: If the Cooling pump is subjected to loads beyond its design capacity, such as excessive pressure or flow rate, it can put undue stress on the casing, leading to fracture."
            ],
            ["Random","Random"],
            {
              type: "number",
              text: [
                "Reduced Efficiency",
                "Material Weakening",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "1c",
            " Pump Casing",
            "Deformed",
            [
              "3.1 Mechanical Stress: Operating conditions such as vibration, pressure changes, and mechanical shocks can subject the casing to mechanical stress. Over time, this stress can cause deformation, especially if the casing material is not sufficiently robust.",
              "3.2 Corrosion: Continuous exposure to seawater and other corrosive substances can lead to the corrosion of metal casings over time. Corrosion weakens the structural integrity of the casing, making it susceptible to deformation."
            ],
            ["Random","Wear-out"],
            {
              type: "number",
              text: [
                "Reduced Pump Efficiency",
                "Immediate Loss of Functionality",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "2a",
            "Impeller",
            "Corroded",
            [
              "4.1 High Temperatures: Elevated temperatures in the Cooling area, either due to the pump's operation or nearby machinery, can accelerate corrosion processes, especially if combined with other factors like saltwater exposure or chemical contamination.",
              "4.2  Saltwater Exposure: Ships operate in a highly corrosive environment due to constant exposure to saltwater. If the Cooling pump is not adequately protected or made from corrosion-resistant materials, saltwater exposure can lead to corrosion of the impeller over time."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Reduced Efficiency",
                "Material Weakening",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "2b",
            "Impeller",
            "Fractured",
            [
              "5.1 Material Fatigue: Continuous operation of the Cooling pump impeller can subject it to repeated cycles of stress, leading to material fatigue over time. This fatigue can weaken the material structure of the impeller, eventually resulting in cracks or fractures.",
              "5.2  Impact or Mechanical Damage: External factors such as collisions, debris ingestion, or abrasive wear can cause physical damage to the impeller, resulting in cracks or fractures. Impact from foreign objects or sudden changes in operating conditions can lead to immediate failure or accelerate existing damage."
            ],
            ["Wear-out","Random"],
            {
              type: "number",
              text: [
                "Reduced Pump Efficiency",
                "Immediate Loss of Functionality",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "2c",
            "Impeller",
            "Deformed",
            [
              "6.1  Mechanical Stress: Continuous operation of the Cooling pump can subject the impeller to mechanical stress, especially if it encounters high fluid flow rates or pressure. Over time, this stress can cause the impeller to deform, particularly in areas where the material is weaker or subjected to uneven loading.",
              "6.2  Overloading: Excessive loads on the Cooling pump system, such as sudden surges in fluid volume or pressure, can exceed the impeller's design limits and cause deformation. This can occur due to factors like blockages in the pump, changes in fluid viscosity, or improper pump operation."
            ],
            ["Wear-out","Random"],
            {
              type: "number",
              text: [
                "Vibration and Noise",
                "Reduced Pump Efficiency",
              ]
            },
            [
              "1.1 No Pumping water to initiate coolant circulation (Total Failure)",
              "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
            ]  
          ],
          [
            "3a",
            "Bearing",
            "Cracked",
            [
              "7.1 Impact or Mechanical Damage: External factors like impacts from debris or improper handling during maintenance procedures can cause mechanical damage to the bearings, resulting in cracks.",
              "7.2  Fatigue: Over time, repeated stress cycles experienced by the bearings during pump operation can weaken the material, leading to microscopic cracks that propagate and eventually result in visible cracks."
            ],
            ["Random","Wear-out"],
            {
              type: "number",
              text: [
                "Increased Operating Temperature",
                "Structural Damage",
              ]
            },
            [
              "1.1 No Pumping water to initiate coolant circulation (Total Failure)",
              "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
            ]
          ],
          [
            "3b",
            "Bearing",
            "Contaiminated",
            [
              "8.1  Ingress of Foreign Particles: Small particles such as dirt, sand, debris, or rust can enter the bearing housing, especially if the pump is operating in a harsh environment or if seals are compromised. These particles can contaminate the lubricant and cause abrasive wear on the bearing surfaces.",
              "8.2   Oil or Fuel Leakage: Leakage of oil or fuel from nearby machinery or systems can contaminate the bearing. Oil or fuel contamination can degrade the lubricant's effectiveness, leading to increased friction and wear on the bearing surfaces."
            ],
            ["Random","Random"],
            {
              type: "number",
              text: [
                " Increased Friction and Wear",
                "Reduced Efficiency",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "3c",
            "Bearing",
            "Fractured",
            [
              "9.1   .Overloading: Excessive loads on the bearing beyond its designed capacity can lead to fractures. This can happen due to sudden surges in pump operation, such as during startup or when pumping against high resistance, causing stress concentrations and eventual fracture.",
              "9.2 Fatigue: Prolonged cyclic loading and unloading of the bearing during normal pump operation can lead to fatigue failure over time. This is particularly common in bearings subjected to repeated stress cycles, causing microscopic cracks to form and propagate until complete fracture occurs."
            ],
            ["Random","Wear-out"],
            {
              type: "number",
              text: [
                "Immediate Loss of Functionality",
                "Vibration and Noise",
              ]
            },
            [
              "1.1 No Pumping water to initiate coolant circulation (Total Failure)",
              "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
            ]
          ],
          [
            "4a",
            "Shaft Seal Cover",
            "Corroded",
            [
              "10.1 Exposure to Corrosive Substances: The seal may come into contact with corrosive substances present in the Cooling water, such as saltwater, chemicals, or pollutants. Prolonged exposure to these corrosive agents can degrade the seal material and lead to corrosion.",
              "10.2   High Temperatures and Pressure: Elevated temperatures and pressures within the Cooling pump system can accelerate corrosion processes, particularly if the seal material is not resistant to these conditions."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Corrosion weakens the structural integrity",
                "Reduced Seal Performance",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "4b",
            "GearShaft Seal Cover",
            "Fractured",
            [
              "11.1 Material Fatigue: Over time, repeated stress cycles can weaken the seal material, leading to microscopic cracks that propagate and eventually result in a fracture. This fatigue can occur due to the cyclical pressure changes experienced during pump operation.",
              "11.2  Impact or Mechanical Damage: External factors such as impacts from debris or improper handling during maintenance procedures can cause mechanical damage to the seal, resulting in fractures."
            ],
            ["Wear-out","Random"],
            {
              type: "number",
              text: [
                "fractured seal compromises",
                "Reduced Seal Performance",
              ]
            },
            [

              "1.1 No Pumping water to initiate coolant circulation (Total Failure)",
              "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
            ]
          ],
          [
            "4c",
            "Shaft Seal Cover",
            "Worn",
            [
              "12.1 Abrasion: Continuous contact between the seal and rotating shaft can lead to abrasive wear over time. Particles present in the Cooling water, such as sand, sediment, or debris, can cause abrasive damage to the seal surface, leading to wear",
              "12.2  Corrosion: Exposure to corrosive substances in the Cooling water, such as saltwater or chemicals, can corrode the seal material, leading to localized material degradation and wear. Corrosion weakens the seal's structural integrity and can accelerate wear, particularly in areas with high stress concentrations."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Reduced Pump Performance",
                "Vibration and Noise",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "5a",
            "Shaft",
            "Corroded",
            [
              "13.1 Improper Material Selection: Choosing materials for the shaft that are not resistant to corrosion or incompatible with the Cooling environment can promote corrosion and accelerate its progression.",
              "13.2  High Humidity and Temperature: Elevated humidity levels and fluctuating temperatures in the Cooling area can create conducive conditions for corrosion to occur on the shaft surface.",
              "14.1 Fatigue: Prolonged cyclic loading and unloading of the shaft during pump operation can lead to fatigue failure, causing microscopic cracks to form and propagate over time until a fracture occurs."
            ],
            ["Wear-in","Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Reduced Strength",
                "Impeller Misalignment",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "5b",
            "Shaft",
            "Fractured",
            [
              "14.1 Fatigue: Prolonged cyclic loading and unloading of the shaft during pump operation can lead to fatigue failure, causing microscopic cracks to form and propagate over time until a fracture occurs.",
              "14.2  Corrosion: Corrosive substances present in the Cooling water can degrade the shaft material, reducing its structural integrity and making it more susceptible to fracture failure."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Loss of Functionality",
                "Immediate Loss of Functionality",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "5c",
            "Shaft",
            "Worn",
            [
              "15.1   Abrasion: Continuous contact with abrasive particles present in the Cooling water, such as sand, sediment, or debris, can gradually wear down the surface of the shaft. This abrasion occurs over time and can lead to the thinning of the shaft diameter or the formation of grooves and pits on its surface.",
              "15.2 Corrosion: Exposure to corrosive substances present in the Cooling water, such as saltwater or chemicals, can corrode the shaft material, leading to localized wear and pitting. Corrosion-induced wear weakens the shaft's structural integrity and accelerates its deterioration."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Reduced Efficiency",
                "Seal Leakage",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
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
          "Part",
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
            "1a",
            "Pump Casing",
            "Corroded",
            "Pump Failure: Progressive corrosion of the pump casing weakens the structural integrity of the casing, eventually leading to catastrophic failure, pump malfunction, or complete breakdown, resulting in system downtime and loss of cooling capacity.",
            "1",
            "2",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Leakage from cooling Pump",
                "Decrease flow rate from cooling Pump."
              ],
            },
            "prevent or mitigate corrosion of cooling pump casings, proper maintenance, regular inspections, and use of corrosion-resistant materials are essential."
          ],
          [
            "1b",
            " Pump Casing",
            "Fractured",
            "Environmental Contamination: Fluid leakage from fractured pump casings can contaminate the surrounding environment, posing environmental hazards and safety risks to onboard personnel and marine ecosystems.Bearing seizure and motor shaft immobilization: Severe wear or damage to the bearings can result in bearing seizure, causing the motor shaft to become immobilized and leading to sudden motor failure.",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Decrease flow rate from cooling Pump",
                "No flow from cooling Pump."
              ],
            },
            "To prevent casing fracture of cooling pumps on ships, it's important to adhere to proper installation procedures, conduct regular inspections for signs of stress or damage, and ensure that the pump is operated within its design limits."
          ],
          [
            "1c",
            " Pump Casing",
            "Deformed",
            "pump Malfunction: Deformed pump casings disrupt the normal operation of the circulating pump, resulting in reduced coolant circulation, loss of system efficiency, and potential pump failure, leading to cooling system downtime and operational disruptions.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Bend, crack, casing material",
                "Decrease flow rate from cooling pump."
              ],
            },
            "Recommended to conduct regular inspections, enhance material selection for casing construction, optimize operating conditions, improve installation practices, enhance maintenance procedures"
          ],
          [
            "2a",
            "Impeller",
            "Corroded",
            "Increased Maintenance Costs: Corrosion-related pump failures necessitate costly repairs or replacements, as well as associated labor and downtime expenses, increasing maintenance costs and disrupting vessel operations.",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                " Decrease cooling pump performance",
                " Visible corrosion",
                "Increase noise and vibration."
              ],
            },
            "Assess the damage and consider replacing it with a corrosion-resistant impeller. Implement regular maintenance and consider applying corrosion-resistant coatings. Monitor for future corrosion for sustained pump performance."
          ],
          [
            "2b",
            "Impeller",
            "Fractured",
            "Pump Failure: Fractured pump casings jeopardize the structural integrity of the circulating pump, resulting in pump malfunction, reduced coolant circulation, and eventual pump failure, leading to system downtime and loss of cooling capacity.",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Decrease cooling pump performance",
                "No flow from cooling Pump."
              ],
            },
            "If the impeller of a cooling pump is fractured, it must be swiftly replaced to maintain pump functionality. Prioritize the installation of a new, intact impeller and conduct regular inspections to prevent future fractures."
          ],
          [
            "2c",
            "Impeller",
            "Deformed",
            "Increased Risk of heating: Inadequate cooling water removal due to impeller deformation increases the risk of heating in critical areas of the ship. This poses a safety hazard to the crew, passengers, and cargo, potentially compromising the vessel's seaworthiness and stability.",
            "1",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Decrease cooling pump performance",
                "Noise and vibration."
              ],
            },
            "Replace the deformed impeller promptly with a new one to maintain optimal performance. Regular inspections and monitoring can help detect deformities early on, preventing further issues."
          ],
          [
            "3a",
            "Bearing",
            "Cracked",
            "Compromise structural integrity and load-bearing capacity, leading to progressive deterioration and eventual catastrophic failure, resulting in pump malfunction and system downtime.",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: [
                "Visbile abnormal crack",
                "Vibration abnormal."
              ],
            },
            "Conduct routine visual and ultrasonic inspections to detect early signs of structural damage or load-bearing capacity compromise."
          ],
          [
            "3b",
            "Bearing",
            "Contaiminated",
            "Prone to premature failure due to accelerated wear, surface damage, and reduced load-bearing capacity, ultimately leading to pump malfunction, system downtime, and potentially catastrophic equipment failure.",
            "1",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Oil /substance analysis",
                "Vibration and noise.",
                "Decrease efficiency."
              ],
            },
            "Apply surface treatments or coatings to reduce wear and protect against surface damage."
          ],
          [
            "3c",
            "Bearing",
            "Fractured",
            "Fluid leakage from fractured bearing can contaminate the surrounding environment, posing environmental hazards and safety risks to onboard personnel and marine ecosystems.",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Abnormal noise and vibration",
                "Lubricant Leakage.",
                "Decrease flow rate and pressure."
              ],
            },
            "Regularly inspect and maintain seals to prevent fluid leakage from bearings."
          ],
          [
            "4a",
            "Shaft Seal Cover",
            "Corroded",
            "Fluid Loss: Corroded shaft seal covers can lead to coolant or lubricant leakage from the pump assembly, resulting in reduced fluid levels, loss of system pressure, and diminished cooling or lubrication performance.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Decrease pressure and flowrate",
                "Water leakage arround the pump"
              ],
            },
            "conduct a thorough inspection to assess the extent of corrosion and potential leaks. Replace the corroded seal promptly with a new one, ensuring compatibility with the pump system. Implement corrosion prevention measures, such as applying protective coatings or using corrosion-resistant materials for future seals."
          ],
          [
            "4b",
            "Shaft Seal Cover",
            "Fractured",
            "environmental Hazard: Fluid leakage from fractured shaft seal covers poses environmental hazards, particularly in marine environments, where leaked fluids may pollute waterways or cause harm to marine life.",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Decrease pressure and flowrate",
                " leakage of water."
              ],
            },
            "shut down the pump to prevent further damage and water ingress. Replace the fractured seal with a new one, ensuring compatibility and proper installation. Conduct a thorough inspection of the surrounding components for any damage or wear."
          ],
          [
            "4c",
            "Shaft Seal Cover",
            "Worn",
            "Fluid Leakage: Worn shaft seal covers can contribute to increased fluid leakage from the pump assembly, resulting in loss of coolant or lubricant, reduced system performance, and potential damage to surrounding components due to inadequate lubrication or cooling.",
            "2",
            "1",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: [
                "Leakage of water",
                "Reduced flow rate, decreased pressure, increase power consumption."
              ],
            },
            "To address worn pump seals, promptly replace them and inspect surrounding components for damage. Implement preventive maintenance, monitor seal performance, and apply proper lubrication."
          ],
          [
            "5a",
            "Shaft",
            "Corroded",
            "Shaft Failure: Severe corrosion can weaken the shaft to the point of mechanical failure, resulting in pump malfunction, system downtime, and potential damage to other pump components.",
            "3",
            "1",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: [
                "Friction and vibration",
                "Decrease pump flowrate."
              ],
            },
            "replace it with a corrosion-resistant alternative and inspect surrounding components for damage. Apply protective coatings and establish a preventive maintenance schedule to minimize future corrosion risks."
          ],
          [
            "5b",
            "Shaft",
            "Fractured",
            "Pump Failure: Fractured shafts result in the loss of mechanical integrity and functionality of the circulating pump, leading to system downtime, impaired cooling performance, and disruption of ship operations.",
            "2",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "cooling water output may have fractured metal shaft",
                "Noise and vibration",
                "Decrease pump flowrate",
                "No flow form cooling pump",
              ],
            },
            "If a fractured cooling pump shaft is detected, consider repairing or replacing it depending on the severity of the damage. Inspect other components for any additional damage or corrosion."
          ],
          [
            "4c",
            "Shaft",
            "Worn",
            "Reduced Efficiency: Worn shafts diminish the efficiency of the circulating pump, as increased friction and surface roughness lead to higher energy consumption, reduced flow rates, and decreased coolant circulation.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Abnormal vibration and noise",
                "Reduce flow rate cooling pump",
                "Temperature abnormal caused by friction",
              ],
            },
            "Regular inspection Regular Cleaning: To address a worn shaft in a cooling pump, promptly replace it with a new one and inspect surrounding components for wear or damage. Implement preventive maintenance measures and monitor pump performance regularly."
          ],
        ]
      },
      {
        title: "Maintenance Task Selection",
        backgroundColor: "#f5eafa",
        borderColor: "#912BBC",
        headRow: 2,
        head: [
          "No",
          "Part",
          "Failure Mode",
          ["Risk Characterization", ["CoF", "Rec PoF", "Current Risk"]],
          ["Task Selection", ["Proposed Action (s)", "Proj PoF", "Proj Risk"]],
        ],
        body: [
          [
            "1a",
            "rotor",
            "Overheats",
            "1",
            "2",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                " Regular inspection and maintenance of pump casing.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "1b",
            " Pump Casing",
            "Fractured",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                " Implement containment measures and regular inspection..",
                " Bi-weekly visual inspection of pump casings and immediate action on detected fractures.",	
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "1c",
            " Pump Casing",
            "Deformed",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                " Regular deformation checks and preventive maintenance.",
                " Monthly visual inspection; semi-annual structural integrity assessment.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "2a",
            "Impeller",
            "Corroded",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Corrosion prevention measures and predictive maintenance..",
                "Monthly application of corrosion inhibitors; annual cost-benefit analysis of maintenance.",	
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "2b",
            "Impeller",
            "Fractured",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                " Enhanced monitoring and immediate repair upon fracture detection.",
                " Bi-weekly inspection; immediate corrective action on detected issues.",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "2c",
            "Impeller",
            "Deformed",
            "1",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                " Regular impeller inspection and replacement of deformed parts.",
                " Monthly visual inspection; annual thermal imaging to detect hot spots.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "3a",
            "Bearing",
            "Cracked",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "dot",
              text: [
                "Regular bearing inspection and replacement, Quarterly bearing inspection, replace bearings as necessary.",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "3b",
            "Bearing",
            "Contaiminated",
            "1",
            "2",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                "Contamination control and lubrication maintenance, Monthly inspection and lubrication, immediate replacement of contaminated bearings.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "3c",
            "Bearing",
            "Fractured",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Implement sealing solutions and regular inspection, weekly visual inspection, immediate corrective action on detected leakage.",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "4a",
            "Shaft Seal Cover",
            "Corroded",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                " Regular inspection and replacement of corroded seals.",
                " Monthly visual inspection; replace seals as necessary.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "4b",
            "Shaft Seal Cover",
            "Fractured",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Implement routine lubrication and inspection schedule for gear components.",
                "Apply proper sealing and contamination prevention measures.",
                "Use Corroded-resistant coatings and materials for gears.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "4c",
            "Shaft Seal Cover",
            "Worn",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                " Regular seal maintenance and replacement of worn components.",
                " Monthly visual inspection; replace seals as necessary.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "5a",
            "Shaft",
            "Corroded",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Regular shaft inspection and anti-corrosion treatment.",
                " Monthly visual inspection; annual ultrasonic testing for internal corrosion.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "5b",
            "Shaft",
            "Fractured",
            "2",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "  Immediate replacement of fractured shafts and enhanced monitoring.",
                "  Bi-weekly visual inspection; immediate action on detected fractures.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "5c",
            "Shaft",
            "Worn",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                " Regular shaft maintenance and lubrication.",
                " Monthly visual inspection and lubrication; replace worn shafts as necessary.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
        ]
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
              text: ["immediately clean and re-lubricate the rotor, apply a moisture barrier, and replace any corroded or damaged bearings."]
            },
            "CM/PM",
            ["1.1", "1.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "500 hours and/or Performed on: Damage or performance degradation detection test When corrosion or bearing damage occurs",
            "-",
            "It ensures the rotor operates efficiently and prevents further damage by replacing corroded or damaged bearings promptly.",
          ],
          [
            { 
              type: "dot", 
              text: ["promptly clean and re-lubricate the bearings, apply a corrosion-resistant coating, and replace the damaged bearings."]
            },
            "CM/PM",
            ["2.1", "2.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "250 hours and/or Performed on: Bearing inspection or performance issues When bearing corrosion or damage is detected",
            "-",
            "Applying a corrosion-resistant coating and replacing damaged bearings are critical steps for long-term durability and performance.",
          ],
          [
            { 
              type: "dot", 
              text: ["clean and lubricate rotor components, repair moisture barriers, apply corrosion-resistant coatings, and replace failed lubricants and bearings"]
            },
            "CM/PM",
            ["3.1", "3.2"],
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "1000 hours and/or Performed on: Implementing moisture barriers and corrosion-resistant coatings:",
            "-",
            "It ensures the rotor operate smoothly and have a longer service life.",
          ],
          [
            { 
              type: "dot", 
              text: ["clean and disinfect the coils using UV-C methods, apply a protective coating, and replace any damaged coil sections with corrosion-resistant materials."]
            },
            "CM/PM",
            ["4.1", "4.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "1000 hours and/or Performed on: Coil condition assessment When coil contamination or damage occurs",
            "-",
            "The use of UV-C disinfection and corrosion-resistant materials helps ensure both hygiene and durability.",
          ],
          [
            { 
              type: "dot", 
              text: ["apply protective coatings to the affected coils, replace damaged coil sections with corrosion-resistant materials, and disinfect the area using UV-C methods."]
            },
            "OTC",
            ["5.1", "5.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "500 hours and/or Performed on: Coil damage or contamination inspection When damage or corrosion is detected",
            "-",
            "Applying protective coatings and replacing damaged sections with corrosion-resistant materials help prevent future issues, while UV-C disinfection ensures the area remains hygienic.",
          ],
          [
            { 
              type: "dot", 
              text: ["immediately repair the leak, clean and disinfect the coil surfaces and surrounding areas using UV-C methods, and ensure proper sealing of the repaired area."]
            },
            "CM/PM",
            ["6.1", "6.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "200 hours and/or Performed on: Filter damage or performance issues When a filter is found to be damaged or contaminated",
            "-",
            "Immediate attention to the leak and thorough disinfection with UV-C methods are crucial for preventing further issues and maintaining system integrity.",
          ],
          [
            { 
              type: "dot", 
              text: ["replace the filter with a corrosion-resistant one, clean the filter housing, and disinfect the area using UV-C methods to prevent further contamination."]
            },
            "CM/PM",
            ["7.1", "7.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "200 hours and/or Performed on: Filter inspection or clogging When filter damage or contamination occurs",
            "-",
            "Using a corrosion-resistant filter and disinfecting with UV-C methods ensures that the system remains efficient and free from contamination.",
          ],
          [
            { 
              type: "dot", 
              text: ["immediately replace it with a corrosion-resistant alternative, clean the housing, and use UV-C disinfection to ensure cleanliness."]
            },
            "CM/PM",
            ["8.1", "8.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "200 hours and/or Performed on: Filter damage or performance issues When a filter is found to be damaged or contaminated",
            "-",
            "Using corrosion-resistant materials and UV-C disinfection ensures that the replacement part functions optimally and prevents future contamination.",
          ],
          [
            { 
              type: "dot", 
              text: ["replace them with corrosion-resistant ones, clean the housing, and disinfect using UV-C methods to maintain hygiene."]
            },
            "OTC",
            ["9.1", "9.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "200 hours and/or Performed on: Filter inspection or contamination check When filter corrosion or damage is detected",
            "-",
            "Regular cleaning and UV-C disinfection help maintain hygiene and system efficiency.",
          ],
          [
            { 
              type: "dot", 
              text: ["lubricate and inspect the gears, apply proper seals, and replace damaged gears with corrosion-resistant alternatives."]
            },
            "CM/PM",
            ["10.1", "10.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "1000 hours and/or Performed on: Gear inspection or performance review When gear damage or wear is detected",
            "-",
            "It ensures the gears operate smoothly and have a longer service life.",
          ],
          [
            { 
              type: "dot", 
              text: ["re-lubricate the gear components, ensure proper sealing to prevent contamination, and replace damaged gears with corrosion-resistant materials."]
            },
            "CM/PM",
            ["11.1", "11.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "500 hours and/or Performed on: Gear component inspection or lubrication check When gears are found to be damaged or contaminated",
            "-",
            "Proper sealing and corrosion-resistant materials are crucial for maintaining gear performance and longevity.",
          ],
          [
            { 
              type: "dot", 
              text: ["flush or clean the valve to remove debris, re-lubricate the gear components, apply proper sealing, and replace any damaged parts with corrosion-resistant materials."]
            },
            "CM/PM",
            ["12.1", "12.2"],
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "1000 hours and/or Performed on: Valve inspection or maintenance schedule When valve debris or gear damage is detected",
            "-",
            "It ensures both the valve and gear components are well-maintained and protected against future issues.",
          ],
        ],
      },
    ]
  },
  {
    slug: "circulating-pump-2",
    type: "COOLING_SYSTEM",
    specs: {
      functionalGroup: "Propulsion Function Group",
      system: "Diesel Engine",
      subsystem: "Cooling System",
      equipmentID: "CO-CIP-02",
      equipmentName: "Ciculating Pump",
      drawing: "Cooling System",
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
            "Circulate coolant throughout various components of the ship's cooling system, ensuring optimal operating temperatures and preventing overheating of critical machinery and systems, within specification Capacity 100 M3/H, Head 20m.",
            "Primary",
            ["1,1", "1,2"],
            [
              "No pumping water to initiate coolant circulation (Total Failure)",
              "Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
            ],
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
          "Part",
          "Failure Mode",
          "Causes",
          "Failure Charasteristic",
          "Local Effect",
          "Functional Failure",
        ],
        body: [
          [
            "1a",
            " Pump Casing",
            "Corroded",
            [
              "1.1 Mechanical Stress: Operating conditions such as vibration, pressure changes, and mechanical shocks can subject the casing to mechanical stress. Over time, this stress can cause deformation, especially if the casing material is not sufficiently robust.",
              "1.2 Age and Wear: Like any other equipment on a ship, Cooling pumps and their casings are subject to wear and tear over time. With age, the protective coatings on the casing may degrade, making it more susceptible to corrosion"
            ],
            ["Random","Wear-out"],
            {
              type: "number",
              text: [
                "Reduced Pump Efficiency",
                "Pump Operation with Vibration and Noise",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "1b",
            " Pump Casing",
            "Fractured",
            [
              "2.1 Mechanical Stress: The casing may experience mechanical stress due to factors such as vibration, shock loads, or impacts during normal operation or in rough sea conditions. Over time, this stress can lead to fatigue and eventually fracture of the casing.",
              "2.2  Overloading: If the Cooling pump is subjected to loads beyond its design capacity, such as excessive pressure or flow rate, it can put undue stress on the casing, leading to fracture."
            ],
            ["Random","Random"],
            {
              type: "number",
              text: [
                "Reduced Efficiency",
                "Material Weakening",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "1c",
            " Pump Casing",
            "Deformed",
            [
              "3.1 Mechanical Stress: Operating conditions such as vibration, pressure changes, and mechanical shocks can subject the casing to mechanical stress. Over time, this stress can cause deformation, especially if the casing material is not sufficiently robust.",
              "3.2 Corrosion: Continuous exposure to seawater and other corrosive substances can lead to the corrosion of metal casings over time. Corrosion weakens the structural integrity of the casing, making it susceptible to deformation."
            ],
            ["Random","Wear-out"],
            {
              type: "number",
              text: [
                "Reduced Pump Efficiency",
                "Immediate Loss of Functionality",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "2a",
            "Impeller",
            "Corroded",
            [
              "4.1 High Temperatures: Elevated temperatures in the Cooling area, either due to the pump's operation or nearby machinery, can accelerate corrosion processes, especially if combined with other factors like saltwater exposure or chemical contamination.",
              "4.2  Saltwater Exposure: Ships operate in a highly corrosive environment due to constant exposure to saltwater. If the Cooling pump is not adequately protected or made from corrosion-resistant materials, saltwater exposure can lead to corrosion of the impeller over time."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Reduced Efficiency",
                "Material Weakening",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "2b",
            "Impeller",
            "Fractured",
            [
              "5.1 Material Fatigue: Continuous operation of the Cooling pump impeller can subject it to repeated cycles of stress, leading to material fatigue over time. This fatigue can weaken the material structure of the impeller, eventually resulting in cracks or fractures.",
              "5.2  Impact or Mechanical Damage: External factors such as collisions, debris ingestion, or abrasive wear can cause physical damage to the impeller, resulting in cracks or fractures. Impact from foreign objects or sudden changes in operating conditions can lead to immediate failure or accelerate existing damage."
            ],
            ["Wear-out","Random"],
            {
              type: "number",
              text: [
                "Reduced Pump Efficiency",
                "Immediate Loss of Functionality",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "2c",
            "Impeller",
            "Deformed",
            [
              "6.1  Mechanical Stress: Continuous operation of the Cooling pump can subject the impeller to mechanical stress, especially if it encounters high fluid flow rates or pressure. Over time, this stress can cause the impeller to deform, particularly in areas where the material is weaker or subjected to uneven loading.",
              "6.2  Overloading: Excessive loads on the Cooling pump system, such as sudden surges in fluid volume or pressure, can exceed the impeller's design limits and cause deformation. This can occur due to factors like blockages in the pump, changes in fluid viscosity, or improper pump operation."
            ],
            ["Wear-out","Random"],
            {
              type: "number",
              text: [
                "Vibration and Noise",
                "Reduced Pump Efficiency",
              ]
            },
            [
              "1.1 No Pumping water to initiate coolant circulation (Total Failure)",
              "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
            ]  
          ],
          [
            "3a",
            "Bearing",
            "Cracked",
            [
              "7.1 Impact or Mechanical Damage: External factors like impacts from debris or improper handling during maintenance procedures can cause mechanical damage to the bearings, resulting in cracks.",
              "7.2  Fatigue: Over time, repeated stress cycles experienced by the bearings during pump operation can weaken the material, leading to microscopic cracks that propagate and eventually result in visible cracks."
            ],
            ["Random","Wear-out"],
            {
              type: "number",
              text: [
                "Increased Operating Temperature",
                "Structural Damage",
              ]
            },
            [
              "1.1 No Pumping water to initiate coolant circulation (Total Failure)",
              "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
            ]
          ],
          [
            "3b",
            "Bearing",
            "Contaiminated",
            [
              "8.1  Ingress of Foreign Particles: Small particles such as dirt, sand, debris, or rust can enter the bearing housing, especially if the pump is operating in a harsh environment or if seals are compromised. These particles can contaminate the lubricant and cause abrasive wear on the bearing surfaces.",
              "8.2   Oil or Fuel Leakage: Leakage of oil or fuel from nearby machinery or systems can contaminate the bearing. Oil or fuel contamination can degrade the lubricant's effectiveness, leading to increased friction and wear on the bearing surfaces."
            ],
            ["Random","Random"],
            {
              type: "number",
              text: [
                " Increased Friction and Wear",
                "Reduced Efficiency",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "3c",
            "Bearing",
            "Fractured",
            [
              "9.1   .Overloading: Excessive loads on the bearing beyond its designed capacity can lead to fractures. This can happen due to sudden surges in pump operation, such as during startup or when pumping against high resistance, causing stress concentrations and eventual fracture.",
              "9.2 Fatigue: Prolonged cyclic loading and unloading of the bearing during normal pump operation can lead to fatigue failure over time. This is particularly common in bearings subjected to repeated stress cycles, causing microscopic cracks to form and propagate until complete fracture occurs."
            ],
            ["Random","Wear-out"],
            {
              type: "number",
              text: [
                "Immediate Loss of Functionality",
                "Vibration and Noise",
              ]
            },
            [
              "1.1 No Pumping water to initiate coolant circulation (Total Failure)",
              "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
            ]
          ],
          [
            "4a",
            "Shaft Seal Cover",
            "Corroded",
            [
              "10.1 Exposure to Corrosive Substances: The seal may come into contact with corrosive substances present in the Cooling water, such as saltwater, chemicals, or pollutants. Prolonged exposure to these corrosive agents can degrade the seal material and lead to corrosion.",
              "10.2   High Temperatures and Pressure: Elevated temperatures and pressures within the Cooling pump system can accelerate corrosion processes, particularly if the seal material is not resistant to these conditions."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Corrosion weakens the structural integrity",
                "Reduced Seal Performance",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "4b",
            "GearShaft Seal Cover",
            "Fractured",
            [
              "11.1 Material Fatigue: Over time, repeated stress cycles can weaken the seal material, leading to microscopic cracks that propagate and eventually result in a fracture. This fatigue can occur due to the cyclical pressure changes experienced during pump operation.",
              "11.2  Impact or Mechanical Damage: External factors such as impacts from debris or improper handling during maintenance procedures can cause mechanical damage to the seal, resulting in fractures."
            ],
            ["Wear-out","Random"],
            {
              type: "number",
              text: [
                "fractured seal compromises",
                "Reduced Seal Performance",
              ]
            },
            [

              "1.1 No Pumping water to initiate coolant circulation (Total Failure)",
              "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
            ]
          ],
          [
            "4c",
            "Shaft Seal Cover",
            "Worn",
            [
              "12.1 Abrasion: Continuous contact between the seal and rotating shaft can lead to abrasive wear over time. Particles present in the Cooling water, such as sand, sediment, or debris, can cause abrasive damage to the seal surface, leading to wear",
              "12.2  Corrosion: Exposure to corrosive substances in the Cooling water, such as saltwater or chemicals, can corrode the seal material, leading to localized material degradation and wear. Corrosion weakens the seal's structural integrity and can accelerate wear, particularly in areas with high stress concentrations."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Reduced Pump Performance",
                "Vibration and Noise",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "5a",
            "Shaft",
            "Corroded",
            [
              "13.1 Improper Material Selection: Choosing materials for the shaft that are not resistant to corrosion or incompatible with the Cooling environment can promote corrosion and accelerate its progression.",
              "13.2  High Humidity and Temperature: Elevated humidity levels and fluctuating temperatures in the Cooling area can create conducive conditions for corrosion to occur on the shaft surface.",
              "14.1 Fatigue: Prolonged cyclic loading and unloading of the shaft during pump operation can lead to fatigue failure, causing microscopic cracks to form and propagate over time until a fracture occurs."
            ],
            ["Wear-in","Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Reduced Strength",
                "Impeller Misalignment",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "5b",
            "Shaft",
            "Fractured",
            [
              "14.1 Fatigue: Prolonged cyclic loading and unloading of the shaft during pump operation can lead to fatigue failure, causing microscopic cracks to form and propagate over time until a fracture occurs.",
              "14.2  Corrosion: Corrosive substances present in the Cooling water can degrade the shaft material, reducing its structural integrity and making it more susceptible to fracture failure."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Loss of Functionality",
                "Immediate Loss of Functionality",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "5c",
            "Shaft",
            "Worn",
            [
              "15.1   Abrasion: Continuous contact with abrasive particles present in the Cooling water, such as sand, sediment, or debris, can gradually wear down the surface of the shaft. This abrasion occurs over time and can lead to the thinning of the shaft diameter or the formation of grooves and pits on its surface.",
              "15.2 Corrosion: Exposure to corrosive substances present in the Cooling water, such as saltwater or chemicals, can corrode the shaft material, leading to localized wear and pitting. Corrosion-induced wear weakens the shaft's structural integrity and accelerates its deterioration."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Reduced Efficiency",
                "Seal Leakage",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
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
          "Part",
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
            "1a",
            "Pump Casing",
            "Corroded",
            "Pump Failure: Progressive corrosion of the pump casing weakens the structural integrity of the casing, eventually leading to catastrophic failure, pump malfunction, or complete breakdown, resulting in system downtime and loss of cooling capacity.",
            "1",
            "2",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Leakage from cooling Pump",
                "Decrease flow rate from cooling Pump."
              ],
            },
            "prevent or mitigate corrosion of cooling pump casings, proper maintenance, regular inspections, and use of corrosion-resistant materials are essential."
          ],
          [
            "1b",
            " Pump Casing",
            "Fractured",
            "Environmental Contamination: Fluid leakage from fractured pump casings can contaminate the surrounding environment, posing environmental hazards and safety risks to onboard personnel and marine ecosystems.Bearing seizure and motor shaft immobilization: Severe wear or damage to the bearings can result in bearing seizure, causing the motor shaft to become immobilized and leading to sudden motor failure.",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Decrease flow rate from cooling Pump",
                "No flow from cooling Pump."
              ],
            },
            "To prevent casing fracture of cooling pumps on ships, it's important to adhere to proper installation procedures, conduct regular inspections for signs of stress or damage, and ensure that the pump is operated within its design limits."
          ],
          [
            "1c",
            " Pump Casing",
            "Deformed",
            "pump Malfunction: Deformed pump casings disrupt the normal operation of the circulating pump, resulting in reduced coolant circulation, loss of system efficiency, and potential pump failure, leading to cooling system downtime and operational disruptions.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Bend, crack, casing material",
                "Decrease flow rate from cooling pump."
              ],
            },
            "Recommended to conduct regular inspections, enhance material selection for casing construction, optimize operating conditions, improve installation practices, enhance maintenance procedures"
          ],
          [
            "2a",
            "Impeller",
            "Corroded",
            "Increased Maintenance Costs: Corrosion-related pump failures necessitate costly repairs or replacements, as well as associated labor and downtime expenses, increasing maintenance costs and disrupting vessel operations.",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                " Decrease cooling pump performance",
                " Visible corrosion",
                "Increase noise and vibration."
              ],
            },
            "Assess the damage and consider replacing it with a corrosion-resistant impeller. Implement regular maintenance and consider applying corrosion-resistant coatings. Monitor for future corrosion for sustained pump performance."
          ],
          [
            "2b",
            "Impeller",
            "Fractured",
            "Pump Failure: Fractured pump casings jeopardize the structural integrity of the circulating pump, resulting in pump malfunction, reduced coolant circulation, and eventual pump failure, leading to system downtime and loss of cooling capacity.",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Decrease cooling pump performance",
                "No flow from cooling Pump."
              ],
            },
            "If the impeller of a cooling pump is fractured, it must be swiftly replaced to maintain pump functionality. Prioritize the installation of a new, intact impeller and conduct regular inspections to prevent future fractures."
          ],
          [
            "2c",
            "Impeller",
            "Deformed",
            "Increased Risk of heating: Inadequate cooling water removal due to impeller deformation increases the risk of heating in critical areas of the ship. This poses a safety hazard to the crew, passengers, and cargo, potentially compromising the vessel's seaworthiness and stability.",
            "1",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Decrease cooling pump performance",
                "Noise and vibration."
              ],
            },
            "Replace the deformed impeller promptly with a new one to maintain optimal performance. Regular inspections and monitoring can help detect deformities early on, preventing further issues."
          ],
          [
            "3a",
            "Bearing",
            "Cracked",
            "Compromise structural integrity and load-bearing capacity, leading to progressive deterioration and eventual catastrophic failure, resulting in pump malfunction and system downtime.",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: [
                "Visbile abnormal crack",
                "Vibration abnormal."
              ],
            },
            "Conduct routine visual and ultrasonic inspections to detect early signs of structural damage or load-bearing capacity compromise."
          ],
          [
            "3b",
            "Bearing",
            "Contaiminated",
            "Prone to premature failure due to accelerated wear, surface damage, and reduced load-bearing capacity, ultimately leading to pump malfunction, system downtime, and potentially catastrophic equipment failure.",
            "1",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Oil /substance analysis",
                "Vibration and noise.",
                "Decrease efficiency."
              ],
            },
            "Apply surface treatments or coatings to reduce wear and protect against surface damage."
          ],
          [
            "3c",
            "Bearing",
            "Fractured",
            "Fluid leakage from fractured bearing can contaminate the surrounding environment, posing environmental hazards and safety risks to onboard personnel and marine ecosystems.",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Abnormal noise and vibration",
                "Lubricant Leakage.",
                "Decrease flow rate and pressure."
              ],
            },
            "Regularly inspect and maintain seals to prevent fluid leakage from bearings."
          ],
          [
            "4a",
            "Shaft Seal Cover",
            "Corroded",
            "Fluid Loss: Corroded shaft seal covers can lead to coolant or lubricant leakage from the pump assembly, resulting in reduced fluid levels, loss of system pressure, and diminished cooling or lubrication performance.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Decrease pressure and flowrate",
                "Water leakage arround the pump"
              ],
            },
            "conduct a thorough inspection to assess the extent of corrosion and potential leaks. Replace the corroded seal promptly with a new one, ensuring compatibility with the pump system. Implement corrosion prevention measures, such as applying protective coatings or using corrosion-resistant materials for future seals."
          ],
          [
            "4b",
            "Shaft Seal Cover",
            "Fractured",
            "environmental Hazard: Fluid leakage from fractured shaft seal covers poses environmental hazards, particularly in marine environments, where leaked fluids may pollute waterways or cause harm to marine life.",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Decrease pressure and flowrate",
                " leakage of water."
              ],
            },
            "shut down the pump to prevent further damage and water ingress. Replace the fractured seal with a new one, ensuring compatibility and proper installation. Conduct a thorough inspection of the surrounding components for any damage or wear."
          ],
          [
            "4c",
            "Shaft Seal Cover",
            "Worn",
            "Fluid Leakage: Worn shaft seal covers can contribute to increased fluid leakage from the pump assembly, resulting in loss of coolant or lubricant, reduced system performance, and potential damage to surrounding components due to inadequate lubrication or cooling.",
            "2",
            "1",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: [
                "Leakage of water",
                "Reduced flow rate, decreased pressure, increase power consumption."
              ],
            },
            "To address worn pump seals, promptly replace them and inspect surrounding components for damage. Implement preventive maintenance, monitor seal performance, and apply proper lubrication."
          ],
          [
            "5a",
            "Shaft",
            "Corroded",
            "Shaft Failure: Severe corrosion can weaken the shaft to the point of mechanical failure, resulting in pump malfunction, system downtime, and potential damage to other pump components.",
            "3",
            "1",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: [
                "Friction and vibration",
                "Decrease pump flowrate."
              ],
            },
            "replace it with a corrosion-resistant alternative and inspect surrounding components for damage. Apply protective coatings and establish a preventive maintenance schedule to minimize future corrosion risks."
          ],
          [
            "5b",
            "Shaft",
            "Fractured",
            "Pump Failure: Fractured shafts result in the loss of mechanical integrity and functionality of the circulating pump, leading to system downtime, impaired cooling performance, and disruption of ship operations.",
            "2",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "cooling water output may have fractured metal shaft",
                "Noise and vibration",
                "Decrease pump flowrate",
                "No flow form cooling pump",
              ],
            },
            "If a fractured cooling pump shaft is detected, consider repairing or replacing it depending on the severity of the damage. Inspect other components for any additional damage or corrosion."
          ],
          [
            "4c",
            "Shaft",
            "Worn",
            "Reduced Efficiency: Worn shafts diminish the efficiency of the circulating pump, as increased friction and surface roughness lead to higher energy consumption, reduced flow rates, and decreased coolant circulation.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Abnormal vibration and noise",
                "Reduce flow rate cooling pump",
                "Temperature abnormal caused by friction",
              ],
            },
            "Regular inspection Regular Cleaning: To address a worn shaft in a cooling pump, promptly replace it with a new one and inspect surrounding components for wear or damage. Implement preventive maintenance measures and monitor pump performance regularly."
          ],
        ]
      },
      {
        title: "Maintenance Task Selection",
        backgroundColor: "#f5eafa",
        borderColor: "#912BBC",
        headRow: 2,
        head: [
          "No",
          "Part",
          "Failure Mode",
          ["Risk Characterization", ["CoF", "Rec PoF", "Current Risk"]],
          ["Task Selection", ["Proposed Action (s)", "Proj PoF", "Proj Risk"]],
        ],
        body: [
          [
            "1a",
            "rotor",
            "Overheats",
            "1",
            "2",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                " Regular inspection and maintenance of pump casing.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "1b",
            " Pump Casing",
            "Fractured",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                " Implement containment measures and regular inspection..",
                " Bi-weekly visual inspection of pump casings and immediate action on detected fractures.",	
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "1c",
            " Pump Casing",
            "Deformed",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                " Regular deformation checks and preventive maintenance.",
                " Monthly visual inspection; semi-annual structural integrity assessment.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "2a",
            "Impeller",
            "Corroded",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Corrosion prevention measures and predictive maintenance..",
                "Monthly application of corrosion inhibitors; annual cost-benefit analysis of maintenance.",	
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "2b",
            "Impeller",
            "Fractured",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                " Enhanced monitoring and immediate repair upon fracture detection.",
                " Bi-weekly inspection; immediate corrective action on detected issues.",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "2c",
            "Impeller",
            "Deformed",
            "1",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                " Regular impeller inspection and replacement of deformed parts.",
                " Monthly visual inspection; annual thermal imaging to detect hot spots.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "3a",
            "Bearing",
            "Cracked",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "dot",
              text: [
                "Regular bearing inspection and replacement, Quarterly bearing inspection, replace bearings as necessary.",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "3b",
            "Bearing",
            "Contaiminated",
            "1",
            "2",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                "Contamination control and lubrication maintenance, Monthly inspection and lubrication, immediate replacement of contaminated bearings.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "3c",
            "Bearing",
            "Fractured",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Implement sealing solutions and regular inspection, weekly visual inspection, immediate corrective action on detected leakage.",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "4a",
            "Shaft Seal Cover",
            "Corroded",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                " Regular inspection and replacement of corroded seals.",
                " Monthly visual inspection; replace seals as necessary.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "4b",
            "Shaft Seal Cover",
            "Fractured",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Implement routine lubrication and inspection schedule for gear components.",
                "Apply proper sealing and contamination prevention measures.",
                "Use Corroded-resistant coatings and materials for gears.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "4c",
            "Shaft Seal Cover",
            "Worn",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                " Regular seal maintenance and replacement of worn components.",
                " Monthly visual inspection; replace seals as necessary.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "5a",
            "Shaft",
            "Corroded",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Regular shaft inspection and anti-corrosion treatment.",
                " Monthly visual inspection; annual ultrasonic testing for internal corrosion.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "5b",
            "Shaft",
            "Fractured",
            "2",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "  Immediate replacement of fractured shafts and enhanced monitoring.",
                "  Bi-weekly visual inspection; immediate action on detected fractures.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "5c",
            "Shaft",
            "Worn",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                " Regular shaft maintenance and lubrication.",
                " Monthly visual inspection and lubrication; replace worn shafts as necessary.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
        ]
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
              text: ["immediately clean and re-lubricate the rotor, apply a moisture barrier, and replace any corroded or damaged bearings."]
            },
            "CM/PM",
            ["1.1", "1.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "500 hours and/or Performed on: Damage or performance degradation detection test When corrosion or bearing damage occurs",
            "-",
            "It ensures the rotor operates efficiently and prevents further damage by replacing corroded or damaged bearings promptly.",
          ],
          [
            { 
              type: "dot", 
              text: ["promptly clean and re-lubricate the bearings, apply a corrosion-resistant coating, and replace the damaged bearings."]
            },
            "CM/PM",
            ["2.1", "2.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "250 hours and/or Performed on: Bearing inspection or performance issues When bearing corrosion or damage is detected",
            "-",
            "Applying a corrosion-resistant coating and replacing damaged bearings are critical steps for long-term durability and performance.",
          ],
          [
            { 
              type: "dot", 
              text: ["clean and lubricate rotor components, repair moisture barriers, apply corrosion-resistant coatings, and replace failed lubricants and bearings"]
            },
            "CM/PM",
            ["3.1", "3.2"],
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "1000 hours and/or Performed on: Implementing moisture barriers and corrosion-resistant coatings:",
            "-",
            "It ensures the rotor operate smoothly and have a longer service life.",
          ],
          [
            { 
              type: "dot", 
              text: ["clean and disinfect the coils using UV-C methods, apply a protective coating, and replace any damaged coil sections with corrosion-resistant materials."]
            },
            "CM/PM",
            ["4.1", "4.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "1000 hours and/or Performed on: Coil condition assessment When coil contamination or damage occurs",
            "-",
            "The use of UV-C disinfection and corrosion-resistant materials helps ensure both hygiene and durability.",
          ],
          [
            { 
              type: "dot", 
              text: ["apply protective coatings to the affected coils, replace damaged coil sections with corrosion-resistant materials, and disinfect the area using UV-C methods."]
            },
            "OTC",
            ["5.1", "5.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "500 hours and/or Performed on: Coil damage or contamination inspection When damage or corrosion is detected",
            "-",
            "Applying protective coatings and replacing damaged sections with corrosion-resistant materials help prevent future issues, while UV-C disinfection ensures the area remains hygienic.",
          ],
          [
            { 
              type: "dot", 
              text: ["immediately repair the leak, clean and disinfect the coil surfaces and surrounding areas using UV-C methods, and ensure proper sealing of the repaired area."]
            },
            "CM/PM",
            ["6.1", "6.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "200 hours and/or Performed on: Filter damage or performance issues When a filter is found to be damaged or contaminated",
            "-",
            "Immediate attention to the leak and thorough disinfection with UV-C methods are crucial for preventing further issues and maintaining system integrity.",
          ],
          [
            { 
              type: "dot", 
              text: ["replace the filter with a corrosion-resistant one, clean the filter housing, and disinfect the area using UV-C methods to prevent further contamination."]
            },
            "CM/PM",
            ["7.1", "7.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "200 hours and/or Performed on: Filter inspection or clogging When filter damage or contamination occurs",
            "-",
            "Using a corrosion-resistant filter and disinfecting with UV-C methods ensures that the system remains efficient and free from contamination.",
          ],
          [
            { 
              type: "dot", 
              text: ["immediately replace it with a corrosion-resistant alternative, clean the housing, and use UV-C disinfection to ensure cleanliness."]
            },
            "CM/PM",
            ["8.1", "8.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "200 hours and/or Performed on: Filter damage or performance issues When a filter is found to be damaged or contaminated",
            "-",
            "Using corrosion-resistant materials and UV-C disinfection ensures that the replacement part functions optimally and prevents future contamination.",
          ],
          [
            { 
              type: "dot", 
              text: ["replace them with corrosion-resistant ones, clean the housing, and disinfect using UV-C methods to maintain hygiene."]
            },
            "OTC",
            ["9.1", "9.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "200 hours and/or Performed on: Filter inspection or contamination check When filter corrosion or damage is detected",
            "-",
            "Regular cleaning and UV-C disinfection help maintain hygiene and system efficiency.",
          ],
          [
            { 
              type: "dot", 
              text: ["lubricate and inspect the gears, apply proper seals, and replace damaged gears with corrosion-resistant alternatives."]
            },
            "CM/PM",
            ["10.1", "10.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "1000 hours and/or Performed on: Gear inspection or performance review When gear damage or wear is detected",
            "-",
            "It ensures the gears operate smoothly and have a longer service life.",
          ],
          [
            { 
              type: "dot", 
              text: ["re-lubricate the gear components, ensure proper sealing to prevent contamination, and replace damaged gears with corrosion-resistant materials."]
            },
            "CM/PM",
            ["11.1", "11.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "500 hours and/or Performed on: Gear component inspection or lubrication check When gears are found to be damaged or contaminated",
            "-",
            "Proper sealing and corrosion-resistant materials are crucial for maintaining gear performance and longevity.",
          ],
          [
            { 
              type: "dot", 
              text: ["flush or clean the valve to remove debris, re-lubricate the gear components, apply proper sealing, and replace any damaged parts with corrosion-resistant materials."]
            },
            "CM/PM",
            ["12.1", "12.2"],
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "1000 hours and/or Performed on: Valve inspection or maintenance schedule When valve debris or gear damage is detected",
            "-",
            "It ensures both the valve and gear components are well-maintained and protected against future issues.",
          ],
        ],
      },
    ]
  },
  {
    slug: "circulating-pump-3",
    type: "COOLING_SYSTEM",
    specs: {
      functionalGroup: "Propulsion Function Group",
      system: "Diesel Engine",
      subsystem: "Cooling System",
      equipmentID: "CO-CIP-03",
      equipmentName: "Ciculating Pump",
      drawing: "Cooling System",
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
            "Circulate coolant throughout various components of the ship's cooling system, ensuring optimal operating temperatures and preventing overheating of critical machinery and systems, within specification Capacity 100 M3/H, Head 20m.",
            "Primary",
            ["1,1", "1,2"],
            [
              "No pumping water to initiate coolant circulation (Total Failure)",
              "Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
            ],
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
          "Part",
          "Failure Mode",
          "Causes",
          "Failure Charasteristic",
          "Local Effect",
          "Functional Failure",
        ],
        body: [
          [
            "1a",
            " Pump Casing",
            "Corroded",
            [
              "1.1 Mechanical Stress: Operating conditions such as vibration, pressure changes, and mechanical shocks can subject the casing to mechanical stress. Over time, this stress can cause deformation, especially if the casing material is not sufficiently robust.",
              "1.2 Age and Wear: Like any other equipment on a ship, Cooling pumps and their casings are subject to wear and tear over time. With age, the protective coatings on the casing may degrade, making it more susceptible to corrosion"
            ],
            ["Random","Wear-out"],
            {
              type: "number",
              text: [
                "Reduced Pump Efficiency",
                "Pump Operation with Vibration and Noise",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "1b",
            " Pump Casing",
            "Fractured",
            [
              "2.1 Mechanical Stress: The casing may experience mechanical stress due to factors such as vibration, shock loads, or impacts during normal operation or in rough sea conditions. Over time, this stress can lead to fatigue and eventually fracture of the casing.",
              "2.2  Overloading: If the Cooling pump is subjected to loads beyond its design capacity, such as excessive pressure or flow rate, it can put undue stress on the casing, leading to fracture."
            ],
            ["Random","Random"],
            {
              type: "number",
              text: [
                "Reduced Efficiency",
                "Material Weakening",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "1c",
            " Pump Casing",
            "Deformed",
            [
              "3.1 Mechanical Stress: Operating conditions such as vibration, pressure changes, and mechanical shocks can subject the casing to mechanical stress. Over time, this stress can cause deformation, especially if the casing material is not sufficiently robust.",
              "3.2 Corrosion: Continuous exposure to seawater and other corrosive substances can lead to the corrosion of metal casings over time. Corrosion weakens the structural integrity of the casing, making it susceptible to deformation."
            ],
            ["Random","Wear-out"],
            {
              type: "number",
              text: [
                "Reduced Pump Efficiency",
                "Immediate Loss of Functionality",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "2a",
            "Impeller",
            "Corroded",
            [
              "4.1 High Temperatures: Elevated temperatures in the Cooling area, either due to the pump's operation or nearby machinery, can accelerate corrosion processes, especially if combined with other factors like saltwater exposure or chemical contamination.",
              "4.2  Saltwater Exposure: Ships operate in a highly corrosive environment due to constant exposure to saltwater. If the Cooling pump is not adequately protected or made from corrosion-resistant materials, saltwater exposure can lead to corrosion of the impeller over time."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Reduced Efficiency",
                "Material Weakening",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "2b",
            "Impeller",
            "Fractured",
            [
              "5.1 Material Fatigue: Continuous operation of the Cooling pump impeller can subject it to repeated cycles of stress, leading to material fatigue over time. This fatigue can weaken the material structure of the impeller, eventually resulting in cracks or fractures.",
              "5.2  Impact or Mechanical Damage: External factors such as collisions, debris ingestion, or abrasive wear can cause physical damage to the impeller, resulting in cracks or fractures. Impact from foreign objects or sudden changes in operating conditions can lead to immediate failure or accelerate existing damage."
            ],
            ["Wear-out","Random"],
            {
              type: "number",
              text: [
                "Reduced Pump Efficiency",
                "Immediate Loss of Functionality",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "2c",
            "Impeller",
            "Deformed",
            [
              "6.1  Mechanical Stress: Continuous operation of the Cooling pump can subject the impeller to mechanical stress, especially if it encounters high fluid flow rates or pressure. Over time, this stress can cause the impeller to deform, particularly in areas where the material is weaker or subjected to uneven loading.",
              "6.2  Overloading: Excessive loads on the Cooling pump system, such as sudden surges in fluid volume or pressure, can exceed the impeller's design limits and cause deformation. This can occur due to factors like blockages in the pump, changes in fluid viscosity, or improper pump operation."
            ],
            ["Wear-out","Random"],
            {
              type: "number",
              text: [
                "Vibration and Noise",
                "Reduced Pump Efficiency",
              ]
            },
            [
              "1.1 No Pumping water to initiate coolant circulation (Total Failure)",
              "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
            ]  
          ],
          [
            "3a",
            "Bearing",
            "Cracked",
            [
              "7.1 Impact or Mechanical Damage: External factors like impacts from debris or improper handling during maintenance procedures can cause mechanical damage to the bearings, resulting in cracks.",
              "7.2  Fatigue: Over time, repeated stress cycles experienced by the bearings during pump operation can weaken the material, leading to microscopic cracks that propagate and eventually result in visible cracks."
            ],
            ["Random","Wear-out"],
            {
              type: "number",
              text: [
                "Increased Operating Temperature",
                "Structural Damage",
              ]
            },
            [
              "1.1 No Pumping water to initiate coolant circulation (Total Failure)",
              "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
            ]
          ],
          [
            "3b",
            "Bearing",
            "Contaiminated",
            [
              "8.1  Ingress of Foreign Particles: Small particles such as dirt, sand, debris, or rust can enter the bearing housing, especially if the pump is operating in a harsh environment or if seals are compromised. These particles can contaminate the lubricant and cause abrasive wear on the bearing surfaces.",
              "8.2   Oil or Fuel Leakage: Leakage of oil or fuel from nearby machinery or systems can contaminate the bearing. Oil or fuel contamination can degrade the lubricant's effectiveness, leading to increased friction and wear on the bearing surfaces."
            ],
            ["Random","Random"],
            {
              type: "number",
              text: [
                " Increased Friction and Wear",
                "Reduced Efficiency",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "3c",
            "Bearing",
            "Fractured",
            [
              "9.1   .Overloading: Excessive loads on the bearing beyond its designed capacity can lead to fractures. This can happen due to sudden surges in pump operation, such as during startup or when pumping against high resistance, causing stress concentrations and eventual fracture.",
              "9.2 Fatigue: Prolonged cyclic loading and unloading of the bearing during normal pump operation can lead to fatigue failure over time. This is particularly common in bearings subjected to repeated stress cycles, causing microscopic cracks to form and propagate until complete fracture occurs."
            ],
            ["Random","Wear-out"],
            {
              type: "number",
              text: [
                "Immediate Loss of Functionality",
                "Vibration and Noise",
              ]
            },
            [
              "1.1 No Pumping water to initiate coolant circulation (Total Failure)",
              "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
            ]
          ],
          [
            "4a",
            "Shaft Seal Cover",
            "Corroded",
            [
              "10.1 Exposure to Corrosive Substances: The seal may come into contact with corrosive substances present in the Cooling water, such as saltwater, chemicals, or pollutants. Prolonged exposure to these corrosive agents can degrade the seal material and lead to corrosion.",
              "10.2   High Temperatures and Pressure: Elevated temperatures and pressures within the Cooling pump system can accelerate corrosion processes, particularly if the seal material is not resistant to these conditions."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Corrosion weakens the structural integrity",
                "Reduced Seal Performance",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "4b",
            "GearShaft Seal Cover",
            "Fractured",
            [
              "11.1 Material Fatigue: Over time, repeated stress cycles can weaken the seal material, leading to microscopic cracks that propagate and eventually result in a fracture. This fatigue can occur due to the cyclical pressure changes experienced during pump operation.",
              "11.2  Impact or Mechanical Damage: External factors such as impacts from debris or improper handling during maintenance procedures can cause mechanical damage to the seal, resulting in fractures."
            ],
            ["Wear-out","Random"],
            {
              type: "number",
              text: [
                "fractured seal compromises",
                "Reduced Seal Performance",
              ]
            },
            [

              "1.1 No Pumping water to initiate coolant circulation (Total Failure)",
              "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
            ]
          ],
          [
            "4c",
            "Shaft Seal Cover",
            "Worn",
            [
              "12.1 Abrasion: Continuous contact between the seal and rotating shaft can lead to abrasive wear over time. Particles present in the Cooling water, such as sand, sediment, or debris, can cause abrasive damage to the seal surface, leading to wear",
              "12.2  Corrosion: Exposure to corrosive substances in the Cooling water, such as saltwater or chemicals, can corrode the seal material, leading to localized material degradation and wear. Corrosion weakens the seal's structural integrity and can accelerate wear, particularly in areas with high stress concentrations."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Reduced Pump Performance",
                "Vibration and Noise",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "5a",
            "Shaft",
            "Corroded",
            [
              "13.1 Improper Material Selection: Choosing materials for the shaft that are not resistant to corrosion or incompatible with the Cooling environment can promote corrosion and accelerate its progression.",
              "13.2  High Humidity and Temperature: Elevated humidity levels and fluctuating temperatures in the Cooling area can create conducive conditions for corrosion to occur on the shaft surface.",
              "14.1 Fatigue: Prolonged cyclic loading and unloading of the shaft during pump operation can lead to fatigue failure, causing microscopic cracks to form and propagate over time until a fracture occurs."
            ],
            ["Wear-in","Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Reduced Strength",
                "Impeller Misalignment",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "5b",
            "Shaft",
            "Fractured",
            [
              "14.1 Fatigue: Prolonged cyclic loading and unloading of the shaft during pump operation can lead to fatigue failure, causing microscopic cracks to form and propagate over time until a fracture occurs.",
              "14.2  Corrosion: Corrosive substances present in the Cooling water can degrade the shaft material, reducing its structural integrity and making it more susceptible to fracture failure."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Loss of Functionality",
                "Immediate Loss of Functionality",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "5c",
            "Shaft",
            "Worn",
            [
              "15.1   Abrasion: Continuous contact with abrasive particles present in the Cooling water, such as sand, sediment, or debris, can gradually wear down the surface of the shaft. This abrasion occurs over time and can lead to the thinning of the shaft diameter or the formation of grooves and pits on its surface.",
              "15.2 Corrosion: Exposure to corrosive substances present in the Cooling water, such as saltwater or chemicals, can corrode the shaft material, leading to localized wear and pitting. Corrosion-induced wear weakens the shaft's structural integrity and accelerates its deterioration."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Reduced Efficiency",
                "Seal Leakage",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
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
          "Part",
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
            "1a",
            "Pump Casing",
            "Corroded",
            "Pump Failure: Progressive corrosion of the pump casing weakens the structural integrity of the casing, eventually leading to catastrophic failure, pump malfunction, or complete breakdown, resulting in system downtime and loss of cooling capacity.",
            "1",
            "2",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Leakage from cooling Pump",
                "Decrease flow rate from cooling Pump."
              ],
            },
            "prevent or mitigate corrosion of cooling pump casings, proper maintenance, regular inspections, and use of corrosion-resistant materials are essential."
          ],
          [
            "1b",
            " Pump Casing",
            "Fractured",
            "Environmental Contamination: Fluid leakage from fractured pump casings can contaminate the surrounding environment, posing environmental hazards and safety risks to onboard personnel and marine ecosystems.Bearing seizure and motor shaft immobilization: Severe wear or damage to the bearings can result in bearing seizure, causing the motor shaft to become immobilized and leading to sudden motor failure.",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Decrease flow rate from cooling Pump",
                "No flow from cooling Pump."
              ],
            },
            "To prevent casing fracture of cooling pumps on ships, it's important to adhere to proper installation procedures, conduct regular inspections for signs of stress or damage, and ensure that the pump is operated within its design limits."
          ],
          [
            "1c",
            " Pump Casing",
            "Deformed",
            "pump Malfunction: Deformed pump casings disrupt the normal operation of the circulating pump, resulting in reduced coolant circulation, loss of system efficiency, and potential pump failure, leading to cooling system downtime and operational disruptions.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Bend, crack, casing material",
                "Decrease flow rate from cooling pump."
              ],
            },
            "Recommended to conduct regular inspections, enhance material selection for casing construction, optimize operating conditions, improve installation practices, enhance maintenance procedures"
          ],
          [
            "2a",
            "Impeller",
            "Corroded",
            "Increased Maintenance Costs: Corrosion-related pump failures necessitate costly repairs or replacements, as well as associated labor and downtime expenses, increasing maintenance costs and disrupting vessel operations.",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                " Decrease cooling pump performance",
                " Visible corrosion",
                "Increase noise and vibration."
              ],
            },
            "Assess the damage and consider replacing it with a corrosion-resistant impeller. Implement regular maintenance and consider applying corrosion-resistant coatings. Monitor for future corrosion for sustained pump performance."
          ],
          [
            "2b",
            "Impeller",
            "Fractured",
            "Pump Failure: Fractured pump casings jeopardize the structural integrity of the circulating pump, resulting in pump malfunction, reduced coolant circulation, and eventual pump failure, leading to system downtime and loss of cooling capacity.",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Decrease cooling pump performance",
                "No flow from cooling Pump."
              ],
            },
            "If the impeller of a cooling pump is fractured, it must be swiftly replaced to maintain pump functionality. Prioritize the installation of a new, intact impeller and conduct regular inspections to prevent future fractures."
          ],
          [
            "2c",
            "Impeller",
            "Deformed",
            "Increased Risk of heating: Inadequate cooling water removal due to impeller deformation increases the risk of heating in critical areas of the ship. This poses a safety hazard to the crew, passengers, and cargo, potentially compromising the vessel's seaworthiness and stability.",
            "1",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Decrease cooling pump performance",
                "Noise and vibration."
              ],
            },
            "Replace the deformed impeller promptly with a new one to maintain optimal performance. Regular inspections and monitoring can help detect deformities early on, preventing further issues."
          ],
          [
            "3a",
            "Bearing",
            "Cracked",
            "Compromise structural integrity and load-bearing capacity, leading to progressive deterioration and eventual catastrophic failure, resulting in pump malfunction and system downtime.",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: [
                "Visbile abnormal crack",
                "Vibration abnormal."
              ],
            },
            "Conduct routine visual and ultrasonic inspections to detect early signs of structural damage or load-bearing capacity compromise."
          ],
          [
            "3b",
            "Bearing",
            "Contaiminated",
            "Prone to premature failure due to accelerated wear, surface damage, and reduced load-bearing capacity, ultimately leading to pump malfunction, system downtime, and potentially catastrophic equipment failure.",
            "1",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Oil /substance analysis",
                "Vibration and noise.",
                "Decrease efficiency."
              ],
            },
            "Apply surface treatments or coatings to reduce wear and protect against surface damage."
          ],
          [
            "3c",
            "Bearing",
            "Fractured",
            "Fluid leakage from fractured bearing can contaminate the surrounding environment, posing environmental hazards and safety risks to onboard personnel and marine ecosystems.",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Abnormal noise and vibration",
                "Lubricant Leakage.",
                "Decrease flow rate and pressure."
              ],
            },
            "Regularly inspect and maintain seals to prevent fluid leakage from bearings."
          ],
          [
            "4a",
            "Shaft Seal Cover",
            "Corroded",
            "Fluid Loss: Corroded shaft seal covers can lead to coolant or lubricant leakage from the pump assembly, resulting in reduced fluid levels, loss of system pressure, and diminished cooling or lubrication performance.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Decrease pressure and flowrate",
                "Water leakage arround the pump"
              ],
            },
            "conduct a thorough inspection to assess the extent of corrosion and potential leaks. Replace the corroded seal promptly with a new one, ensuring compatibility with the pump system. Implement corrosion prevention measures, such as applying protective coatings or using corrosion-resistant materials for future seals."
          ],
          [
            "4b",
            "Shaft Seal Cover",
            "Fractured",
            "environmental Hazard: Fluid leakage from fractured shaft seal covers poses environmental hazards, particularly in marine environments, where leaked fluids may pollute waterways or cause harm to marine life.",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Decrease pressure and flowrate",
                " leakage of water."
              ],
            },
            "shut down the pump to prevent further damage and water ingress. Replace the fractured seal with a new one, ensuring compatibility and proper installation. Conduct a thorough inspection of the surrounding components for any damage or wear."
          ],
          [
            "4c",
            "Shaft Seal Cover",
            "Worn",
            "Fluid Leakage: Worn shaft seal covers can contribute to increased fluid leakage from the pump assembly, resulting in loss of coolant or lubricant, reduced system performance, and potential damage to surrounding components due to inadequate lubrication or cooling.",
            "2",
            "1",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: [
                "Leakage of water",
                "Reduced flow rate, decreased pressure, increase power consumption."
              ],
            },
            "To address worn pump seals, promptly replace them and inspect surrounding components for damage. Implement preventive maintenance, monitor seal performance, and apply proper lubrication."
          ],
          [
            "5a",
            "Shaft",
            "Corroded",
            "Shaft Failure: Severe corrosion can weaken the shaft to the point of mechanical failure, resulting in pump malfunction, system downtime, and potential damage to other pump components.",
            "3",
            "1",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: [
                "Friction and vibration",
                "Decrease pump flowrate."
              ],
            },
            "replace it with a corrosion-resistant alternative and inspect surrounding components for damage. Apply protective coatings and establish a preventive maintenance schedule to minimize future corrosion risks."
          ],
          [
            "5b",
            "Shaft",
            "Fractured",
            "Pump Failure: Fractured shafts result in the loss of mechanical integrity and functionality of the circulating pump, leading to system downtime, impaired cooling performance, and disruption of ship operations.",
            "2",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "cooling water output may have fractured metal shaft",
                "Noise and vibration",
                "Decrease pump flowrate",
                "No flow form cooling pump",
              ],
            },
            "If a fractured cooling pump shaft is detected, consider repairing or replacing it depending on the severity of the damage. Inspect other components for any additional damage or corrosion."
          ],
          [
            "4c",
            "Shaft",
            "Worn",
            "Reduced Efficiency: Worn shafts diminish the efficiency of the circulating pump, as increased friction and surface roughness lead to higher energy consumption, reduced flow rates, and decreased coolant circulation.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Abnormal vibration and noise",
                "Reduce flow rate cooling pump",
                "Temperature abnormal caused by friction",
              ],
            },
            "Regular inspection Regular Cleaning: To address a worn shaft in a cooling pump, promptly replace it with a new one and inspect surrounding components for wear or damage. Implement preventive maintenance measures and monitor pump performance regularly."
          ],
        ]
      },
      {
        title: "Maintenance Task Selection",
        backgroundColor: "#f5eafa",
        borderColor: "#912BBC",
        headRow: 2,
        head: [
          "No",
          "Part",
          "Failure Mode",
          ["Risk Characterization", ["CoF", "Rec PoF", "Current Risk"]],
          ["Task Selection", ["Proposed Action (s)", "Proj PoF", "Proj Risk"]],
        ],
        body: [
          [
            "1a",
            "rotor",
            "Overheats",
            "1",
            "2",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                " Regular inspection and maintenance of pump casing.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "1b",
            " Pump Casing",
            "Fractured",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                " Implement containment measures and regular inspection..",
                " Bi-weekly visual inspection of pump casings and immediate action on detected fractures.",	
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "1c",
            " Pump Casing",
            "Deformed",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                " Regular deformation checks and preventive maintenance.",
                " Monthly visual inspection; semi-annual structural integrity assessment.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "2a",
            "Impeller",
            "Corroded",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Corrosion prevention measures and predictive maintenance..",
                "Monthly application of corrosion inhibitors; annual cost-benefit analysis of maintenance.",	
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "2b",
            "Impeller",
            "Fractured",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                " Enhanced monitoring and immediate repair upon fracture detection.",
                " Bi-weekly inspection; immediate corrective action on detected issues.",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "2c",
            "Impeller",
            "Deformed",
            "1",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                " Regular impeller inspection and replacement of deformed parts.",
                " Monthly visual inspection; annual thermal imaging to detect hot spots.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "3a",
            "Bearing",
            "Cracked",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "dot",
              text: [
                "Regular bearing inspection and replacement, Quarterly bearing inspection, replace bearings as necessary.",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "3b",
            "Bearing",
            "Contaiminated",
            "1",
            "2",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                "Contamination control and lubrication maintenance, Monthly inspection and lubrication, immediate replacement of contaminated bearings.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "3c",
            "Bearing",
            "Fractured",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Implement sealing solutions and regular inspection, weekly visual inspection, immediate corrective action on detected leakage.",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "4a",
            "Shaft Seal Cover",
            "Corroded",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                " Regular inspection and replacement of corroded seals.",
                " Monthly visual inspection; replace seals as necessary.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "4b",
            "Shaft Seal Cover",
            "Fractured",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Implement routine lubrication and inspection schedule for gear components.",
                "Apply proper sealing and contamination prevention measures.",
                "Use Corroded-resistant coatings and materials for gears.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "4c",
            "Shaft Seal Cover",
            "Worn",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                " Regular seal maintenance and replacement of worn components.",
                " Monthly visual inspection; replace seals as necessary.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "5a",
            "Shaft",
            "Corroded",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Regular shaft inspection and anti-corrosion treatment.",
                " Monthly visual inspection; annual ultrasonic testing for internal corrosion.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "5b",
            "Shaft",
            "Fractured",
            "2",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "  Immediate replacement of fractured shafts and enhanced monitoring.",
                "  Bi-weekly visual inspection; immediate action on detected fractures.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "5c",
            "Shaft",
            "Worn",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                " Regular shaft maintenance and lubrication.",
                " Monthly visual inspection and lubrication; replace worn shafts as necessary.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
        ]
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
              text: ["immediately clean and re-lubricate the rotor, apply a moisture barrier, and replace any corroded or damaged bearings."]
            },
            "CM/PM",
            ["1.1", "1.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "500 hours and/or Performed on: Damage or performance degradation detection test When corrosion or bearing damage occurs",
            "-",
            "It ensures the rotor operates efficiently and prevents further damage by replacing corroded or damaged bearings promptly.",
          ],
          [
            { 
              type: "dot", 
              text: ["promptly clean and re-lubricate the bearings, apply a corrosion-resistant coating, and replace the damaged bearings."]
            },
            "CM/PM",
            ["2.1", "2.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "250 hours and/or Performed on: Bearing inspection or performance issues When bearing corrosion or damage is detected",
            "-",
            "Applying a corrosion-resistant coating and replacing damaged bearings are critical steps for long-term durability and performance.",
          ],
          [
            { 
              type: "dot", 
              text: ["clean and lubricate rotor components, repair moisture barriers, apply corrosion-resistant coatings, and replace failed lubricants and bearings"]
            },
            "CM/PM",
            ["3.1", "3.2"],
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "1000 hours and/or Performed on: Implementing moisture barriers and corrosion-resistant coatings:",
            "-",
            "It ensures the rotor operate smoothly and have a longer service life.",
          ],
          [
            { 
              type: "dot", 
              text: ["clean and disinfect the coils using UV-C methods, apply a protective coating, and replace any damaged coil sections with corrosion-resistant materials."]
            },
            "CM/PM",
            ["4.1", "4.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "1000 hours and/or Performed on: Coil condition assessment When coil contamination or damage occurs",
            "-",
            "The use of UV-C disinfection and corrosion-resistant materials helps ensure both hygiene and durability.",
          ],
          [
            { 
              type: "dot", 
              text: ["apply protective coatings to the affected coils, replace damaged coil sections with corrosion-resistant materials, and disinfect the area using UV-C methods."]
            },
            "OTC",
            ["5.1", "5.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "500 hours and/or Performed on: Coil damage or contamination inspection When damage or corrosion is detected",
            "-",
            "Applying protective coatings and replacing damaged sections with corrosion-resistant materials help prevent future issues, while UV-C disinfection ensures the area remains hygienic.",
          ],
          [
            { 
              type: "dot", 
              text: ["immediately repair the leak, clean and disinfect the coil surfaces and surrounding areas using UV-C methods, and ensure proper sealing of the repaired area."]
            },
            "CM/PM",
            ["6.1", "6.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "200 hours and/or Performed on: Filter damage or performance issues When a filter is found to be damaged or contaminated",
            "-",
            "Immediate attention to the leak and thorough disinfection with UV-C methods are crucial for preventing further issues and maintaining system integrity.",
          ],
          [
            { 
              type: "dot", 
              text: ["replace the filter with a corrosion-resistant one, clean the filter housing, and disinfect the area using UV-C methods to prevent further contamination."]
            },
            "CM/PM",
            ["7.1", "7.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "200 hours and/or Performed on: Filter inspection or clogging When filter damage or contamination occurs",
            "-",
            "Using a corrosion-resistant filter and disinfecting with UV-C methods ensures that the system remains efficient and free from contamination.",
          ],
          [
            { 
              type: "dot", 
              text: ["immediately replace it with a corrosion-resistant alternative, clean the housing, and use UV-C disinfection to ensure cleanliness."]
            },
            "CM/PM",
            ["8.1", "8.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "200 hours and/or Performed on: Filter damage or performance issues When a filter is found to be damaged or contaminated",
            "-",
            "Using corrosion-resistant materials and UV-C disinfection ensures that the replacement part functions optimally and prevents future contamination.",
          ],
          [
            { 
              type: "dot", 
              text: ["replace them with corrosion-resistant ones, clean the housing, and disinfect using UV-C methods to maintain hygiene."]
            },
            "OTC",
            ["9.1", "9.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "200 hours and/or Performed on: Filter inspection or contamination check When filter corrosion or damage is detected",
            "-",
            "Regular cleaning and UV-C disinfection help maintain hygiene and system efficiency.",
          ],
          [
            { 
              type: "dot", 
              text: ["lubricate and inspect the gears, apply proper seals, and replace damaged gears with corrosion-resistant alternatives."]
            },
            "CM/PM",
            ["10.1", "10.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "1000 hours and/or Performed on: Gear inspection or performance review When gear damage or wear is detected",
            "-",
            "It ensures the gears operate smoothly and have a longer service life.",
          ],
          [
            { 
              type: "dot", 
              text: ["re-lubricate the gear components, ensure proper sealing to prevent contamination, and replace damaged gears with corrosion-resistant materials."]
            },
            "CM/PM",
            ["11.1", "11.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "500 hours and/or Performed on: Gear component inspection or lubrication check When gears are found to be damaged or contaminated",
            "-",
            "Proper sealing and corrosion-resistant materials are crucial for maintaining gear performance and longevity.",
          ],
          [
            { 
              type: "dot", 
              text: ["flush or clean the valve to remove debris, re-lubricate the gear components, apply proper sealing, and replace any damaged parts with corrosion-resistant materials."]
            },
            "CM/PM",
            ["12.1", "12.2"],
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "1000 hours and/or Performed on: Valve inspection or maintenance schedule When valve debris or gear damage is detected",
            "-",
            "It ensures both the valve and gear components are well-maintained and protected against future issues.",
          ],
        ],
      },
    ]
  },
  {
    slug: "circulating-pump-4",
    type: "COOLING_SYSTEM",
    specs: {
      functionalGroup: "Propulsion Function Group",
      system: "Diesel Engine",
      subsystem: "Cooling System",
      equipmentID: "CO-CIP-04",
      equipmentName: "Ciculating Pump",
      drawing: "Cooling System",
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
            "Circulate coolant throughout various components of the ship's cooling system, ensuring optimal operating temperatures and preventing overheating of critical machinery and systems, within specification Capacity 100 M3/H, Head 20m.",
            "Primary",
            ["1,1", "1,2"],
            [
              "No pumping water to initiate coolant circulation (Total Failure)",
              "Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
            ],
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
          "Part",
          "Failure Mode",
          "Causes",
          "Failure Charasteristic",
          "Local Effect",
          "Functional Failure",
        ],
        body: [
          [
            "1a",
            " Pump Casing",
            "Corroded",
            [
              "1.1 Mechanical Stress: Operating conditions such as vibration, pressure changes, and mechanical shocks can subject the casing to mechanical stress. Over time, this stress can cause deformation, especially if the casing material is not sufficiently robust.",
              "1.2 Age and Wear: Like any other equipment on a ship, Cooling pumps and their casings are subject to wear and tear over time. With age, the protective coatings on the casing may degrade, making it more susceptible to corrosion"
            ],
            ["Random","Wear-out"],
            {
              type: "number",
              text: [
                "Reduced Pump Efficiency",
                "Pump Operation with Vibration and Noise",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "1b",
            " Pump Casing",
            "Fractured",
            [
              "2.1 Mechanical Stress: The casing may experience mechanical stress due to factors such as vibration, shock loads, or impacts during normal operation or in rough sea conditions. Over time, this stress can lead to fatigue and eventually fracture of the casing.",
              "2.2  Overloading: If the Cooling pump is subjected to loads beyond its design capacity, such as excessive pressure or flow rate, it can put undue stress on the casing, leading to fracture."
            ],
            ["Random","Random"],
            {
              type: "number",
              text: [
                "Reduced Efficiency",
                "Material Weakening",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "1c",
            " Pump Casing",
            "Deformed",
            [
              "3.1 Mechanical Stress: Operating conditions such as vibration, pressure changes, and mechanical shocks can subject the casing to mechanical stress. Over time, this stress can cause deformation, especially if the casing material is not sufficiently robust.",
              "3.2 Corrosion: Continuous exposure to seawater and other corrosive substances can lead to the corrosion of metal casings over time. Corrosion weakens the structural integrity of the casing, making it susceptible to deformation."
            ],
            ["Random","Wear-out"],
            {
              type: "number",
              text: [
                "Reduced Pump Efficiency",
                "Immediate Loss of Functionality",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "2a",
            "Impeller",
            "Corroded",
            [
              "4.1 High Temperatures: Elevated temperatures in the Cooling area, either due to the pump's operation or nearby machinery, can accelerate corrosion processes, especially if combined with other factors like saltwater exposure or chemical contamination.",
              "4.2  Saltwater Exposure: Ships operate in a highly corrosive environment due to constant exposure to saltwater. If the Cooling pump is not adequately protected or made from corrosion-resistant materials, saltwater exposure can lead to corrosion of the impeller over time."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Reduced Efficiency",
                "Material Weakening",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "2b",
            "Impeller",
            "Fractured",
            [
              "5.1 Material Fatigue: Continuous operation of the Cooling pump impeller can subject it to repeated cycles of stress, leading to material fatigue over time. This fatigue can weaken the material structure of the impeller, eventually resulting in cracks or fractures.",
              "5.2  Impact or Mechanical Damage: External factors such as collisions, debris ingestion, or abrasive wear can cause physical damage to the impeller, resulting in cracks or fractures. Impact from foreign objects or sudden changes in operating conditions can lead to immediate failure or accelerate existing damage."
            ],
            ["Wear-out","Random"],
            {
              type: "number",
              text: [
                "Reduced Pump Efficiency",
                "Immediate Loss of Functionality",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "2c",
            "Impeller",
            "Deformed",
            [
              "6.1  Mechanical Stress: Continuous operation of the Cooling pump can subject the impeller to mechanical stress, especially if it encounters high fluid flow rates or pressure. Over time, this stress can cause the impeller to deform, particularly in areas where the material is weaker or subjected to uneven loading.",
              "6.2  Overloading: Excessive loads on the Cooling pump system, such as sudden surges in fluid volume or pressure, can exceed the impeller's design limits and cause deformation. This can occur due to factors like blockages in the pump, changes in fluid viscosity, or improper pump operation."
            ],
            ["Wear-out","Random"],
            {
              type: "number",
              text: [
                "Vibration and Noise",
                "Reduced Pump Efficiency",
              ]
            },
            [
              "1.1 No Pumping water to initiate coolant circulation (Total Failure)",
              "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
            ]  
          ],
          [
            "3a",
            "Bearing",
            "Cracked",
            [
              "7.1 Impact or Mechanical Damage: External factors like impacts from debris or improper handling during maintenance procedures can cause mechanical damage to the bearings, resulting in cracks.",
              "7.2  Fatigue: Over time, repeated stress cycles experienced by the bearings during pump operation can weaken the material, leading to microscopic cracks that propagate and eventually result in visible cracks."
            ],
            ["Random","Wear-out"],
            {
              type: "number",
              text: [
                "Increased Operating Temperature",
                "Structural Damage",
              ]
            },
            [
              "1.1 No Pumping water to initiate coolant circulation (Total Failure)",
              "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
            ]
          ],
          [
            "3b",
            "Bearing",
            "Contaiminated",
            [
              "8.1  Ingress of Foreign Particles: Small particles such as dirt, sand, debris, or rust can enter the bearing housing, especially if the pump is operating in a harsh environment or if seals are compromised. These particles can contaminate the lubricant and cause abrasive wear on the bearing surfaces.",
              "8.2   Oil or Fuel Leakage: Leakage of oil or fuel from nearby machinery or systems can contaminate the bearing. Oil or fuel contamination can degrade the lubricant's effectiveness, leading to increased friction and wear on the bearing surfaces."
            ],
            ["Random","Random"],
            {
              type: "number",
              text: [
                " Increased Friction and Wear",
                "Reduced Efficiency",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "3c",
            "Bearing",
            "Fractured",
            [
              "9.1   .Overloading: Excessive loads on the bearing beyond its designed capacity can lead to fractures. This can happen due to sudden surges in pump operation, such as during startup or when pumping against high resistance, causing stress concentrations and eventual fracture.",
              "9.2 Fatigue: Prolonged cyclic loading and unloading of the bearing during normal pump operation can lead to fatigue failure over time. This is particularly common in bearings subjected to repeated stress cycles, causing microscopic cracks to form and propagate until complete fracture occurs."
            ],
            ["Random","Wear-out"],
            {
              type: "number",
              text: [
                "Immediate Loss of Functionality",
                "Vibration and Noise",
              ]
            },
            [
              "1.1 No Pumping water to initiate coolant circulation (Total Failure)",
              "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
            ]
          ],
          [
            "4a",
            "Shaft Seal Cover",
            "Corroded",
            [
              "10.1 Exposure to Corrosive Substances: The seal may come into contact with corrosive substances present in the Cooling water, such as saltwater, chemicals, or pollutants. Prolonged exposure to these corrosive agents can degrade the seal material and lead to corrosion.",
              "10.2   High Temperatures and Pressure: Elevated temperatures and pressures within the Cooling pump system can accelerate corrosion processes, particularly if the seal material is not resistant to these conditions."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Corrosion weakens the structural integrity",
                "Reduced Seal Performance",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "4b",
            "GearShaft Seal Cover",
            "Fractured",
            [
              "11.1 Material Fatigue: Over time, repeated stress cycles can weaken the seal material, leading to microscopic cracks that propagate and eventually result in a fracture. This fatigue can occur due to the cyclical pressure changes experienced during pump operation.",
              "11.2  Impact or Mechanical Damage: External factors such as impacts from debris or improper handling during maintenance procedures can cause mechanical damage to the seal, resulting in fractures."
            ],
            ["Wear-out","Random"],
            {
              type: "number",
              text: [
                "fractured seal compromises",
                "Reduced Seal Performance",
              ]
            },
            [

              "1.1 No Pumping water to initiate coolant circulation (Total Failure)",
              "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
            ]
          ],
          [
            "4c",
            "Shaft Seal Cover",
            "Worn",
            [
              "12.1 Abrasion: Continuous contact between the seal and rotating shaft can lead to abrasive wear over time. Particles present in the Cooling water, such as sand, sediment, or debris, can cause abrasive damage to the seal surface, leading to wear",
              "12.2  Corrosion: Exposure to corrosive substances in the Cooling water, such as saltwater or chemicals, can corrode the seal material, leading to localized material degradation and wear. Corrosion weakens the seal's structural integrity and can accelerate wear, particularly in areas with high stress concentrations."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Reduced Pump Performance",
                "Vibration and Noise",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "5a",
            "Shaft",
            "Corroded",
            [
              "13.1 Improper Material Selection: Choosing materials for the shaft that are not resistant to corrosion or incompatible with the Cooling environment can promote corrosion and accelerate its progression.",
              "13.2  High Humidity and Temperature: Elevated humidity levels and fluctuating temperatures in the Cooling area can create conducive conditions for corrosion to occur on the shaft surface.",
              "14.1 Fatigue: Prolonged cyclic loading and unloading of the shaft during pump operation can lead to fatigue failure, causing microscopic cracks to form and propagate over time until a fracture occurs."
            ],
            ["Wear-in","Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Reduced Strength",
                "Impeller Misalignment",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "5b",
            "Shaft",
            "Fractured",
            [
              "14.1 Fatigue: Prolonged cyclic loading and unloading of the shaft during pump operation can lead to fatigue failure, causing microscopic cracks to form and propagate over time until a fracture occurs.",
              "14.2  Corrosion: Corrosive substances present in the Cooling water can degrade the shaft material, reducing its structural integrity and making it more susceptible to fracture failure."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Loss of Functionality",
                "Immediate Loss of Functionality",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "5c",
            "Shaft",
            "Worn",
            [
              "15.1   Abrasion: Continuous contact with abrasive particles present in the Cooling water, such as sand, sediment, or debris, can gradually wear down the surface of the shaft. This abrasion occurs over time and can lead to the thinning of the shaft diameter or the formation of grooves and pits on its surface.",
              "15.2 Corrosion: Exposure to corrosive substances present in the Cooling water, such as saltwater or chemicals, can corrode the shaft material, leading to localized wear and pitting. Corrosion-induced wear weakens the shaft's structural integrity and accelerates its deterioration."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Reduced Efficiency",
                "Seal Leakage",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
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
          "Part",
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
            "1a",
            "Pump Casing",
            "Corroded",
            "Pump Failure: Progressive corrosion of the pump casing weakens the structural integrity of the casing, eventually leading to catastrophic failure, pump malfunction, or complete breakdown, resulting in system downtime and loss of cooling capacity.",
            "1",
            "2",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Leakage from cooling Pump",
                "Decrease flow rate from cooling Pump."
              ],
            },
            "prevent or mitigate corrosion of cooling pump casings, proper maintenance, regular inspections, and use of corrosion-resistant materials are essential."
          ],
          [
            "1b",
            " Pump Casing",
            "Fractured",
            "Environmental Contamination: Fluid leakage from fractured pump casings can contaminate the surrounding environment, posing environmental hazards and safety risks to onboard personnel and marine ecosystems.Bearing seizure and motor shaft immobilization: Severe wear or damage to the bearings can result in bearing seizure, causing the motor shaft to become immobilized and leading to sudden motor failure.",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Decrease flow rate from cooling Pump",
                "No flow from cooling Pump."
              ],
            },
            "To prevent casing fracture of cooling pumps on ships, it's important to adhere to proper installation procedures, conduct regular inspections for signs of stress or damage, and ensure that the pump is operated within its design limits."
          ],
          [
            "1c",
            " Pump Casing",
            "Deformed",
            "pump Malfunction: Deformed pump casings disrupt the normal operation of the circulating pump, resulting in reduced coolant circulation, loss of system efficiency, and potential pump failure, leading to cooling system downtime and operational disruptions.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Bend, crack, casing material",
                "Decrease flow rate from cooling pump."
              ],
            },
            "Recommended to conduct regular inspections, enhance material selection for casing construction, optimize operating conditions, improve installation practices, enhance maintenance procedures"
          ],
          [
            "2a",
            "Impeller",
            "Corroded",
            "Increased Maintenance Costs: Corrosion-related pump failures necessitate costly repairs or replacements, as well as associated labor and downtime expenses, increasing maintenance costs and disrupting vessel operations.",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                " Decrease cooling pump performance",
                " Visible corrosion",
                "Increase noise and vibration."
              ],
            },
            "Assess the damage and consider replacing it with a corrosion-resistant impeller. Implement regular maintenance and consider applying corrosion-resistant coatings. Monitor for future corrosion for sustained pump performance."
          ],
          [
            "2b",
            "Impeller",
            "Fractured",
            "Pump Failure: Fractured pump casings jeopardize the structural integrity of the circulating pump, resulting in pump malfunction, reduced coolant circulation, and eventual pump failure, leading to system downtime and loss of cooling capacity.",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Decrease cooling pump performance",
                "No flow from cooling Pump."
              ],
            },
            "If the impeller of a cooling pump is fractured, it must be swiftly replaced to maintain pump functionality. Prioritize the installation of a new, intact impeller and conduct regular inspections to prevent future fractures."
          ],
          [
            "2c",
            "Impeller",
            "Deformed",
            "Increased Risk of heating: Inadequate cooling water removal due to impeller deformation increases the risk of heating in critical areas of the ship. This poses a safety hazard to the crew, passengers, and cargo, potentially compromising the vessel's seaworthiness and stability.",
            "1",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Decrease cooling pump performance",
                "Noise and vibration."
              ],
            },
            "Replace the deformed impeller promptly with a new one to maintain optimal performance. Regular inspections and monitoring can help detect deformities early on, preventing further issues."
          ],
          [
            "3a",
            "Bearing",
            "Cracked",
            "Compromise structural integrity and load-bearing capacity, leading to progressive deterioration and eventual catastrophic failure, resulting in pump malfunction and system downtime.",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: [
                "Visbile abnormal crack",
                "Vibration abnormal."
              ],
            },
            "Conduct routine visual and ultrasonic inspections to detect early signs of structural damage or load-bearing capacity compromise."
          ],
          [
            "3b",
            "Bearing",
            "Contaiminated",
            "Prone to premature failure due to accelerated wear, surface damage, and reduced load-bearing capacity, ultimately leading to pump malfunction, system downtime, and potentially catastrophic equipment failure.",
            "1",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Oil /substance analysis",
                "Vibration and noise.",
                "Decrease efficiency."
              ],
            },
            "Apply surface treatments or coatings to reduce wear and protect against surface damage."
          ],
          [
            "3c",
            "Bearing",
            "Fractured",
            "Fluid leakage from fractured bearing can contaminate the surrounding environment, posing environmental hazards and safety risks to onboard personnel and marine ecosystems.",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Abnormal noise and vibration",
                "Lubricant Leakage.",
                "Decrease flow rate and pressure."
              ],
            },
            "Regularly inspect and maintain seals to prevent fluid leakage from bearings."
          ],
          [
            "4a",
            "Shaft Seal Cover",
            "Corroded",
            "Fluid Loss: Corroded shaft seal covers can lead to coolant or lubricant leakage from the pump assembly, resulting in reduced fluid levels, loss of system pressure, and diminished cooling or lubrication performance.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Decrease pressure and flowrate",
                "Water leakage arround the pump"
              ],
            },
            "conduct a thorough inspection to assess the extent of corrosion and potential leaks. Replace the corroded seal promptly with a new one, ensuring compatibility with the pump system. Implement corrosion prevention measures, such as applying protective coatings or using corrosion-resistant materials for future seals."
          ],
          [
            "4b",
            "Shaft Seal Cover",
            "Fractured",
            "environmental Hazard: Fluid leakage from fractured shaft seal covers poses environmental hazards, particularly in marine environments, where leaked fluids may pollute waterways or cause harm to marine life.",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Decrease pressure and flowrate",
                " leakage of water."
              ],
            },
            "shut down the pump to prevent further damage and water ingress. Replace the fractured seal with a new one, ensuring compatibility and proper installation. Conduct a thorough inspection of the surrounding components for any damage or wear."
          ],
          [
            "4c",
            "Shaft Seal Cover",
            "Worn",
            "Fluid Leakage: Worn shaft seal covers can contribute to increased fluid leakage from the pump assembly, resulting in loss of coolant or lubricant, reduced system performance, and potential damage to surrounding components due to inadequate lubrication or cooling.",
            "2",
            "1",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: [
                "Leakage of water",
                "Reduced flow rate, decreased pressure, increase power consumption."
              ],
            },
            "To address worn pump seals, promptly replace them and inspect surrounding components for damage. Implement preventive maintenance, monitor seal performance, and apply proper lubrication."
          ],
          [
            "5a",
            "Shaft",
            "Corroded",
            "Shaft Failure: Severe corrosion can weaken the shaft to the point of mechanical failure, resulting in pump malfunction, system downtime, and potential damage to other pump components.",
            "3",
            "1",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: [
                "Friction and vibration",
                "Decrease pump flowrate."
              ],
            },
            "replace it with a corrosion-resistant alternative and inspect surrounding components for damage. Apply protective coatings and establish a preventive maintenance schedule to minimize future corrosion risks."
          ],
          [
            "5b",
            "Shaft",
            "Fractured",
            "Pump Failure: Fractured shafts result in the loss of mechanical integrity and functionality of the circulating pump, leading to system downtime, impaired cooling performance, and disruption of ship operations.",
            "2",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "cooling water output may have fractured metal shaft",
                "Noise and vibration",
                "Decrease pump flowrate",
                "No flow form cooling pump",
              ],
            },
            "If a fractured cooling pump shaft is detected, consider repairing or replacing it depending on the severity of the damage. Inspect other components for any additional damage or corrosion."
          ],
          [
            "4c",
            "Shaft",
            "Worn",
            "Reduced Efficiency: Worn shafts diminish the efficiency of the circulating pump, as increased friction and surface roughness lead to higher energy consumption, reduced flow rates, and decreased coolant circulation.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Abnormal vibration and noise",
                "Reduce flow rate cooling pump",
                "Temperature abnormal caused by friction",
              ],
            },
            "Regular inspection Regular Cleaning: To address a worn shaft in a cooling pump, promptly replace it with a new one and inspect surrounding components for wear or damage. Implement preventive maintenance measures and monitor pump performance regularly."
          ],
        ]
      },
      {
        title: "Maintenance Task Selection",
        backgroundColor: "#f5eafa",
        borderColor: "#912BBC",
        headRow: 2,
        head: [
          "No",
          "Part",
          "Failure Mode",
          ["Risk Characterization", ["CoF", "Rec PoF", "Current Risk"]],
          ["Task Selection", ["Proposed Action (s)", "Proj PoF", "Proj Risk"]],
        ],
        body: [
          [
            "1a",
            "rotor",
            "Overheats",
            "1",
            "2",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                " Regular inspection and maintenance of pump casing.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "1b",
            " Pump Casing",
            "Fractured",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                " Implement containment measures and regular inspection..",
                " Bi-weekly visual inspection of pump casings and immediate action on detected fractures.",	
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "1c",
            " Pump Casing",
            "Deformed",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                " Regular deformation checks and preventive maintenance.",
                " Monthly visual inspection; semi-annual structural integrity assessment.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "2a",
            "Impeller",
            "Corroded",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Corrosion prevention measures and predictive maintenance..",
                "Monthly application of corrosion inhibitors; annual cost-benefit analysis of maintenance.",	
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "2b",
            "Impeller",
            "Fractured",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                " Enhanced monitoring and immediate repair upon fracture detection.",
                " Bi-weekly inspection; immediate corrective action on detected issues.",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "2c",
            "Impeller",
            "Deformed",
            "1",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                " Regular impeller inspection and replacement of deformed parts.",
                " Monthly visual inspection; annual thermal imaging to detect hot spots.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "3a",
            "Bearing",
            "Cracked",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "dot",
              text: [
                "Regular bearing inspection and replacement, Quarterly bearing inspection, replace bearings as necessary.",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "3b",
            "Bearing",
            "Contaiminated",
            "1",
            "2",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                "Contamination control and lubrication maintenance, Monthly inspection and lubrication, immediate replacement of contaminated bearings.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "3c",
            "Bearing",
            "Fractured",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Implement sealing solutions and regular inspection, weekly visual inspection, immediate corrective action on detected leakage.",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "4a",
            "Shaft Seal Cover",
            "Corroded",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                " Regular inspection and replacement of corroded seals.",
                " Monthly visual inspection; replace seals as necessary.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "4b",
            "Shaft Seal Cover",
            "Fractured",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Implement routine lubrication and inspection schedule for gear components.",
                "Apply proper sealing and contamination prevention measures.",
                "Use Corroded-resistant coatings and materials for gears.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "4c",
            "Shaft Seal Cover",
            "Worn",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                " Regular seal maintenance and replacement of worn components.",
                " Monthly visual inspection; replace seals as necessary.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "5a",
            "Shaft",
            "Corroded",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Regular shaft inspection and anti-corrosion treatment.",
                " Monthly visual inspection; annual ultrasonic testing for internal corrosion.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "5b",
            "Shaft",
            "Fractured",
            "2",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "  Immediate replacement of fractured shafts and enhanced monitoring.",
                "  Bi-weekly visual inspection; immediate action on detected fractures.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "5c",
            "Shaft",
            "Worn",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                " Regular shaft maintenance and lubrication.",
                " Monthly visual inspection and lubrication; replace worn shafts as necessary.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
        ]
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
              text: ["immediately clean and re-lubricate the rotor, apply a moisture barrier, and replace any corroded or damaged bearings."]
            },
            "CM/PM",
            ["1.1", "1.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "500 hours and/or Performed on: Damage or performance degradation detection test When corrosion or bearing damage occurs",
            "-",
            "It ensures the rotor operates efficiently and prevents further damage by replacing corroded or damaged bearings promptly.",
          ],
          [
            { 
              type: "dot", 
              text: ["promptly clean and re-lubricate the bearings, apply a corrosion-resistant coating, and replace the damaged bearings."]
            },
            "CM/PM",
            ["2.1", "2.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "250 hours and/or Performed on: Bearing inspection or performance issues When bearing corrosion or damage is detected",
            "-",
            "Applying a corrosion-resistant coating and replacing damaged bearings are critical steps for long-term durability and performance.",
          ],
          [
            { 
              type: "dot", 
              text: ["clean and lubricate rotor components, repair moisture barriers, apply corrosion-resistant coatings, and replace failed lubricants and bearings"]
            },
            "CM/PM",
            ["3.1", "3.2"],
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "1000 hours and/or Performed on: Implementing moisture barriers and corrosion-resistant coatings:",
            "-",
            "It ensures the rotor operate smoothly and have a longer service life.",
          ],
          [
            { 
              type: "dot", 
              text: ["clean and disinfect the coils using UV-C methods, apply a protective coating, and replace any damaged coil sections with corrosion-resistant materials."]
            },
            "CM/PM",
            ["4.1", "4.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "1000 hours and/or Performed on: Coil condition assessment When coil contamination or damage occurs",
            "-",
            "The use of UV-C disinfection and corrosion-resistant materials helps ensure both hygiene and durability.",
          ],
          [
            { 
              type: "dot", 
              text: ["apply protective coatings to the affected coils, replace damaged coil sections with corrosion-resistant materials, and disinfect the area using UV-C methods."]
            },
            "OTC",
            ["5.1", "5.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "500 hours and/or Performed on: Coil damage or contamination inspection When damage or corrosion is detected",
            "-",
            "Applying protective coatings and replacing damaged sections with corrosion-resistant materials help prevent future issues, while UV-C disinfection ensures the area remains hygienic.",
          ],
          [
            { 
              type: "dot", 
              text: ["immediately repair the leak, clean and disinfect the coil surfaces and surrounding areas using UV-C methods, and ensure proper sealing of the repaired area."]
            },
            "CM/PM",
            ["6.1", "6.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "200 hours and/or Performed on: Filter damage or performance issues When a filter is found to be damaged or contaminated",
            "-",
            "Immediate attention to the leak and thorough disinfection with UV-C methods are crucial for preventing further issues and maintaining system integrity.",
          ],
          [
            { 
              type: "dot", 
              text: ["replace the filter with a corrosion-resistant one, clean the filter housing, and disinfect the area using UV-C methods to prevent further contamination."]
            },
            "CM/PM",
            ["7.1", "7.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "200 hours and/or Performed on: Filter inspection or clogging When filter damage or contamination occurs",
            "-",
            "Using a corrosion-resistant filter and disinfecting with UV-C methods ensures that the system remains efficient and free from contamination.",
          ],
          [
            { 
              type: "dot", 
              text: ["immediately replace it with a corrosion-resistant alternative, clean the housing, and use UV-C disinfection to ensure cleanliness."]
            },
            "CM/PM",
            ["8.1", "8.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "200 hours and/or Performed on: Filter damage or performance issues When a filter is found to be damaged or contaminated",
            "-",
            "Using corrosion-resistant materials and UV-C disinfection ensures that the replacement part functions optimally and prevents future contamination.",
          ],
          [
            { 
              type: "dot", 
              text: ["replace them with corrosion-resistant ones, clean the housing, and disinfect using UV-C methods to maintain hygiene."]
            },
            "OTC",
            ["9.1", "9.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "200 hours and/or Performed on: Filter inspection or contamination check When filter corrosion or damage is detected",
            "-",
            "Regular cleaning and UV-C disinfection help maintain hygiene and system efficiency.",
          ],
          [
            { 
              type: "dot", 
              text: ["lubricate and inspect the gears, apply proper seals, and replace damaged gears with corrosion-resistant alternatives."]
            },
            "CM/PM",
            ["10.1", "10.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "1000 hours and/or Performed on: Gear inspection or performance review When gear damage or wear is detected",
            "-",
            "It ensures the gears operate smoothly and have a longer service life.",
          ],
          [
            { 
              type: "dot", 
              text: ["re-lubricate the gear components, ensure proper sealing to prevent contamination, and replace damaged gears with corrosion-resistant materials."]
            },
            "CM/PM",
            ["11.1", "11.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "500 hours and/or Performed on: Gear component inspection or lubrication check When gears are found to be damaged or contaminated",
            "-",
            "Proper sealing and corrosion-resistant materials are crucial for maintaining gear performance and longevity.",
          ],
          [
            { 
              type: "dot", 
              text: ["flush or clean the valve to remove debris, re-lubricate the gear components, apply proper sealing, and replace any damaged parts with corrosion-resistant materials."]
            },
            "CM/PM",
            ["12.1", "12.2"],
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "1000 hours and/or Performed on: Valve inspection or maintenance schedule When valve debris or gear damage is detected",
            "-",
            "It ensures both the valve and gear components are well-maintained and protected against future issues.",
          ],
        ],
      },
    ]
  },
  {
    slug: "circulating-pump-5",
    type: "COOLING_SYSTEM",
    specs: {
      functionalGroup: "Propulsion Function Group",
      system: "Diesel Engine",
      subsystem: "Cooling System",
      equipmentID: "CO-CIP-05",
      equipmentName: "Ciculating Pump",
      drawing: "Cooling System",
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
            "Circulate coolant throughout various components of the ship's cooling system, ensuring optimal operating temperatures and preventing overheating of critical machinery and systems, within specification Capacity 100 M3/H, Head 20m.",
            "Primary",
            ["1,1", "1,2"],
            [
              "No pumping water to initiate coolant circulation (Total Failure)",
              "Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
            ],
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
          "Part",
          "Failure Mode",
          "Causes",
          "Failure Charasteristic",
          "Local Effect",
          "Functional Failure",
        ],
        body: [
          [
            "1a",
            " Pump Casing",
            "Corroded",
            [
              "1.1 Mechanical Stress: Operating conditions such as vibration, pressure changes, and mechanical shocks can subject the casing to mechanical stress. Over time, this stress can cause deformation, especially if the casing material is not sufficiently robust.",
              "1.2 Age and Wear: Like any other equipment on a ship, Cooling pumps and their casings are subject to wear and tear over time. With age, the protective coatings on the casing may degrade, making it more susceptible to corrosion"
            ],
            ["Random","Wear-out"],
            {
              type: "number",
              text: [
                "Reduced Pump Efficiency",
                "Pump Operation with Vibration and Noise",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "1b",
            " Pump Casing",
            "Fractured",
            [
              "2.1 Mechanical Stress: The casing may experience mechanical stress due to factors such as vibration, shock loads, or impacts during normal operation or in rough sea conditions. Over time, this stress can lead to fatigue and eventually fracture of the casing.",
              "2.2  Overloading: If the Cooling pump is subjected to loads beyond its design capacity, such as excessive pressure or flow rate, it can put undue stress on the casing, leading to fracture."
            ],
            ["Random","Random"],
            {
              type: "number",
              text: [
                "Reduced Efficiency",
                "Material Weakening",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "1c",
            " Pump Casing",
            "Deformed",
            [
              "3.1 Mechanical Stress: Operating conditions such as vibration, pressure changes, and mechanical shocks can subject the casing to mechanical stress. Over time, this stress can cause deformation, especially if the casing material is not sufficiently robust.",
              "3.2 Corrosion: Continuous exposure to seawater and other corrosive substances can lead to the corrosion of metal casings over time. Corrosion weakens the structural integrity of the casing, making it susceptible to deformation."
            ],
            ["Random","Wear-out"],
            {
              type: "number",
              text: [
                "Reduced Pump Efficiency",
                "Immediate Loss of Functionality",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "2a",
            "Impeller",
            "Corroded",
            [
              "4.1 High Temperatures: Elevated temperatures in the Cooling area, either due to the pump's operation or nearby machinery, can accelerate corrosion processes, especially if combined with other factors like saltwater exposure or chemical contamination.",
              "4.2  Saltwater Exposure: Ships operate in a highly corrosive environment due to constant exposure to saltwater. If the Cooling pump is not adequately protected or made from corrosion-resistant materials, saltwater exposure can lead to corrosion of the impeller over time."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Reduced Efficiency",
                "Material Weakening",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "2b",
            "Impeller",
            "Fractured",
            [
              "5.1 Material Fatigue: Continuous operation of the Cooling pump impeller can subject it to repeated cycles of stress, leading to material fatigue over time. This fatigue can weaken the material structure of the impeller, eventually resulting in cracks or fractures.",
              "5.2  Impact or Mechanical Damage: External factors such as collisions, debris ingestion, or abrasive wear can cause physical damage to the impeller, resulting in cracks or fractures. Impact from foreign objects or sudden changes in operating conditions can lead to immediate failure or accelerate existing damage."
            ],
            ["Wear-out","Random"],
            {
              type: "number",
              text: [
                "Reduced Pump Efficiency",
                "Immediate Loss of Functionality",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "2c",
            "Impeller",
            "Deformed",
            [
              "6.1  Mechanical Stress: Continuous operation of the Cooling pump can subject the impeller to mechanical stress, especially if it encounters high fluid flow rates or pressure. Over time, this stress can cause the impeller to deform, particularly in areas where the material is weaker or subjected to uneven loading.",
              "6.2  Overloading: Excessive loads on the Cooling pump system, such as sudden surges in fluid volume or pressure, can exceed the impeller's design limits and cause deformation. This can occur due to factors like blockages in the pump, changes in fluid viscosity, or improper pump operation."
            ],
            ["Wear-out","Random"],
            {
              type: "number",
              text: [
                "Vibration and Noise",
                "Reduced Pump Efficiency",
              ]
            },
            [
              "1.1 No Pumping water to initiate coolant circulation (Total Failure)",
              "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
            ]  
          ],
          [
            "3a",
            "Bearing",
            "Cracked",
            [
              "7.1 Impact or Mechanical Damage: External factors like impacts from debris or improper handling during maintenance procedures can cause mechanical damage to the bearings, resulting in cracks.",
              "7.2  Fatigue: Over time, repeated stress cycles experienced by the bearings during pump operation can weaken the material, leading to microscopic cracks that propagate and eventually result in visible cracks."
            ],
            ["Random","Wear-out"],
            {
              type: "number",
              text: [
                "Increased Operating Temperature",
                "Structural Damage",
              ]
            },
            [
              "1.1 No Pumping water to initiate coolant circulation (Total Failure)",
              "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
            ]
          ],
          [
            "3b",
            "Bearing",
            "Contaiminated",
            [
              "8.1  Ingress of Foreign Particles: Small particles such as dirt, sand, debris, or rust can enter the bearing housing, especially if the pump is operating in a harsh environment or if seals are compromised. These particles can contaminate the lubricant and cause abrasive wear on the bearing surfaces.",
              "8.2   Oil or Fuel Leakage: Leakage of oil or fuel from nearby machinery or systems can contaminate the bearing. Oil or fuel contamination can degrade the lubricant's effectiveness, leading to increased friction and wear on the bearing surfaces."
            ],
            ["Random","Random"],
            {
              type: "number",
              text: [
                " Increased Friction and Wear",
                "Reduced Efficiency",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "3c",
            "Bearing",
            "Fractured",
            [
              "9.1   .Overloading: Excessive loads on the bearing beyond its designed capacity can lead to fractures. This can happen due to sudden surges in pump operation, such as during startup or when pumping against high resistance, causing stress concentrations and eventual fracture.",
              "9.2 Fatigue: Prolonged cyclic loading and unloading of the bearing during normal pump operation can lead to fatigue failure over time. This is particularly common in bearings subjected to repeated stress cycles, causing microscopic cracks to form and propagate until complete fracture occurs."
            ],
            ["Random","Wear-out"],
            {
              type: "number",
              text: [
                "Immediate Loss of Functionality",
                "Vibration and Noise",
              ]
            },
            [
              "1.1 No Pumping water to initiate coolant circulation (Total Failure)",
              "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
            ]
          ],
          [
            "4a",
            "Shaft Seal Cover",
            "Corroded",
            [
              "10.1 Exposure to Corrosive Substances: The seal may come into contact with corrosive substances present in the Cooling water, such as saltwater, chemicals, or pollutants. Prolonged exposure to these corrosive agents can degrade the seal material and lead to corrosion.",
              "10.2   High Temperatures and Pressure: Elevated temperatures and pressures within the Cooling pump system can accelerate corrosion processes, particularly if the seal material is not resistant to these conditions."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Corrosion weakens the structural integrity",
                "Reduced Seal Performance",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "4b",
            "GearShaft Seal Cover",
            "Fractured",
            [
              "11.1 Material Fatigue: Over time, repeated stress cycles can weaken the seal material, leading to microscopic cracks that propagate and eventually result in a fracture. This fatigue can occur due to the cyclical pressure changes experienced during pump operation.",
              "11.2  Impact or Mechanical Damage: External factors such as impacts from debris or improper handling during maintenance procedures can cause mechanical damage to the seal, resulting in fractures."
            ],
            ["Wear-out","Random"],
            {
              type: "number",
              text: [
                "fractured seal compromises",
                "Reduced Seal Performance",
              ]
            },
            [

              "1.1 No Pumping water to initiate coolant circulation (Total Failure)",
              "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
            ]
          ],
          [
            "4c",
            "Shaft Seal Cover",
            "Worn",
            [
              "12.1 Abrasion: Continuous contact between the seal and rotating shaft can lead to abrasive wear over time. Particles present in the Cooling water, such as sand, sediment, or debris, can cause abrasive damage to the seal surface, leading to wear",
              "12.2  Corrosion: Exposure to corrosive substances in the Cooling water, such as saltwater or chemicals, can corrode the seal material, leading to localized material degradation and wear. Corrosion weakens the seal's structural integrity and can accelerate wear, particularly in areas with high stress concentrations."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Reduced Pump Performance",
                "Vibration and Noise",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "5a",
            "Shaft",
            "Corroded",
            [
              "13.1 Improper Material Selection: Choosing materials for the shaft that are not resistant to corrosion or incompatible with the Cooling environment can promote corrosion and accelerate its progression.",
              "13.2  High Humidity and Temperature: Elevated humidity levels and fluctuating temperatures in the Cooling area can create conducive conditions for corrosion to occur on the shaft surface.",
              "14.1 Fatigue: Prolonged cyclic loading and unloading of the shaft during pump operation can lead to fatigue failure, causing microscopic cracks to form and propagate over time until a fracture occurs."
            ],
            ["Wear-in","Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Reduced Strength",
                "Impeller Misalignment",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "5b",
            "Shaft",
            "Fractured",
            [
              "14.1 Fatigue: Prolonged cyclic loading and unloading of the shaft during pump operation can lead to fatigue failure, causing microscopic cracks to form and propagate over time until a fracture occurs.",
              "14.2  Corrosion: Corrosive substances present in the Cooling water can degrade the shaft material, reducing its structural integrity and making it more susceptible to fracture failure."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Loss of Functionality",
                "Immediate Loss of Functionality",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "5c",
            "Shaft",
            "Worn",
            [
              "15.1   Abrasion: Continuous contact with abrasive particles present in the Cooling water, such as sand, sediment, or debris, can gradually wear down the surface of the shaft. This abrasion occurs over time and can lead to the thinning of the shaft diameter or the formation of grooves and pits on its surface.",
              "15.2 Corrosion: Exposure to corrosive substances present in the Cooling water, such as saltwater or chemicals, can corrode the shaft material, leading to localized wear and pitting. Corrosion-induced wear weakens the shaft's structural integrity and accelerates its deterioration."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Reduced Efficiency",
                "Seal Leakage",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
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
          "Part",
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
            "1a",
            "Pump Casing",
            "Corroded",
            "Pump Failure: Progressive corrosion of the pump casing weakens the structural integrity of the casing, eventually leading to catastrophic failure, pump malfunction, or complete breakdown, resulting in system downtime and loss of cooling capacity.",
            "1",
            "2",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Leakage from cooling Pump",
                "Decrease flow rate from cooling Pump."
              ],
            },
            "prevent or mitigate corrosion of cooling pump casings, proper maintenance, regular inspections, and use of corrosion-resistant materials are essential."
          ],
          [
            "1b",
            " Pump Casing",
            "Fractured",
            "Environmental Contamination: Fluid leakage from fractured pump casings can contaminate the surrounding environment, posing environmental hazards and safety risks to onboard personnel and marine ecosystems.Bearing seizure and motor shaft immobilization: Severe wear or damage to the bearings can result in bearing seizure, causing the motor shaft to become immobilized and leading to sudden motor failure.",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Decrease flow rate from cooling Pump",
                "No flow from cooling Pump."
              ],
            },
            "To prevent casing fracture of cooling pumps on ships, it's important to adhere to proper installation procedures, conduct regular inspections for signs of stress or damage, and ensure that the pump is operated within its design limits."
          ],
          [
            "1c",
            " Pump Casing",
            "Deformed",
            "pump Malfunction: Deformed pump casings disrupt the normal operation of the circulating pump, resulting in reduced coolant circulation, loss of system efficiency, and potential pump failure, leading to cooling system downtime and operational disruptions.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Bend, crack, casing material",
                "Decrease flow rate from cooling pump."
              ],
            },
            "Recommended to conduct regular inspections, enhance material selection for casing construction, optimize operating conditions, improve installation practices, enhance maintenance procedures"
          ],
          [
            "2a",
            "Impeller",
            "Corroded",
            "Increased Maintenance Costs: Corrosion-related pump failures necessitate costly repairs or replacements, as well as associated labor and downtime expenses, increasing maintenance costs and disrupting vessel operations.",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                " Decrease cooling pump performance",
                " Visible corrosion",
                "Increase noise and vibration."
              ],
            },
            "Assess the damage and consider replacing it with a corrosion-resistant impeller. Implement regular maintenance and consider applying corrosion-resistant coatings. Monitor for future corrosion for sustained pump performance."
          ],
          [
            "2b",
            "Impeller",
            "Fractured",
            "Pump Failure: Fractured pump casings jeopardize the structural integrity of the circulating pump, resulting in pump malfunction, reduced coolant circulation, and eventual pump failure, leading to system downtime and loss of cooling capacity.",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Decrease cooling pump performance",
                "No flow from cooling Pump."
              ],
            },
            "If the impeller of a cooling pump is fractured, it must be swiftly replaced to maintain pump functionality. Prioritize the installation of a new, intact impeller and conduct regular inspections to prevent future fractures."
          ],
          [
            "2c",
            "Impeller",
            "Deformed",
            "Increased Risk of heating: Inadequate cooling water removal due to impeller deformation increases the risk of heating in critical areas of the ship. This poses a safety hazard to the crew, passengers, and cargo, potentially compromising the vessel's seaworthiness and stability.",
            "1",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Decrease cooling pump performance",
                "Noise and vibration."
              ],
            },
            "Replace the deformed impeller promptly with a new one to maintain optimal performance. Regular inspections and monitoring can help detect deformities early on, preventing further issues."
          ],
          [
            "3a",
            "Bearing",
            "Cracked",
            "Compromise structural integrity and load-bearing capacity, leading to progressive deterioration and eventual catastrophic failure, resulting in pump malfunction and system downtime.",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: [
                "Visbile abnormal crack",
                "Vibration abnormal."
              ],
            },
            "Conduct routine visual and ultrasonic inspections to detect early signs of structural damage or load-bearing capacity compromise."
          ],
          [
            "3b",
            "Bearing",
            "Contaiminated",
            "Prone to premature failure due to accelerated wear, surface damage, and reduced load-bearing capacity, ultimately leading to pump malfunction, system downtime, and potentially catastrophic equipment failure.",
            "1",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Oil /substance analysis",
                "Vibration and noise.",
                "Decrease efficiency."
              ],
            },
            "Apply surface treatments or coatings to reduce wear and protect against surface damage."
          ],
          [
            "3c",
            "Bearing",
            "Fractured",
            "Fluid leakage from fractured bearing can contaminate the surrounding environment, posing environmental hazards and safety risks to onboard personnel and marine ecosystems.",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Abnormal noise and vibration",
                "Lubricant Leakage.",
                "Decrease flow rate and pressure."
              ],
            },
            "Regularly inspect and maintain seals to prevent fluid leakage from bearings."
          ],
          [
            "4a",
            "Shaft Seal Cover",
            "Corroded",
            "Fluid Loss: Corroded shaft seal covers can lead to coolant or lubricant leakage from the pump assembly, resulting in reduced fluid levels, loss of system pressure, and diminished cooling or lubrication performance.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Decrease pressure and flowrate",
                "Water leakage arround the pump"
              ],
            },
            "conduct a thorough inspection to assess the extent of corrosion and potential leaks. Replace the corroded seal promptly with a new one, ensuring compatibility with the pump system. Implement corrosion prevention measures, such as applying protective coatings or using corrosion-resistant materials for future seals."
          ],
          [
            "4b",
            "Shaft Seal Cover",
            "Fractured",
            "environmental Hazard: Fluid leakage from fractured shaft seal covers poses environmental hazards, particularly in marine environments, where leaked fluids may pollute waterways or cause harm to marine life.",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Decrease pressure and flowrate",
                " leakage of water."
              ],
            },
            "shut down the pump to prevent further damage and water ingress. Replace the fractured seal with a new one, ensuring compatibility and proper installation. Conduct a thorough inspection of the surrounding components for any damage or wear."
          ],
          [
            "4c",
            "Shaft Seal Cover",
            "Worn",
            "Fluid Leakage: Worn shaft seal covers can contribute to increased fluid leakage from the pump assembly, resulting in loss of coolant or lubricant, reduced system performance, and potential damage to surrounding components due to inadequate lubrication or cooling.",
            "2",
            "1",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: [
                "Leakage of water",
                "Reduced flow rate, decreased pressure, increase power consumption."
              ],
            },
            "To address worn pump seals, promptly replace them and inspect surrounding components for damage. Implement preventive maintenance, monitor seal performance, and apply proper lubrication."
          ],
          [
            "5a",
            "Shaft",
            "Corroded",
            "Shaft Failure: Severe corrosion can weaken the shaft to the point of mechanical failure, resulting in pump malfunction, system downtime, and potential damage to other pump components.",
            "3",
            "1",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: [
                "Friction and vibration",
                "Decrease pump flowrate."
              ],
            },
            "replace it with a corrosion-resistant alternative and inspect surrounding components for damage. Apply protective coatings and establish a preventive maintenance schedule to minimize future corrosion risks."
          ],
          [
            "5b",
            "Shaft",
            "Fractured",
            "Pump Failure: Fractured shafts result in the loss of mechanical integrity and functionality of the circulating pump, leading to system downtime, impaired cooling performance, and disruption of ship operations.",
            "2",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "cooling water output may have fractured metal shaft",
                "Noise and vibration",
                "Decrease pump flowrate",
                "No flow form cooling pump",
              ],
            },
            "If a fractured cooling pump shaft is detected, consider repairing or replacing it depending on the severity of the damage. Inspect other components for any additional damage or corrosion."
          ],
          [
            "4c",
            "Shaft",
            "Worn",
            "Reduced Efficiency: Worn shafts diminish the efficiency of the circulating pump, as increased friction and surface roughness lead to higher energy consumption, reduced flow rates, and decreased coolant circulation.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Abnormal vibration and noise",
                "Reduce flow rate cooling pump",
                "Temperature abnormal caused by friction",
              ],
            },
            "Regular inspection Regular Cleaning: To address a worn shaft in a cooling pump, promptly replace it with a new one and inspect surrounding components for wear or damage. Implement preventive maintenance measures and monitor pump performance regularly."
          ],
        ]
      },
      {
        title: "Maintenance Task Selection",
        backgroundColor: "#f5eafa",
        borderColor: "#912BBC",
        headRow: 2,
        head: [
          "No",
          "Part",
          "Failure Mode",
          ["Risk Characterization", ["CoF", "Rec PoF", "Current Risk"]],
          ["Task Selection", ["Proposed Action (s)", "Proj PoF", "Proj Risk"]],
        ],
        body: [
          [
            "1a",
            "rotor",
            "Overheats",
            "1",
            "2",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                " Regular inspection and maintenance of pump casing.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "1b",
            " Pump Casing",
            "Fractured",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                " Implement containment measures and regular inspection..",
                " Bi-weekly visual inspection of pump casings and immediate action on detected fractures.",	
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "1c",
            " Pump Casing",
            "Deformed",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                " Regular deformation checks and preventive maintenance.",
                " Monthly visual inspection; semi-annual structural integrity assessment.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "2a",
            "Impeller",
            "Corroded",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Corrosion prevention measures and predictive maintenance..",
                "Monthly application of corrosion inhibitors; annual cost-benefit analysis of maintenance.",	
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "2b",
            "Impeller",
            "Fractured",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                " Enhanced monitoring and immediate repair upon fracture detection.",
                " Bi-weekly inspection; immediate corrective action on detected issues.",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "2c",
            "Impeller",
            "Deformed",
            "1",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                " Regular impeller inspection and replacement of deformed parts.",
                " Monthly visual inspection; annual thermal imaging to detect hot spots.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "3a",
            "Bearing",
            "Cracked",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "dot",
              text: [
                "Regular bearing inspection and replacement, Quarterly bearing inspection, replace bearings as necessary.",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "3b",
            "Bearing",
            "Contaiminated",
            "1",
            "2",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                "Contamination control and lubrication maintenance, Monthly inspection and lubrication, immediate replacement of contaminated bearings.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "3c",
            "Bearing",
            "Fractured",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Implement sealing solutions and regular inspection, weekly visual inspection, immediate corrective action on detected leakage.",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "4a",
            "Shaft Seal Cover",
            "Corroded",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                " Regular inspection and replacement of corroded seals.",
                " Monthly visual inspection; replace seals as necessary.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "4b",
            "Shaft Seal Cover",
            "Fractured",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Implement routine lubrication and inspection schedule for gear components.",
                "Apply proper sealing and contamination prevention measures.",
                "Use Corroded-resistant coatings and materials for gears.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "4c",
            "Shaft Seal Cover",
            "Worn",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                " Regular seal maintenance and replacement of worn components.",
                " Monthly visual inspection; replace seals as necessary.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "5a",
            "Shaft",
            "Corroded",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Regular shaft inspection and anti-corrosion treatment.",
                " Monthly visual inspection; annual ultrasonic testing for internal corrosion.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "5b",
            "Shaft",
            "Fractured",
            "2",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "  Immediate replacement of fractured shafts and enhanced monitoring.",
                "  Bi-weekly visual inspection; immediate action on detected fractures.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "5c",
            "Shaft",
            "Worn",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                " Regular shaft maintenance and lubrication.",
                " Monthly visual inspection and lubrication; replace worn shafts as necessary.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
        ]
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
              text: ["immediately clean and re-lubricate the rotor, apply a moisture barrier, and replace any corroded or damaged bearings."]
            },
            "CM/PM",
            ["1.1", "1.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "500 hours and/or Performed on: Damage or performance degradation detection test When corrosion or bearing damage occurs",
            "-",
            "It ensures the rotor operates efficiently and prevents further damage by replacing corroded or damaged bearings promptly.",
          ],
          [
            { 
              type: "dot", 
              text: ["promptly clean and re-lubricate the bearings, apply a corrosion-resistant coating, and replace the damaged bearings."]
            },
            "CM/PM",
            ["2.1", "2.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "250 hours and/or Performed on: Bearing inspection or performance issues When bearing corrosion or damage is detected",
            "-",
            "Applying a corrosion-resistant coating and replacing damaged bearings are critical steps for long-term durability and performance.",
          ],
          [
            { 
              type: "dot", 
              text: ["clean and lubricate rotor components, repair moisture barriers, apply corrosion-resistant coatings, and replace failed lubricants and bearings"]
            },
            "CM/PM",
            ["3.1", "3.2"],
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "1000 hours and/or Performed on: Implementing moisture barriers and corrosion-resistant coatings:",
            "-",
            "It ensures the rotor operate smoothly and have a longer service life.",
          ],
          [
            { 
              type: "dot", 
              text: ["clean and disinfect the coils using UV-C methods, apply a protective coating, and replace any damaged coil sections with corrosion-resistant materials."]
            },
            "CM/PM",
            ["4.1", "4.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "1000 hours and/or Performed on: Coil condition assessment When coil contamination or damage occurs",
            "-",
            "The use of UV-C disinfection and corrosion-resistant materials helps ensure both hygiene and durability.",
          ],
          [
            { 
              type: "dot", 
              text: ["apply protective coatings to the affected coils, replace damaged coil sections with corrosion-resistant materials, and disinfect the area using UV-C methods."]
            },
            "OTC",
            ["5.1", "5.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "500 hours and/or Performed on: Coil damage or contamination inspection When damage or corrosion is detected",
            "-",
            "Applying protective coatings and replacing damaged sections with corrosion-resistant materials help prevent future issues, while UV-C disinfection ensures the area remains hygienic.",
          ],
          [
            { 
              type: "dot", 
              text: ["immediately repair the leak, clean and disinfect the coil surfaces and surrounding areas using UV-C methods, and ensure proper sealing of the repaired area."]
            },
            "CM/PM",
            ["6.1", "6.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "200 hours and/or Performed on: Filter damage or performance issues When a filter is found to be damaged or contaminated",
            "-",
            "Immediate attention to the leak and thorough disinfection with UV-C methods are crucial for preventing further issues and maintaining system integrity.",
          ],
          [
            { 
              type: "dot", 
              text: ["replace the filter with a corrosion-resistant one, clean the filter housing, and disinfect the area using UV-C methods to prevent further contamination."]
            },
            "CM/PM",
            ["7.1", "7.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "200 hours and/or Performed on: Filter inspection or clogging When filter damage or contamination occurs",
            "-",
            "Using a corrosion-resistant filter and disinfecting with UV-C methods ensures that the system remains efficient and free from contamination.",
          ],
          [
            { 
              type: "dot", 
              text: ["immediately replace it with a corrosion-resistant alternative, clean the housing, and use UV-C disinfection to ensure cleanliness."]
            },
            "CM/PM",
            ["8.1", "8.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "200 hours and/or Performed on: Filter damage or performance issues When a filter is found to be damaged or contaminated",
            "-",
            "Using corrosion-resistant materials and UV-C disinfection ensures that the replacement part functions optimally and prevents future contamination.",
          ],
          [
            { 
              type: "dot", 
              text: ["replace them with corrosion-resistant ones, clean the housing, and disinfect using UV-C methods to maintain hygiene."]
            },
            "OTC",
            ["9.1", "9.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "200 hours and/or Performed on: Filter inspection or contamination check When filter corrosion or damage is detected",
            "-",
            "Regular cleaning and UV-C disinfection help maintain hygiene and system efficiency.",
          ],
          [
            { 
              type: "dot", 
              text: ["lubricate and inspect the gears, apply proper seals, and replace damaged gears with corrosion-resistant alternatives."]
            },
            "CM/PM",
            ["10.1", "10.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "1000 hours and/or Performed on: Gear inspection or performance review When gear damage or wear is detected",
            "-",
            "It ensures the gears operate smoothly and have a longer service life.",
          ],
          [
            { 
              type: "dot", 
              text: ["re-lubricate the gear components, ensure proper sealing to prevent contamination, and replace damaged gears with corrosion-resistant materials."]
            },
            "CM/PM",
            ["11.1", "11.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "500 hours and/or Performed on: Gear component inspection or lubrication check When gears are found to be damaged or contaminated",
            "-",
            "Proper sealing and corrosion-resistant materials are crucial for maintaining gear performance and longevity.",
          ],
          [
            { 
              type: "dot", 
              text: ["flush or clean the valve to remove debris, re-lubricate the gear components, apply proper sealing, and replace any damaged parts with corrosion-resistant materials."]
            },
            "CM/PM",
            ["12.1", "12.2"],
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "1000 hours and/or Performed on: Valve inspection or maintenance schedule When valve debris or gear damage is detected",
            "-",
            "It ensures both the valve and gear components are well-maintained and protected against future issues.",
          ],
        ],
      },
    ]
  },
  {
    slug: "circulating-pump-6",
    type: "COOLING_SYSTEM",
    specs: {
      functionalGroup: "Propulsion Function Group",
      system: "Diesel Engine",
      subsystem: "Cooling System",
      equipmentID: "CO-CIP-06",
      equipmentName: "Ciculating Pump",
      drawing: "Cooling System",
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
            "Circulate coolant throughout various components of the ship's cooling system, ensuring optimal operating temperatures and preventing overheating of critical machinery and systems, within specification Capacity 100 M3/H, Head 20m.",
            "Primary",
            ["1,1", "1,2"],
            [
              "No pumping water to initiate coolant circulation (Total Failure)",
              "Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
            ],
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
          "Part",
          "Failure Mode",
          "Causes",
          "Failure Charasteristic",
          "Local Effect",
          "Functional Failure",
        ],
        body: [
          [
            "1a",
            " Pump Casing",
            "Corroded",
            [
              "1.1 Mechanical Stress: Operating conditions such as vibration, pressure changes, and mechanical shocks can subject the casing to mechanical stress. Over time, this stress can cause deformation, especially if the casing material is not sufficiently robust.",
              "1.2 Age and Wear: Like any other equipment on a ship, Cooling pumps and their casings are subject to wear and tear over time. With age, the protective coatings on the casing may degrade, making it more susceptible to corrosion"
            ],
            ["Random","Wear-out"],
            {
              type: "number",
              text: [
                "Reduced Pump Efficiency",
                "Pump Operation with Vibration and Noise",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "1b",
            " Pump Casing",
            "Fractured",
            [
              "2.1 Mechanical Stress: The casing may experience mechanical stress due to factors such as vibration, shock loads, or impacts during normal operation or in rough sea conditions. Over time, this stress can lead to fatigue and eventually fracture of the casing.",
              "2.2  Overloading: If the Cooling pump is subjected to loads beyond its design capacity, such as excessive pressure or flow rate, it can put undue stress on the casing, leading to fracture."
            ],
            ["Random","Random"],
            {
              type: "number",
              text: [
                "Reduced Efficiency",
                "Material Weakening",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "1c",
            " Pump Casing",
            "Deformed",
            [
              "3.1 Mechanical Stress: Operating conditions such as vibration, pressure changes, and mechanical shocks can subject the casing to mechanical stress. Over time, this stress can cause deformation, especially if the casing material is not sufficiently robust.",
              "3.2 Corrosion: Continuous exposure to seawater and other corrosive substances can lead to the corrosion of metal casings over time. Corrosion weakens the structural integrity of the casing, making it susceptible to deformation."
            ],
            ["Random","Wear-out"],
            {
              type: "number",
              text: [
                "Reduced Pump Efficiency",
                "Immediate Loss of Functionality",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "2a",
            "Impeller",
            "Corroded",
            [
              "4.1 High Temperatures: Elevated temperatures in the Cooling area, either due to the pump's operation or nearby machinery, can accelerate corrosion processes, especially if combined with other factors like saltwater exposure or chemical contamination.",
              "4.2  Saltwater Exposure: Ships operate in a highly corrosive environment due to constant exposure to saltwater. If the Cooling pump is not adequately protected or made from corrosion-resistant materials, saltwater exposure can lead to corrosion of the impeller over time."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Reduced Efficiency",
                "Material Weakening",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "2b",
            "Impeller",
            "Fractured",
            [
              "5.1 Material Fatigue: Continuous operation of the Cooling pump impeller can subject it to repeated cycles of stress, leading to material fatigue over time. This fatigue can weaken the material structure of the impeller, eventually resulting in cracks or fractures.",
              "5.2  Impact or Mechanical Damage: External factors such as collisions, debris ingestion, or abrasive wear can cause physical damage to the impeller, resulting in cracks or fractures. Impact from foreign objects or sudden changes in operating conditions can lead to immediate failure or accelerate existing damage."
            ],
            ["Wear-out","Random"],
            {
              type: "number",
              text: [
                "Reduced Pump Efficiency",
                "Immediate Loss of Functionality",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "2c",
            "Impeller",
            "Deformed",
            [
              "6.1  Mechanical Stress: Continuous operation of the Cooling pump can subject the impeller to mechanical stress, especially if it encounters high fluid flow rates or pressure. Over time, this stress can cause the impeller to deform, particularly in areas where the material is weaker or subjected to uneven loading.",
              "6.2  Overloading: Excessive loads on the Cooling pump system, such as sudden surges in fluid volume or pressure, can exceed the impeller's design limits and cause deformation. This can occur due to factors like blockages in the pump, changes in fluid viscosity, or improper pump operation."
            ],
            ["Wear-out","Random"],
            {
              type: "number",
              text: [
                "Vibration and Noise",
                "Reduced Pump Efficiency",
              ]
            },
            [
              "1.1 No Pumping water to initiate coolant circulation (Total Failure)",
              "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
            ]  
          ],
          [
            "3a",
            "Bearing",
            "Cracked",
            [
              "7.1 Impact or Mechanical Damage: External factors like impacts from debris or improper handling during maintenance procedures can cause mechanical damage to the bearings, resulting in cracks.",
              "7.2  Fatigue: Over time, repeated stress cycles experienced by the bearings during pump operation can weaken the material, leading to microscopic cracks that propagate and eventually result in visible cracks."
            ],
            ["Random","Wear-out"],
            {
              type: "number",
              text: [
                "Increased Operating Temperature",
                "Structural Damage",
              ]
            },
            [
              "1.1 No Pumping water to initiate coolant circulation (Total Failure)",
              "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
            ]
          ],
          [
            "3b",
            "Bearing",
            "Contaiminated",
            [
              "8.1  Ingress of Foreign Particles: Small particles such as dirt, sand, debris, or rust can enter the bearing housing, especially if the pump is operating in a harsh environment or if seals are compromised. These particles can contaminate the lubricant and cause abrasive wear on the bearing surfaces.",
              "8.2   Oil or Fuel Leakage: Leakage of oil or fuel from nearby machinery or systems can contaminate the bearing. Oil or fuel contamination can degrade the lubricant's effectiveness, leading to increased friction and wear on the bearing surfaces."
            ],
            ["Random","Random"],
            {
              type: "number",
              text: [
                " Increased Friction and Wear",
                "Reduced Efficiency",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "3c",
            "Bearing",
            "Fractured",
            [
              "9.1   .Overloading: Excessive loads on the bearing beyond its designed capacity can lead to fractures. This can happen due to sudden surges in pump operation, such as during startup or when pumping against high resistance, causing stress concentrations and eventual fracture.",
              "9.2 Fatigue: Prolonged cyclic loading and unloading of the bearing during normal pump operation can lead to fatigue failure over time. This is particularly common in bearings subjected to repeated stress cycles, causing microscopic cracks to form and propagate until complete fracture occurs."
            ],
            ["Random","Wear-out"],
            {
              type: "number",
              text: [
                "Immediate Loss of Functionality",
                "Vibration and Noise",
              ]
            },
            [
              "1.1 No Pumping water to initiate coolant circulation (Total Failure)",
              "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
            ]
          ],
          [
            "4a",
            "Shaft Seal Cover",
            "Corroded",
            [
              "10.1 Exposure to Corrosive Substances: The seal may come into contact with corrosive substances present in the Cooling water, such as saltwater, chemicals, or pollutants. Prolonged exposure to these corrosive agents can degrade the seal material and lead to corrosion.",
              "10.2   High Temperatures and Pressure: Elevated temperatures and pressures within the Cooling pump system can accelerate corrosion processes, particularly if the seal material is not resistant to these conditions."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Corrosion weakens the structural integrity",
                "Reduced Seal Performance",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "4b",
            "GearShaft Seal Cover",
            "Fractured",
            [
              "11.1 Material Fatigue: Over time, repeated stress cycles can weaken the seal material, leading to microscopic cracks that propagate and eventually result in a fracture. This fatigue can occur due to the cyclical pressure changes experienced during pump operation.",
              "11.2  Impact or Mechanical Damage: External factors such as impacts from debris or improper handling during maintenance procedures can cause mechanical damage to the seal, resulting in fractures."
            ],
            ["Wear-out","Random"],
            {
              type: "number",
              text: [
                "fractured seal compromises",
                "Reduced Seal Performance",
              ]
            },
            [

              "1.1 No Pumping water to initiate coolant circulation (Total Failure)",
              "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
            ]
          ],
          [
            "4c",
            "Shaft Seal Cover",
            "Worn",
            [
              "12.1 Abrasion: Continuous contact between the seal and rotating shaft can lead to abrasive wear over time. Particles present in the Cooling water, such as sand, sediment, or debris, can cause abrasive damage to the seal surface, leading to wear",
              "12.2  Corrosion: Exposure to corrosive substances in the Cooling water, such as saltwater or chemicals, can corrode the seal material, leading to localized material degradation and wear. Corrosion weakens the seal's structural integrity and can accelerate wear, particularly in areas with high stress concentrations."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Reduced Pump Performance",
                "Vibration and Noise",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "5a",
            "Shaft",
            "Corroded",
            [
              "13.1 Improper Material Selection: Choosing materials for the shaft that are not resistant to corrosion or incompatible with the Cooling environment can promote corrosion and accelerate its progression.",
              "13.2  High Humidity and Temperature: Elevated humidity levels and fluctuating temperatures in the Cooling area can create conducive conditions for corrosion to occur on the shaft surface.",
              "14.1 Fatigue: Prolonged cyclic loading and unloading of the shaft during pump operation can lead to fatigue failure, causing microscopic cracks to form and propagate over time until a fracture occurs."
            ],
            ["Wear-in","Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Reduced Strength",
                "Impeller Misalignment",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "5b",
            "Shaft",
            "Fractured",
            [
              "14.1 Fatigue: Prolonged cyclic loading and unloading of the shaft during pump operation can lead to fatigue failure, causing microscopic cracks to form and propagate over time until a fracture occurs.",
              "14.2  Corrosion: Corrosive substances present in the Cooling water can degrade the shaft material, reducing its structural integrity and making it more susceptible to fracture failure."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Loss of Functionality",
                "Immediate Loss of Functionality",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
          ],
          [
            "5c",
            "Shaft",
            "Worn",
            [
              "15.1   Abrasion: Continuous contact with abrasive particles present in the Cooling water, such as sand, sediment, or debris, can gradually wear down the surface of the shaft. This abrasion occurs over time and can lead to the thinning of the shaft diameter or the formation of grooves and pits on its surface.",
              "15.2 Corrosion: Exposure to corrosive substances present in the Cooling water, such as saltwater or chemicals, can corrode the shaft material, leading to localized wear and pitting. Corrosion-induced wear weakens the shaft's structural integrity and accelerates its deterioration."
            ],
            ["Wear-out","Wear-out"],
            {
              type: "number",
              text: [
                "Reduced Efficiency",
                "Seal Leakage",
              ]
            },
            "1.2 Pumping water to suboptimal cooling efficiency and potential overheating of equipment within capacity less than 100 M3/H (Partial Failure)"
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
          "Part",
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
            "1a",
            "Pump Casing",
            "Corroded",
            "Pump Failure: Progressive corrosion of the pump casing weakens the structural integrity of the casing, eventually leading to catastrophic failure, pump malfunction, or complete breakdown, resulting in system downtime and loss of cooling capacity.",
            "1",
            "2",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Leakage from cooling Pump",
                "Decrease flow rate from cooling Pump."
              ],
            },
            "prevent or mitigate corrosion of cooling pump casings, proper maintenance, regular inspections, and use of corrosion-resistant materials are essential."
          ],
          [
            "1b",
            " Pump Casing",
            "Fractured",
            "Environmental Contamination: Fluid leakage from fractured pump casings can contaminate the surrounding environment, posing environmental hazards and safety risks to onboard personnel and marine ecosystems.Bearing seizure and motor shaft immobilization: Severe wear or damage to the bearings can result in bearing seizure, causing the motor shaft to become immobilized and leading to sudden motor failure.",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Decrease flow rate from cooling Pump",
                "No flow from cooling Pump."
              ],
            },
            "To prevent casing fracture of cooling pumps on ships, it's important to adhere to proper installation procedures, conduct regular inspections for signs of stress or damage, and ensure that the pump is operated within its design limits."
          ],
          [
            "1c",
            " Pump Casing",
            "Deformed",
            "pump Malfunction: Deformed pump casings disrupt the normal operation of the circulating pump, resulting in reduced coolant circulation, loss of system efficiency, and potential pump failure, leading to cooling system downtime and operational disruptions.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Bend, crack, casing material",
                "Decrease flow rate from cooling pump."
              ],
            },
            "Recommended to conduct regular inspections, enhance material selection for casing construction, optimize operating conditions, improve installation practices, enhance maintenance procedures"
          ],
          [
            "2a",
            "Impeller",
            "Corroded",
            "Increased Maintenance Costs: Corrosion-related pump failures necessitate costly repairs or replacements, as well as associated labor and downtime expenses, increasing maintenance costs and disrupting vessel operations.",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                " Decrease cooling pump performance",
                " Visible corrosion",
                "Increase noise and vibration."
              ],
            },
            "Assess the damage and consider replacing it with a corrosion-resistant impeller. Implement regular maintenance and consider applying corrosion-resistant coatings. Monitor for future corrosion for sustained pump performance."
          ],
          [
            "2b",
            "Impeller",
            "Fractured",
            "Pump Failure: Fractured pump casings jeopardize the structural integrity of the circulating pump, resulting in pump malfunction, reduced coolant circulation, and eventual pump failure, leading to system downtime and loss of cooling capacity.",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Decrease cooling pump performance",
                "No flow from cooling Pump."
              ],
            },
            "If the impeller of a cooling pump is fractured, it must be swiftly replaced to maintain pump functionality. Prioritize the installation of a new, intact impeller and conduct regular inspections to prevent future fractures."
          ],
          [
            "2c",
            "Impeller",
            "Deformed",
            "Increased Risk of heating: Inadequate cooling water removal due to impeller deformation increases the risk of heating in critical areas of the ship. This poses a safety hazard to the crew, passengers, and cargo, potentially compromising the vessel's seaworthiness and stability.",
            "1",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Decrease cooling pump performance",
                "Noise and vibration."
              ],
            },
            "Replace the deformed impeller promptly with a new one to maintain optimal performance. Regular inspections and monitoring can help detect deformities early on, preventing further issues."
          ],
          [
            "3a",
            "Bearing",
            "Cracked",
            "Compromise structural integrity and load-bearing capacity, leading to progressive deterioration and eventual catastrophic failure, resulting in pump malfunction and system downtime.",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: [
                "Visbile abnormal crack",
                "Vibration abnormal."
              ],
            },
            "Conduct routine visual and ultrasonic inspections to detect early signs of structural damage or load-bearing capacity compromise."
          ],
          [
            "3b",
            "Bearing",
            "Contaiminated",
            "Prone to premature failure due to accelerated wear, surface damage, and reduced load-bearing capacity, ultimately leading to pump malfunction, system downtime, and potentially catastrophic equipment failure.",
            "1",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Oil /substance analysis",
                "Vibration and noise.",
                "Decrease efficiency."
              ],
            },
            "Apply surface treatments or coatings to reduce wear and protect against surface damage."
          ],
          [
            "3c",
            "Bearing",
            "Fractured",
            "Fluid leakage from fractured bearing can contaminate the surrounding environment, posing environmental hazards and safety risks to onboard personnel and marine ecosystems.",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Abnormal noise and vibration",
                "Lubricant Leakage.",
                "Decrease flow rate and pressure."
              ],
            },
            "Regularly inspect and maintain seals to prevent fluid leakage from bearings."
          ],
          [
            "4a",
            "Shaft Seal Cover",
            "Corroded",
            "Fluid Loss: Corroded shaft seal covers can lead to coolant or lubricant leakage from the pump assembly, resulting in reduced fluid levels, loss of system pressure, and diminished cooling or lubrication performance.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Decrease pressure and flowrate",
                "Water leakage arround the pump"
              ],
            },
            "conduct a thorough inspection to assess the extent of corrosion and potential leaks. Replace the corroded seal promptly with a new one, ensuring compatibility with the pump system. Implement corrosion prevention measures, such as applying protective coatings or using corrosion-resistant materials for future seals."
          ],
          [
            "4b",
            "Shaft Seal Cover",
            "Fractured",
            "environmental Hazard: Fluid leakage from fractured shaft seal covers poses environmental hazards, particularly in marine environments, where leaked fluids may pollute waterways or cause harm to marine life.",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Decrease pressure and flowrate",
                " leakage of water."
              ],
            },
            "shut down the pump to prevent further damage and water ingress. Replace the fractured seal with a new one, ensuring compatibility and proper installation. Conduct a thorough inspection of the surrounding components for any damage or wear."
          ],
          [
            "4c",
            "Shaft Seal Cover",
            "Worn",
            "Fluid Leakage: Worn shaft seal covers can contribute to increased fluid leakage from the pump assembly, resulting in loss of coolant or lubricant, reduced system performance, and potential damage to surrounding components due to inadequate lubrication or cooling.",
            "2",
            "1",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: [
                "Leakage of water",
                "Reduced flow rate, decreased pressure, increase power consumption."
              ],
            },
            "To address worn pump seals, promptly replace them and inspect surrounding components for damage. Implement preventive maintenance, monitor seal performance, and apply proper lubrication."
          ],
          [
            "5a",
            "Shaft",
            "Corroded",
            "Shaft Failure: Severe corrosion can weaken the shaft to the point of mechanical failure, resulting in pump malfunction, system downtime, and potential damage to other pump components.",
            "3",
            "1",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: [
                "Friction and vibration",
                "Decrease pump flowrate."
              ],
            },
            "replace it with a corrosion-resistant alternative and inspect surrounding components for damage. Apply protective coatings and establish a preventive maintenance schedule to minimize future corrosion risks."
          ],
          [
            "5b",
            "Shaft",
            "Fractured",
            "Pump Failure: Fractured shafts result in the loss of mechanical integrity and functionality of the circulating pump, leading to system downtime, impaired cooling performance, and disruption of ship operations.",
            "2",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "cooling water output may have fractured metal shaft",
                "Noise and vibration",
                "Decrease pump flowrate",
                "No flow form cooling pump",
              ],
            },
            "If a fractured cooling pump shaft is detected, consider repairing or replacing it depending on the severity of the damage. Inspect other components for any additional damage or corrosion."
          ],
          [
            "4c",
            "Shaft",
            "Worn",
            "Reduced Efficiency: Worn shafts diminish the efficiency of the circulating pump, as increased friction and surface roughness lead to higher energy consumption, reduced flow rates, and decreased coolant circulation.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Abnormal vibration and noise",
                "Reduce flow rate cooling pump",
                "Temperature abnormal caused by friction",
              ],
            },
            "Regular inspection Regular Cleaning: To address a worn shaft in a cooling pump, promptly replace it with a new one and inspect surrounding components for wear or damage. Implement preventive maintenance measures and monitor pump performance regularly."
          ],
        ]
      },
      {
        title: "Maintenance Task Selection",
        backgroundColor: "#f5eafa",
        borderColor: "#912BBC",
        headRow: 2,
        head: [
          "No",
          "Part",
          "Failure Mode",
          ["Risk Characterization", ["CoF", "Rec PoF", "Current Risk"]],
          ["Task Selection", ["Proposed Action (s)", "Proj PoF", "Proj Risk"]],
        ],
        body: [
          [
            "1a",
            "rotor",
            "Overheats",
            "1",
            "2",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                " Regular inspection and maintenance of pump casing.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "1b",
            " Pump Casing",
            "Fractured",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                " Implement containment measures and regular inspection..",
                " Bi-weekly visual inspection of pump casings and immediate action on detected fractures.",	
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "1c",
            " Pump Casing",
            "Deformed",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                " Regular deformation checks and preventive maintenance.",
                " Monthly visual inspection; semi-annual structural integrity assessment.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "2a",
            "Impeller",
            "Corroded",
            "3",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Corrosion prevention measures and predictive maintenance..",
                "Monthly application of corrosion inhibitors; annual cost-benefit analysis of maintenance.",	
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "2b",
            "Impeller",
            "Fractured",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                " Enhanced monitoring and immediate repair upon fracture detection.",
                " Bi-weekly inspection; immediate corrective action on detected issues.",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "2c",
            "Impeller",
            "Deformed",
            "1",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                " Regular impeller inspection and replacement of deformed parts.",
                " Monthly visual inspection; annual thermal imaging to detect hot spots.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "3a",
            "Bearing",
            "Cracked",
            "3",
            "3",
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "dot",
              text: [
                "Regular bearing inspection and replacement, Quarterly bearing inspection, replace bearings as necessary.",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "3b",
            "Bearing",
            "Contaiminated",
            "1",
            "2",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                "Contamination control and lubrication maintenance, Monthly inspection and lubrication, immediate replacement of contaminated bearings.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "3c",
            "Bearing",
            "Fractured",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Implement sealing solutions and regular inspection, weekly visual inspection, immediate corrective action on detected leakage.",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "4a",
            "Shaft Seal Cover",
            "Corroded",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                " Regular inspection and replacement of corroded seals.",
                " Monthly visual inspection; replace seals as necessary.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "4b",
            "Shaft Seal Cover",
            "Fractured",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Implement routine lubrication and inspection schedule for gear components.",
                "Apply proper sealing and contamination prevention measures.",
                "Use Corroded-resistant coatings and materials for gears.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "4c",
            "Shaft Seal Cover",
            "Worn",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                " Regular seal maintenance and replacement of worn components.",
                " Monthly visual inspection; replace seals as necessary.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "5a",
            "Shaft",
            "Corroded",
            "3",
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Regular shaft inspection and anti-corrosion treatment.",
                " Monthly visual inspection; annual ultrasonic testing for internal corrosion.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "5b",
            "Shaft",
            "Fractured",
            "2",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "  Immediate replacement of fractured shafts and enhanced monitoring.",
                "  Bi-weekly visual inspection; immediate action on detected fractures.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "5c",
            "Shaft",
            "Worn",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                " Regular shaft maintenance and lubrication.",
                " Monthly visual inspection and lubrication; replace worn shafts as necessary.",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
        ]
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
              text: ["immediately clean and re-lubricate the rotor, apply a moisture barrier, and replace any corroded or damaged bearings."]
            },
            "CM/PM",
            ["1.1", "1.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "500 hours and/or Performed on: Damage or performance degradation detection test When corrosion or bearing damage occurs",
            "-",
            "It ensures the rotor operates efficiently and prevents further damage by replacing corroded or damaged bearings promptly.",
          ],
          [
            { 
              type: "dot", 
              text: ["promptly clean and re-lubricate the bearings, apply a corrosion-resistant coating, and replace the damaged bearings."]
            },
            "CM/PM",
            ["2.1", "2.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "250 hours and/or Performed on: Bearing inspection or performance issues When bearing corrosion or damage is detected",
            "-",
            "Applying a corrosion-resistant coating and replacing damaged bearings are critical steps for long-term durability and performance.",
          ],
          [
            { 
              type: "dot", 
              text: ["clean and lubricate rotor components, repair moisture barriers, apply corrosion-resistant coatings, and replace failed lubricants and bearings"]
            },
            "CM/PM",
            ["3.1", "3.2"],
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "1000 hours and/or Performed on: Implementing moisture barriers and corrosion-resistant coatings:",
            "-",
            "It ensures the rotor operate smoothly and have a longer service life.",
          ],
          [
            { 
              type: "dot", 
              text: ["clean and disinfect the coils using UV-C methods, apply a protective coating, and replace any damaged coil sections with corrosion-resistant materials."]
            },
            "CM/PM",
            ["4.1", "4.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "1000 hours and/or Performed on: Coil condition assessment When coil contamination or damage occurs",
            "-",
            "The use of UV-C disinfection and corrosion-resistant materials helps ensure both hygiene and durability.",
          ],
          [
            { 
              type: "dot", 
              text: ["apply protective coatings to the affected coils, replace damaged coil sections with corrosion-resistant materials, and disinfect the area using UV-C methods."]
            },
            "OTC",
            ["5.1", "5.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "500 hours and/or Performed on: Coil damage or contamination inspection When damage or corrosion is detected",
            "-",
            "Applying protective coatings and replacing damaged sections with corrosion-resistant materials help prevent future issues, while UV-C disinfection ensures the area remains hygienic.",
          ],
          [
            { 
              type: "dot", 
              text: ["immediately repair the leak, clean and disinfect the coil surfaces and surrounding areas using UV-C methods, and ensure proper sealing of the repaired area."]
            },
            "CM/PM",
            ["6.1", "6.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "200 hours and/or Performed on: Filter damage or performance issues When a filter is found to be damaged or contaminated",
            "-",
            "Immediate attention to the leak and thorough disinfection with UV-C methods are crucial for preventing further issues and maintaining system integrity.",
          ],
          [
            { 
              type: "dot", 
              text: ["replace the filter with a corrosion-resistant one, clean the filter housing, and disinfect the area using UV-C methods to prevent further contamination."]
            },
            "CM/PM",
            ["7.1", "7.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "200 hours and/or Performed on: Filter inspection or clogging When filter damage or contamination occurs",
            "-",
            "Using a corrosion-resistant filter and disinfecting with UV-C methods ensures that the system remains efficient and free from contamination.",
          ],
          [
            { 
              type: "dot", 
              text: ["immediately replace it with a corrosion-resistant alternative, clean the housing, and use UV-C disinfection to ensure cleanliness."]
            },
            "CM/PM",
            ["8.1", "8.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "200 hours and/or Performed on: Filter damage or performance issues When a filter is found to be damaged or contaminated",
            "-",
            "Using corrosion-resistant materials and UV-C disinfection ensures that the replacement part functions optimally and prevents future contamination.",
          ],
          [
            { 
              type: "dot", 
              text: ["replace them with corrosion-resistant ones, clean the housing, and disinfect using UV-C methods to maintain hygiene."]
            },
            "OTC",
            ["9.1", "9.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "200 hours and/or Performed on: Filter inspection or contamination check When filter corrosion or damage is detected",
            "-",
            "Regular cleaning and UV-C disinfection help maintain hygiene and system efficiency.",
          ],
          [
            { 
              type: "dot", 
              text: ["lubricate and inspect the gears, apply proper seals, and replace damaged gears with corrosion-resistant alternatives."]
            },
            "CM/PM",
            ["10.1", "10.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "1000 hours and/or Performed on: Gear inspection or performance review When gear damage or wear is detected",
            "-",
            "It ensures the gears operate smoothly and have a longer service life.",
          ],
          [
            { 
              type: "dot", 
              text: ["re-lubricate the gear components, ensure proper sealing to prevent contamination, and replace damaged gears with corrosion-resistant materials."]
            },
            "CM/PM",
            ["11.1", "11.2"],
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "500 hours and/or Performed on: Gear component inspection or lubrication check When gears are found to be damaged or contaminated",
            "-",
            "Proper sealing and corrosion-resistant materials are crucial for maintaining gear performance and longevity.",
          ],
          [
            { 
              type: "dot", 
              text: ["flush or clean the valve to remove debris, re-lubricate the gear components, apply proper sealing, and replace any damaged parts with corrosion-resistant materials."]
            },
            "CM/PM",
            ["12.1", "12.2"],
            {
              type: "class",
              text: ["Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "1000 hours and/or Performed on: Valve inspection or maintenance schedule When valve debris or gear damage is detected",
            "-",
            "It ensures both the valve and gear components are well-maintained and protected against future issues.",
          ],
        ],
      },
    ]
  },
  //t
  {
    slug: "fo-transfer-hand-pump",
    type: "FUEL_OIL_SYSTEM",
    specs: {
      functionalGroup: "Propulsion Function Group",
      system: "Diesel Engine",
      subsystem: "Fuel Oil System",
      equipmentID: "FO-HTP-01",
      equipmentName: "FO Transfer Hand Pump",
      drawing: "Sistem Pipa Bahan Bakar",
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
            "Berfungsi untuk memompa dan transfer bahan bakar secara manual dari storage tank ke tangki harian secara dengan debit tidak kurang dari Kapasitas 105 liter/menit.",
            "Primary",
            "4.1",
            "Tidak ada aliran bahan bakar minyak yang dipindahkan",
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
            "1a",
            "Pompa gagal bekerja",
            "4.1 Terdapat kebocoran pada bagian hisap (suction)",
            "Random",
            {
              type: "number",
              text: [
                "Hilangnya kemampuan memompa bahan bakar secara manual",
              ]
            },
            "4,1 Tidak ada aliran bahan bakar minyak yang dipindahkan"
          ],
          [
            "1b",
            "Pompa gagal bekerja",
            "4.2 Kehausan komponen internal dan kelelahan mekanis",
            "Wear-out",
            {
              type: "number",
              text: [
                "Hilangnya kemampuan memompa bahan bakar secara manual karena kehausan komponen internal",
              ]
            },
            "4,1 Tidak ada aliran bahan bakar minyak yang dipindahkan"
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
            "1a",
            "Pompa gagal bekerja",
            "Gagal mengirimkan bahan bakar secara manual saat kondisi emergency/kedua pompa utama tidak berfungsi",
            "1",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: ["Terdapat kebocoran pada bagian hisap"],
            },
            {
              type: "dot",
              text: [
                "Pemeriksan rutin",
              ],
            },
          ],
          [
            "1b",
            "Pompa gagal bekerja",
            "Gagal mengirimkan bahan bakar secara manual saat kondisi emergency/kedua pompa utama tidak berfungsi",
            "1",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: ["Adaya kebocoran", "Kebisingan dan getaran yang tidak normal"],
            },
            {
              type: "dot",
              text: [
                "Pemeriksan rutin",
                "Inspeksi dan perawatan rutin",
              ],
            },
          ],
        ]
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
            "1a",
            "Pompa gagal bekerja",
            "1",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                "Pemeriksaan visual kebocoran pada suction pompa",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "1b",
            "Pompa gagal bekerja",
            "1",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                "Pemeriksaan visual kebocoran, suara dan getaran pompa",
                "Pemeriksaan dan perawatan pompa tangan bahan bakar",
                "Pergantian komponen pompa yang rusak",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
        ]
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
              text: ["Pemeriksaan visual kebocoran, suara dan getaran pompa"]
            },
            "CM",
            "4.2",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "2 Minggu",
            "-",
            "Segera dilakukan perbaikan, jika terjadi kerusakan",
          ],
          [
            { 
              type: "dot", 
              text: ["Pemeriksaan visual kebocoran pada suction pompa		"]
            },
            "CM",
            "4.1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "2 Minggu",
            "-",
            "Segera dilakukan perbaikan, jika terjadi kerusakan",
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
              text: ["Pergantian komponen pompa yang rusak"]
            },
            "OTC",
            "4.2",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "Jika terjadi kerusakan",
            "-",
            "Segera dilakukan perbaikan, jika terjadi kerusakan",
          ],
        ]
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
              text: ["Pemeriksaan dan perawatan pompa tangan bahan bakar"]
            },
            "PM",
            "4.2",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "Special Survey Docking",
            "Rekomendasi vendor",
            "Hal ini di lakukan untuk melihat kondisi pompa dan perawatan pompa",
          ],
        ]
      },
    ]
  },
  {
    slug: "fo-service-tank-m/e",
    type: "FUEL_OIL_SYSTEM",
    specs: {
      functionalGroup: "Propulsion Function Group",
      system: "Diesel Engine",
      subsystem: "Fuel Oil System",
      equipmentID: "FO-SRT-01",
      equipmentName: "FO Service Tank M/E",
      drawing: "Sistem Pipa Bahan Bakar",
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
            "Berfungsi untuk menyimpan bahan bakar minyak yang diperlukan untuk sistem penggerak dan pembangkit listrik bantu dengan kapasitas 4800 liter.",
            "Primary",
            "5.1",
            "Tangki tidak dapat menyimpan bahan bakar minyak untuk tanki harian",
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
            "Kebocoran pada service tank mesin utama",
            "5.1 Dinding menipis karena korosi oleh waktu dari kondisi lingkungan",
            "Wear-out",
            {
              type: "number",
              text: [
                "Hilangnya Kemampuan menyimpan bahan bakar",
                "Kerusakan struktural  pada tanki",
              ]
            },
            "5,1 Tangki tidak dapat menyimpan bahan bakar minyak untuk tanki harian"
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
            "Kebocoran pada service tank mesin utama",
            "Kebocoran dapat menyebabkab keluarnya bahan bakar yang berpotensi terjadi kebakaran atau ledakan. Dapat mengurangi endurance kapal.",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: ["Visual inspeksi", "Pemantauan level bahan bakar"],
            },
            {
              type: "dot",
              text: [
                "Pembersihan dan inspeksi pada tanki",
              ],
            },
          ],
        ]
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
            "Kebocoran pada service tank mesin utama",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                "Pembersihan dan inspeksi pada tanki harian bahan bakar",
                "Pengecekan volume tanki harian mesin utama",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
        ]
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
              text: ["Pengecekan volume tanki harian mesin utama"]
            },
            "CM",
            "5.1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "Harian",
            "-",
            "Dilakukan oleh mekanik",
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
              text: ["Pembersihan dan inspeksi pada tanki harian bahan bakar"]
            },
            "CM",
            "5.1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "Special Survey Docking",
            "Class",
            "Tanki perlu di kosongkan dan dibersikan, sebelum dilakukan inspeksi tanki",
          ],
        ]
      },
    ]
  },
  {
    slug: "fo-strainer-m/e",
    type: "FUEL_OIL_SYSTEM",
    specs: {
      functionalGroup: "Propulsion Function Group",
      system: "Diesel Engine",
      subsystem: "Fuel Oil System",
      equipmentID: "FO-STR-01",
      equipmentName: "FO Strainer M/E",
      drawing: "Sistem Pipa Bahan Bakar",
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
            "Tanki perlu di kosongkan dan dibersikan, sebelum dilakukan inspeksi tanki",
            "Primary",
            ["6.1", "6.2"],
            [
              "Tidak dapat mengalirkan bahan bakar sesuai dengan desain sistem",
              "Tidak dapat menghilangkan kotoran dan kontaminan bahan bakar minyak",
            ],
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
            "Filter tersumbat/ penyumbatan aliran",
            "6.1 Penumpuksn partikel atau kontaminan yang secara terus menerus pada elemen filter",
            "Wear-out",
            {
              type: "number",
              text: [
                "Tekanan aliran bahan bakar menurub",
                "Mengurangi kemampuan memfilter kotoran atau kontaminan",
                "Potensi merusak elemen filter",
              ]
            },
            "6,1 Tidak dapat mengalirkan bahan bakar sesuai dengan desain sistem"
          ],
          [
            "2a",
            "Elemen filter runtuh atau rusak",
            "6.2 Erosi dan abrasi yang menyebabkan kerusakan elemen filter",
            "Wear-out",
            {
              type: "number",
              text: [
                "Kerusakan pada filter seperti retakan, pecah atau perubahan bentuk.", 
                "Meningkatnya risiko masuknya kontaminasi ke mesin utama",
              ]
            },
            "6,2 Tidak dapat menghilangkan kotoran dan kontaminan bahan bakar minyak"
          ],
          [
            "2b",
            "Elemen filter runtuh atau rusak",
            "6.3 Mechanical Fatigue",
            "Wear-out",
            {
              type: "number",
              text: [
                "Kerusakan pada element filter seperti retakan, pengikisan/ penipisan elemen filter.",
                "Berkurangnya efisiensi filter",
                "Meningkatnya risiko masuknya kontaminasi ke mesin utama",
              ]
            },
            "6,2 Tidak dapat menghilangkan kotoran dan kontaminan bahan bakar minyak"
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
            "Filter tersumbat/ penyumbatan aliran",
            [
              "Operasional main engine tertunda karena kekurangan bahan bakar.",
              "Menurunkan kinerja mesin utama"	
            ],
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Tekanan bahan bakar menurun", "Tidak ada aliran bahan bakar minyak"],
            },
            {
              type: "dot",
              text: [
                "Pemeriksaan dan pembersihan rutin",
              ],
            },
          ],
          [
            "2a",
            "Elemen filter runtuh atau rusak",
            [
              "Kotoran dan kontaminan yang tidak tersaing menyebabkan kerusakan pada mesin utama",
              "Mengurangi performa mesin utama",
            ],
            "1",
            "2",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: ["Tekanan bahan bakar menurun", "Ketidaknormalan aliran bahan bakar main engine"],
            },
            {
              type: "dot",
              text: [
                "Pemeriksaan rutin",
              ],
            },
          ],
          [
            "2b",
            "Elemen filter runtuh atau rusak",
            [
              "Kotoran dan kontaminan yang tidak tersaing menyebabkan kerusakan pada mesin utama",
              "Mengurangi performa mesin utama",
            ],
            "1",
            "2",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: ["Tekanan bahan bakar menurun", "Ketidaknormalan aliran bahan bakar main engine"],
            },
            {
              type: "dot",
              text: [
                "Pemeriksaan rutin",
              ],
            },
          ],
        ]
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
            "Filter tersumbat/ penyumbatan aliran",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Pemeriksaan kondisi filter dan pembersihan elemen filter",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "2a",
            "Elemen filter runtuh atau rusak",
            "1",
            "2",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                "Pemeriksaan kebocoran filter",
                "Dilakukan pergantian filter",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "2b",
            "Elemen filter runtuh atau rusak",
            "1",
            "2",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                "Dilakukan pergantian filter",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
        ]
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
              text: ["Pemeriksaan kondisi filter dan pembersihan elemen filter"]
            },
            "CM",
            "6.1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "2 Minggu",
            "-",
            "Dilakukan oleh mekanik",
          ],
          [
            { 
              type: "dot", 
              text: ["Pemeriksaan kebocoran filter"]
            },
            "CM",
            "6.2",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "Harian",
            "-",
            "Dilakukan oleh mekanik",
          ],
          [
            { 
              type: "dot", 
              text: ["Pemeriksaan pergantian filter"]
            },
            "OTC",
            "6.3",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "Jika terjadi kerusakkan",
            "-",
            "Segera dilakukan perbaikan, jika terjadi kerusakan",
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
              text: ["Pembersihan dan inspeksi pada tanki harian bahan bakar"]
            },
            "CM",
            "5.1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "Special Survey Docking",
            "Class",
            "Tanki perlu di kosongkan dan dibersikan, sebelum dilakukan inspeksi tanki",
          ],
        ]
      },
    ]
  },
  {
    slug: "fo-sedimation-tank",
    type: "FUEL_OIL_SYSTEM",
    specs: {
      functionalGroup: "Propulsion Function Group",
      system: "Diesel Engine",
      subsystem: "Fuel Oil System",
      equipmentID: "FO-FOST-01",
      equipmentName: "FO Sedimation Tank",
      drawing: "Sistem Pipa Bahan Bakar",
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
            "Berfungsi mengendapkan bahan bakar minyak setelah di saring dari sedimen/kontaminan yang lolos. Terdapat katup untuk mengeluarkan sedimen yang terkumpul di dasar tanki",
            "Primary",
            "7,1",
            "Katup pembuangan pada tanki tidak dapat berfungsi/ tidak dapat dibuka dengan baik",
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
            "Saluran keluar sedimen tersumbat",
            "7.1 Korosi dalam tangki dan karat pada katup keluar",
            "Wear-out",
            {
              type: "number",
              text: [
                "Penumpukan sedimentasi yang tidak dapat keluarkan mengganggu proses pengendapan di tangki",
              ]
            },
            "7,1 Katup pembuangan pada tanki tidak dapat berfungsi/ tidak dapat dibuka dengan baik"
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
            "Saluran keluar sedimen tersumbat",
            [
              "Terganggunya operasional mesin utama",
              "Sedimen dapat masuk ke dalam mesin dan menyebabkan kerusakan pada mesin utama"		
            ],
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: ["Katup saluran keluar susah dibuka/ macet"],
            },
            {
              type: "dot",
              text: [
                "Pemeriksaan rutin",
                "Pembersihan tanki",
              ],
            },
          ],
        ]
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
            "Saluran keluar sedimen tersumbat",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                "Pemeriksaan visual kondisi tanki sedimtasi dan katup pembuangan",
                "Pembersihan dan inspeksi pada tanki sedimentasi",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
        ]
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
              text: ["Pemeriksaan visual kondisi tanki sedimtasi dan katup pembuangan"]
            },
            "CM",
            "7.1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "1 Minggu",
            "-",
            "Dilakukan oleh mekanik",
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
              text: ["Pembersihan dan inspeksi pada tanki sedimentasi"]
            },
            "CM",
            "7.1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "Special Survey Docking",
            "Class",
            "Tanki perlu di kosongkan dan dibersikan, sebelum dilakukan inspeksi tanki",
          ],
        ]
      },
    ]
  },
  {
    slug: "fo-daerating-tank",
    type: "FUEL_OIL_SYSTEM",
    specs: {
      functionalGroup: "Propulsion Function Group",
      system: "Diesel Engine",
      subsystem: "Fuel Oil System",
      equipmentID: "FO-DAT-01",
      equipmentName: "FO Daerating Tank",
      drawing: "Sistem Pipa Bahan Bakar",
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
            "Berfungsi untuk menampung bahan bakar dari tanki sedimentasi dan menampung sisa bahan bakar dari proses injeksi bahan bakar ke mesin utama. Kapasitas tanki 100 liter.",
            "Primary",
            "8,1",
            "Tangki tidak dapat menyimpan bahan bakar minyak dan sisa injeksi bahan bakar ke mesin",
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
            "Kebocoran pada daerating tank",
            "7.1 Korosi dalam tangki dan karat pada katup keluar",
            "Wear-out",
            {
              type: "number",
              text: [
                "Menyebabkan sisa bahan bakar bocor keluar",
                "Udara luar dapat masuk kedalam tangki",
                "Menimbulkan kerusakan struktur tanki",
              ]
            },
            "8,1 Tangki tidak dapat menyimpan bahan bakar minyak dan sisa injeksi bahan bakar ke mesin"
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
            "Kebocoran pada daerating tank",
            [
              "Menimbulkan risiko keselamatan crew di kapal",
              "Waktu henti operasional mesin untuk memperbaiki tanki yang rusak",		
            ],
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: ["Terlihat retakan dan korosi pada tanki", "Terlihat kebocoran"],
            },
            {
              type: "dot",
              text: [
                "Pemeriksaan rutin",
              ],
            },
          ],
        ]
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
            "Kebocoran pada daerating tank",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                "Pemeriksaan visual kondisi tanki daerating",
                "Pembersihan dan inspeksi pada daerating tank",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
        ]
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
              text: ["Pemeriksaan visual kondisi tanki daerating"]
            },
            "CM",
            "8.1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "1 Minggu",
            "-",
            "Dilakukan oleh mekanik",
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
              text: [" Pembersihan dan inspeksi pada  daerating tank		"]
            },
            "CM",
            "8.1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "Special Survey Docking",
            "Class",
            "Tanki perlu di kosongkan dan dibersikan, sebelum dilakukan inspeksi tanki",
          ],
        ]
      },
    ]
  },
  {
    slug: "feed-pump-fo",
    type: "FUEL_OIL_SYSTEM",
    specs: {
      functionalGroup: "Propulsion Function Group",
      system: "Diesel Engine",
      subsystem: "Fuel Oil System",
      equipmentID: "FO-FP-01",
      equipmentName: "Feed Pump FO",
      drawing: "Sistem Pipa Bahan Bakar",
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
            "Berfungsi untuk menyalurkan bahan dari Daerating Tank ke mesin utama sebelum di injeksi oleh ijection pump dengan kapacitas 1700 Liter/Jam dengan Head 4 m (Digerakkan oleh Mesin Utama)",
            "Primary",
            ["9,1", "9,2"],
            [
              "Tidak ada aliran bahan bakar minyak yang dipindahkan",
              "Memompa bahan bakar dengan debit dibawah 1700 liter/Jam dan head 4 m"
            ],
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
            "Tidak ada aliran bahan bakar minyak",
            "9.1 komponen internal retak atau pecah",
            "Random",
            {
              type: "number",
              text: [
                "Pompa tidak dapat memindahkan bahan bakar",
              ]
            },
            "9,1 Tidak ada aliran bahan bakar minyak yang dipindahkan",
          ],
          [
            "2",
            "Beroperasi pada  head atau flow dibawah kinerja",
            "9.2 Keausan komponen internal atau mechanical fatigue.",
            "Random",
            {
              type: "number",
              text: [
                "Kapasitas pompa berkurang",
                "Tangki harian tidak menerima bahan bakar  yang cukup sesuai dengan kebutuhan",
              ]
            },
            "9,2 Memompa bahan bakar dengan debit dibawah 1700 liter/Jam dan head 4 m",
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
            "Tidak ada aliran bahan bakar minyak",
            [
              "Operasional mesin utama terhenti, karena tidak ada suplai bahan bakar.",
              "Hilangnya tenaga mesin utama sehingga tidak ada tenaga penggerak",		
            ],
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Visual inspeksi",
                "Getaran dan suara tidak normal",
                "Tidak ada aliran",	
              ],
            },
            {
              type: "dot",
              text: [
                "Pemeriksaan rutin",
              ],
            },
          ],
          [
            "2",
            "Beroperasi pada  head atau flow dibawah kinerja",
            [
              "Operasional tertunda selama pengisian bahan bakar. Komponen internal harus diganti",		
            ],
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Kebisingan dan getaran yang tidak normal",
                "Penurunan laju aliran dan tekanan"	,	
              ],
            },
            {
              type: "dot",
              text: [
                "Visual check dan pemeriksaan pelumasan",
              ],
            },
          ],
        ]
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
            "Tidak ada aliran bahan bakar minyak",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                "Pemeriksaan visual apakah ada retak atau pecah pada komponen feed pompa",
                "Inspeksi dan perawatan feed pompa",
                "Pergantian komponen yang rusak pada feed pump",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "2",
            "Beroperasi pada head atau flow dibawah kinerja",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                "Pemeriksaan visual apakah ada kehausan pada komponen feed pompa",
                "Pelumasan seal dan bearing serta periksa kekencangan baut feed pump", 
                "Inspeksi dan perawatan feed pump",
                "Pergantian komponen yang rusak pada feed pump"		,
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
        ]
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
              text: ["Pemeriksaan visual apakah ada retak atau pecah pada komponen feed pompa"]
            },
            "CM",
            "9.1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "Harian",
            "-",
            "Dilakukan oleh mekanik",
          ],
          [
            { 
              type: "dot", 
              text: ["Pemeriksaan visual apakah ada kehausan pada komponen feed pump"]
            },
            "CM",
            "9.2",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "Harian",
            "-",
            "Dilakukan oleh mekanik",
          ],
          [
            { 
              type: "dot", 
              text: ["Pelumasan seal dan bearing serta periksa kekencangan baut feed pump"]
            },
            "PM",
            "9.2",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "6 Bulan",
            "-",
            "Dilakukan oleh mekanik",
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
              text: ["Pergantian komponen yang rusak pada feed pump"]
            },
            "OTC",
            ["9.1", "9.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "Jika terjadi kerusakan",
            "-",
            "Segera dilakukan perbaikan, jika terjadi kerusakan",
          ],
        ]
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
              text: ["Inspeksi dan perawatan feed pompa"]
            },
            "PM",
            ["9.1", "9.2"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            " Intermadiate Survey Docking",
            "Rekomendasi vendor",
            "Hal ini di lakukan untuk melihat kondisi pompa dan perawatan pompa",
          ],
        ]
      },
    ]
  },
  {
    slug: "fo-stand-by-feed-pump",
    type: "FUEL_OIL_SYSTEM",
    specs: {
      functionalGroup: "Propulsion Function Group",
      system: "Diesel Engine",
      subsystem: "Fuel Oil System",
      equipmentID: "FO-EFP-01",
      equipmentName: "FO Stand-by Feed Pump",
      drawing: "Sistem Pipa Bahan Bakar",
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
            "Berfungsi untuk menyalurkan bahan dari Daerating Tank ke mesin utama sebelum di injeksi oleh ijection pump dengan kapacitas 1700 Liter/Jam dengan Head 4 m (Sebagai Feed Pump cadangan dengan elekrik motor sebagai penggeraknya)",
            "Primary",
            ["10,1", "10,2"],
            [
              "Tidak ada aliran bahan bakar minyak yang dipindahkan",
              "Memompa bahan bakar dengan debit dibawah 1700 liter/Jam dan head 4 m"
            ],
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
            "1a",
            "Tidak ada aliran bahan bakar minyak",
            "10.1 Suction saringan pompa tersumbat sepenuhnya",
            "Wear-out",
            {
              type: "number",
              text: [
                "Pompa tidak dapat memindahkan bahan bakar",
              ]
            },
            "10,1 Tidak ada aliran bahan bakar minyak yang dipindahkan",
          ],
          [
            "1b",
            "Tidak ada aliran bahan bakar minyak",
            "10.2  komponen internal retak atau pecah",
            "Random",
            {
              type: "number",
              text: [
                "Pompa tidak dapat memindahkan bahan bakar",
              ]
            },
            "10,1 Tidak ada aliran bahan bakar minyak yang dipindahkan",
          ],
          [
            "1c",
            "Tidak ada aliran bahan bakar minyak",
            "10.3  Motor elektrik gagal bekerja",
            "Random",
            {
              type: "number",
              text: [
                "Pompa tidak dapat memindahkan bahan bakar",
                "Tangki harian tidak menerima bahan bakar sesuai dengan kebutuhan",
              ]
            },
            "10,1 Tidak ada aliran bahan bakar minyak yang dipindahkan",
          ],
          [
            "2a",
            "Beroperasi pada  head atau flow dibawah kinerja",
            "10.4 Keausan komponen internal atau mechanical fatigue.",
            "Wear-out",
            {
              type: "number",
              text: [
                "Kapasitas pompa berkurang",
                "Tangki harian tidak menerima bahan bakar  yang cukup sesuai dengan kebutuhan",
              ]
            },
            "10,2 Memompa bahan bakar dengan debit dibawah 1700 liter/Jam dan head 4 m",
          ],
          [
            "2b",
            "Beroperasi pada  head atau flow dibawah kinerja",
            "10.5 Suction saringan pompa tersumbat sebagian",
            "Wear-out",
            {
              type: "number",
              text: [
                "Aliran pompa menurun",
                "Tangki harian tidak menerima bahan bakar sesuai dengan kebutuhan",
              ]
            },
            "10,2 Memompa bahan bakar dengan debit dibawah 1700 liter/Jam dan head 4 m",
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
            "1a",
            "Tidak ada aliran bahan bakar minyak",
            [
              "Operasional mesin utama terhenti, karena tidak ada suplai bahan bakar. Diperlukan pergantian suction filter yang tersumbat",		
            ],
            "2",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Tidak ada aliran",	
              ],
            },
            {
              type: "dot",
              text: [
                "Pemeriksaan dan pembersihan rutin",
              ],
            },
          ],
          [
            "1b",
            "Tidak ada aliran bahan bakar minyak",
            [
              "Operasional mesin utama terhenti, karena tidak ada suplai bahan bakar.",
              "Hilangnya tenaga mesin utama sehingga tidak ada tenaga penggerak",		
            ],
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Visual inspeksi",
                "Getaran dan suara tidak normal",
                "Tidak ada aliran",	
              ],
            },
            {
              type: "dot",
              text: [
                "Pemeriksaan rutin",
              ],
            },
          ],
          [
            "1c",
            "Tidak ada aliran bahan bakar minyak",
            [
              "Operasional mesin utama terhenti, karena tidak ada suplai bahan bakar. Diperlukan pergantian suction filter yang tersumbat",		
            ],
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Motor tidak bergerak saat dihidupkan",	
              ],
            },
            {
              type: "dot",
              text: [
                "Inspeksi dan perawatan",
              ],
            },
          ],
          [
            "2a",
            "Beroperasi pada  head atau flow dibawah kinerja",
            [
              "Operasional tertunda selama pengisian bahan bakar. Komponen internal harus diganti",		
            ],
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Kebisingan dan getaran yang tidak normal",
                "Penurunan laju aliran dan tekanan"	,	
              ],
            },
            {
              type: "dot",
              text: [
                "Visual check dan pemeriksaan pelumasan",
              ],
            },
          ],
          [
            "2b",
            "Beroperasi pada  head atau flow dibawah kinerja",
            [
              "Operasional tertunda selama pengisian bahan bakar. Diperlukan pembersihan atau pergantian suction filter yang tersumbat",		
            ],
            "2",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Kebisingan dan getaran yang tidak normal",
                "Penurunan laju aliran dan tekanan"	,	
              ],
            },
            {
              type: "dot",
              text: [
                "Pemeriksan dan pembersihan rutin",
              ],
            },
          ],
        ]
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
            "1a",
            "Tidak ada aliran bahan bakar minyak",
            "2",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Pemeriksaan dan pembersihann saringan hisap",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "1b",
            "Tidak ada aliran bahan bakar minyak",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                "Pemeriksaan visual apakah ada retak atau pecah pada komponen feed pompa",
                "Inspeksi dan perawatan feed pompa",
                "Pergantian komponen yang rusak pada feed pump",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "1c",
            "Tidak ada aliran bahan bakar minyak",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                "Inspeksi dan perawatan electic motor",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "2a",
            "Beroperasi pada head atau flow dibawah kinerja",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                "Pemeriksaan visual apakah ada kehausan pada komponen standy-by pompa",
                "Pelumasan seal dan bearing serta periksa kekencangan baut standy-by pump", 
                "Inspeksi dan perawatan standy-by pump",
                "Pergantian komponen yang rusak pada standy-by pump",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "2b",
            "Beroperasi pada head atau flow dibawah kinerja",
            "2",
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Pemeriksaan visual pompa dan bersihkan saringan hisap",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
        ]
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
              text: ["Pemeriksaan dan pembersihann saringan hisap"]
            },
            "PM",
            "10.1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "2 Minggu",
            "-",
            "Dilakukan oleh mekanik",
          ],
          [
            { 
              type: "dot", 
              text: ["Pemeriksaan visual apakah ada kehausan pada komponen standy-by pump"]
            },
            "CM",
            "10.2",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "Harian",
            "-",
            "Dilakukan oleh mekanik",
          ],
          [
            { 
              type: "dot", 
              text: ["Pemeriksaan visual apakah ada kebocoran, suara dan getaran tidak normal"]
            },
            "CM",
            "10.4",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "Harian",
            "-",
            "Segera dilakukan perbaikan, jika terjadi kerusakan",
          ],
          [
            { 
              type: "dot", 
              text: ["Pelumasan seal dan bearing serta periksa kekencangan baut"]
            },
            "PM",
            "10.4",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "6 Bulan",
            "-",
            "Dilakukan oleh mekanik",
          ],
          [
            { 
              type: "dot", 
              text: [" Pemeriksaan visual pompa dan bersihkan saringan hisap"]
            },
            "CM",
            "10.5",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "6 Bulan",
            "-",
            "Dilakukan oleh mekanik",
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
              text: ["Pergantian komponen yang rusak pada stand-by pump"]
            },
            "OTC",
            ["10.2", "10.4"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "Intermadiate Survey Docking",
            "Class",
            "Segera dilakukan perbaikan, jika terjadi kerusakan",
          ],
        ]
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
              text: ["Inspeksi dan perawatan electic motor"]
            },
            "CM",
            "10.2",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "Setiap Docking",
            "Class",
            "Hal ini di lakukan untuk melihat tahanan elekrik motor",
          ],
          [
            { 
              type: "dot", 
              text: ["Inspeksi dan perawatan standy-by pompa"]
            },
            "PM",
            ["10.2", "10.4"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "Intermadiate Survey Docking",
            "Rekomendasi vendor",
            "Hal ini di lakukan untuk melihat kondisi pompa dan perawatan pompa	",
          ],
        ]
      },
    ]
  },
  {
    slug: "fo-service-tank-a/e",
    type: "FUEL_OIL_SYSTEM",
    specs: {
      functionalGroup: "Propulsion Function Group",
      system: "Diesel Engine",
      subsystem: "Fuel Oil System",
      equipmentID: "FO-SRT-02",
      equipmentName: "FO Service Tank A/E",
      drawing: "Sistem Pipa Bahan Bakar",
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
            "Berfungsi untuk menyimpan bahan bakar minyak yang diperlukan untuk sistem penggerak dan pembangkit listrik bantu dengan kapasitas 2400 liter.",
            "Primary",
            "11,1",
            "Tangki tidak dapat menyimpan bahan bakar minyak untuk tanki harian",
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
            "Kebocoran service tank mesin bantu",
            "11.1 Dinding menipis karena korosi oleh waktu dari kondisi lingkungan",
            "Wear-out",
            {
              type: "number",
              text: [
                "Hilangnya Kemampuan menyimpan bahan bakar","Kerusakan struktural  pada tanki",
              ]
            },
            "11,1 Tangki tidak dapat menyimpan bahan bakar minyak untuk tanki harian",
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
            "Kebocoran service tank mesin bantu",
            [
              "Kebocoran dapat menyebabkab keluarnya bahan bakar yang berpotensi terjadi kebakaran atau ledakan. Dapat mengurangi kebutuhan listrik di kapal",		
            ],
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Visual inspeksi",
                "Pemantauan level bahan bakar",	
              ],
            },
            {
              type: "dot",
              text: [
                "Pembersihan dan inspeksi pada tanki",
              ],
            },
          ],
        ]
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
            "Kebocoran service tank mesin bantu",
            "2",
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                "Pembersihan dan inspeksi pada tanki harian bahan bakar mesin bantu",
                "Pengecekan volume tanki harian mesin bantu",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
        ]
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
              text: ["Pengecekan volume tanki harian mesin bantu"]
            },
            "CM",
            "11.1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "Harian",
            "-",
            "Dilakukan oleh mekanik",
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
              text: ["Pembersihan dan inspeksi pada tanki harian bahan bakar mesin bantu"]
            },
            "CM",
            "11.1",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "Special Survey Docking",
            "Class",
            "Tanki perlu di kosongkan dan dibersikan, sebelum dilakukan inspeksi internal tanki",
          ],
        ]
      },
    ]
  },
  {
    slug: "water-separator",
    type: "FUEL_OIL_SYSTEM",
    specs: {
      functionalGroup: "Propulsion Function Group",
      system: "Diesel Engine",
      subsystem: "Fuel Oil System",
      equipmentID: "FO-OWS-01",
      equipmentName: "Water Separator",
      drawing: "Sistem Pipa Bahan Bakar",
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
            "Menyaring bahan bakar minyak dari kotoran dan kontaminan, memastikan pasokan bahan bakar yang bersih dan bebas serpihan sebelum di alirkan ke mesin bantu dnegan ukuran 15A.",
            "Primary",
            ["12,1", "12,2"],
            [
              "Tidak dapat mengalirkan bahan bakar sesuai dengan desain sistem",
              "Tidak dapat menghilangkan kotoran dan kontaminan bahan bakar minyak"
            ],
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
            "Filter tersumbat/ penyumbatan aliran",
            "12.1 Penumpuksn partikel atau kontaminan yang secara terus menerus pada elemen filter",
            "Wear-out",
            {
              type: "number",
              text: [
                "Tekanan aliran bahan bakar menurun",
                "Mengurangi kemampuan memfilter kotoran atau kontaminan",
                "Potensi merusak elemen filter",
              ]
            },
            "12,1 Tidak dapat mengalirkan bahan bakar sesuai dengan desain sistem",
          ],
          [
            "2a",
            "Elemen filter runtuh atau rusak",
            "12.2 Erosi dan abrasi yang menyebabkan kerusakan elemen filter",
            "Wear-out",
            {
              type: "number",
              text: [
                "Kerusakan pada filter seperti retakan, pecah atau perubahan bentuk.",
                "Meningkatnya risiko masuknya kontaminasi ke mesin utama",
              ]
            },
            "12,2 Tidak dapat menghilangkan kotoran dan kontaminan bahan bakar minyak",
          ],
          [
            "2b",
            "Elemen filter runtuh atau rusak",
            "12.3 Mechanical Fatigue",
            "Wear-out",
            {
              type: "number",
              text: [
                "Kerusakan pada filter seperti retakan, pecah atau perubahan bentuk.",
                "Meningkatnya risiko masuknya kontaminasi ke mesin utama",
              ]
            },
            "12,2 Tidak dapat menghilangkan kotoran dan kontaminan bahan bakar minyak",
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
            "Filter tersumbat/ penyumbatan aliran",
            [
              "Operasional main engine tertunda karena kekurangan bahan bakar.",
              "Menurunkan kinerja mesin utama",		
            ],
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: [
                "Tekanan bahan bakar menurun",
                "Tidak ada aliran bahan bakar minyak",	
              ],
            },
            {
              type: "dot",
              text: [
                "Pemeriksaan dan pembersihan rutin",
              ],
            },
          ],
          [
            "2a",
            "Elemen filter runtuh atau rusak",
            [
              "Kotoran dan kontaminan yang tidak tersaing menyebabkan kerusakan pada mesin utama",
              "Mengurangi performa mesin utama",		
            ],
            "1",
            "2",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Tekanan bahan bakar menurun",
                "Tidak ada aliran bahan bakar minyak",	
              ],
            },
            {
              type: "dot",
              text: [
                "Pemeriksaan rutin",
              ],
            },
          ],
          [
            "2b",
            "Elemen filter runtuh atau rusak",
            [
              "Kotoran dan kontaminan yang tidak tersaing menyebabkan kerusakan pada mesin utama",
              "Mengurangi performa mesin utama",		
            ],
            "1",
            "2",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "number",
              text: [
                "Tekanan bahan bakar menurun",
                "Tidak ada aliran bahan bakar minyak",	
              ],
            },
            {
              type: "dot",
              text: [
                "Pemeriksaan rutin",
              ],
            },
          ],
        ]
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
            "Filter tersumbat/ penyumbatan aliran",
            "2",
            "3",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "Pemeriksaan kondisi filter dan pembersihan elemen filter",
              ],
            },
            "2",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
          ],
          [
            "2a",
            "Elemen filter runtuh atau rusak",
            "1",
            "2",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                "Pemeriksaan kebocoran filter",
                "Dilakukan pergantian filter",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
            },
          ],
          [
            "2b",
            "Elemen filter runtuh atau rusak",
            "1",
            "2",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "dot",
              text: [
                "Dilakukan pergantian filter",
              ],
            },
            "1",
            {
              type: "class",
              text: ["Rendah"],
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
              text: ["Pemeriksaan kondisi filter dan pembersihan elemen filter"]
            },
            "CM",
            "12.1",
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              text: ["Rendah-Menengah"],
            },
            "2 Minggu",
            "-",
            "Dilakukan oleh mekanik",
          ],
          [
            { 
              type: "dot", 
              text: ["Pemeriksaan kebocoran filter"]
            },
            "CM",
            "12.2",
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "Harian",
            "-",
            "Dilakukan oleh mekanik",
          ],
          [
            { 
              type: "dot", 
              text: ["Dilakukan pergantian filter"]
            },
            "OTC",
            ["12.2", "12.3"],
            {
              type: "class",
              text: ["Rendah"],
            },
            {
              type: "class",
              text: ["Rendah"],
            },
            "Jika terjadi kerusakan",
            "-",
            "Segera dilakukan perbaikan, jika terjadi kerusakan",
          ],
        ],
      },
    ]
  },
]

export function getDataWithSlug(slug: string) {
  return data.find((d) => d.slug === slug)
}

export function getSlugAtType(type: string) {
  return data.filter((d) => d.type === type).map((d) => d.slug)
}

// return [ "PROPELLER", "SHAFTING", "COMPRESSED_AIR_SYSTEM", "FUEL_OIL_SYSTEM", "COOLING_SYSTEM" ]
export function getRouteTypes() {
  let types = data.map((c) => c.type)
  return types.filter((item, i, ar) => ar.indexOf(item) === i);
}

export function kebabToTitleCase(str: string) {
  return str
    .split('-') // Split the string by hyphens
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter of each word
    .join(' '); // Join the words with spaces
}

export function snakeToUpperCase(str: string) {
  return str
    .split('_') // Split the string by underscores
    .map(word => word.toUpperCase()) // Convert each word to uppercase
    .join(' '); // Join the words with spaces
}
