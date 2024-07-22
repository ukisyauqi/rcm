const data = [
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: ["Inspeksi visual terkait kondisi boss propeller"],
            },
            "1",
            {
              type: "class",
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
              text: ["Rendah-Menengah"],
            },
            {
              type: "class",
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
              text: ["Rendah-Menengah"],
            },
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
              backgroundColor: "#fddb20",
              textColor: "#000",
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
              backgroundColor: "#fddb20",
              textColor: "#000",
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
              backgroundColor: "#fddb20",
              textColor: "#000",
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
              backgroundColor: "#fddb20",
              textColor: "#000",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#fddb20",
              textColor: "#000",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#fddb20",
              textColor: "#000",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#fddb20",
              textColor: "#000",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#fddb20",
              textColor: "#000",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#5071f3",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: ["lakukan vibration test analysis"],
            },
            "2",
            {
              type: "class",
              backgroundColor: "#00b14f",
              textColor: "#fff",
              text: ["Rendah-Menengah"],
            },
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
              backgroundColor: "#fddb20",
              textColor: "#000",
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
              backgroundColor: "#1caf51",
              textColor: "#fff",
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
              backgroundColor: "#1caf51",
              textColor: "#fff",
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
              backgroundColor: "#fddb20",
              textColor: "#000",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#fddb20",
              textColor: "#000",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#fddb20",
              textColor: "#000",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#fddb20",
              textColor: "#000",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
              text: ["Rendah-Menengah"],
            },
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
              backgroundColor: "#fddb20",
              textColor: "#000",
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
              backgroundColor: "#1caf51",
              textColor: "#fff",
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
              backgroundColor: "#1caf51",
              textColor: "#fff",
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
              backgroundColor: "#fddb20",
              textColor: "#000",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#fddb20",
              textColor: "#000",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#fddb20",
              textColor: "#000",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#fddb20",
              textColor: "#000",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: ["Cek kondisi sealing, lakukan replacement apabila rusak"],
            },
            "1",
            {
              type: "class",
              backgroundColor: "#00b14f",
              textColor: "#fff",
              text: ["Rendah-Menengah"],
            },
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
              text: ["Contamination of the environment and possible slipping hazards.", "Loss of fluid can lead to reduced lubrication and cooling, potentially causing overheating and further damage."],
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
              text: ["Misalignment and uneven load distribution.", "Potential for disconnection or catastrophic failure if not detected and corrected."],
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
              backgroundColor: "#fddb20",
              textColor: "#000",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: ["Torque measurements", "Audible noise"],
            },
            {
              type: "dot",
              text: [
                "Regular alignment checks",
                "Replace worn parts",
              ],
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
              backgroundColor: "#1caf51",
              textColor: "#fff",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: ["Performance monitoring", "Vibration analysis"],
            },
            {
              type: "dot",
              text: [
                "Regular inspections",
                "Replace faulty components",
              ],
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
              backgroundColor: "#1caf51",
              textColor: "#fff",
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
              backgroundColor: "#fddb20",
              textColor: "#000",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Vibration analysis", "Audible inspection"],
            },
            {
              type: "dot",
              text: [
                "Balance coupling",
                "Regular alignment",
              ],
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Visual inspection", "Oil level checks"],
            },
            {
              type: "dot",
              text: [
                "Replace seals and gaskets",
                "Routine checks",
              ],
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: ["Regular bolt/nut checks", "Vibration analysis"],
            },
            {
              type: "dot",
              text: [
                "Tighten to specifications",
                "Regular maintenance checks",
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
            "Fails to transmit torque",
            "3",
            "3",
            {
              type: "class",
              backgroundColor: "#fddb20",
              textColor: "#000",
              text: ["Menengah"],
            },
            {
              type: "dot",
              text: [
                "inspeksi visual",
                "lakukan alignment check",
              ],
            },
            "2",
            {
              type: "class",
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#fddb20",
              textColor: "#000",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#fddb20",
              textColor: "#000",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              text: ["Contamination of the environment and possible slipping hazards.", "Loss of fluid can lead to reduced lubrication and cooling, potentially causing overheating and further damage."],
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
              text: ["Misalignment and uneven load distribution.", "Potential for disconnection or catastrophic failure if not detected and corrected."],
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
              backgroundColor: "#fddb20",
              textColor: "#000",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: ["Torque measurements", "Audible noise"],
            },
            {
              type: "dot",
              text: [
                "Regular alignment checks",
                "Replace worn parts",
              ],
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
              backgroundColor: "#1caf51",
              textColor: "#fff",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: ["Performance monitoring", "Vibration analysis"],
            },
            {
              type: "dot",
              text: [
                "Regular inspections",
                "Replace faulty components",
              ],
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
              backgroundColor: "#1caf51",
              textColor: "#fff",
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
              backgroundColor: "#fddb20",
              textColor: "#000",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Vibration analysis", "Audible inspection"],
            },
            {
              type: "dot",
              text: [
                "Balance coupling",
                "Regular alignment",
              ],
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
              text: ["Rendah-Menengah"],
            },
            {
              type: "number",
              text: ["Visual inspection", "Oil level checks"],
            },
            {
              type: "dot",
              text: [
                "Replace seals and gaskets",
                "Routine checks",
              ],
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
              text: ["Menengah"],
            },
            {
              type: "number",
              text: ["Regular bolt/nut checks", "Vibration analysis"],
            },
            {
              type: "dot",
              text: [
                "Tighten to specifications",
                "Regular maintenance checks",
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
            "Fails to transmit torque",
            "3",
            "3",
            {
              type: "class",
              backgroundColor: "#fddb20",
              textColor: "#000",
              text: ["Menengah"],
            },
            {
              type: "dot",
              text: [
                "inspeksi visual",
                "lakukan alignment check",
              ],
            },
            "2",
            {
              type: "class",
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#fddb20",
              textColor: "#000",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#fddb20",
              textColor: "#000",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              text: [
                "Surface cracks",
                "propagation",
              ],
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
              text: [
                "Sudden breakage",
                "complete fracture",
              ],
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
              text: [
                "Surface wear",
                "loss of material",
              ],
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
              text: [
                "Distortion",
                "bending",
                "misshape",
              ],
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
              text: ["Increased wear on bearings and seals", "Fastener loosening"],
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
              backgroundColor: "#fddb20",
              textColor: "#000",
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
                "structural reinforcement"
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
              backgroundColor: "#1caf51",
              textColor: "#fff",
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
              backgroundColor: "#1caf51",
              textColor: "#fff",
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
              backgroundColor: "#fddb20",
              textColor: "#000",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#fddb20",
              textColor: "#000",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#fddb20",
              textColor: "#000",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#fddb20",
              textColor: "#000",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
              text: ["Rendah-Menengah"],
            },
            {
              type: "dot",
              text: [
                "lakukan vibration test analysis",
              ],
            },
            "1",
            {
              type: "class",
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
            [
              "Fail to provide support and stability to the propeller shaft",
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
              "1.1 Excessive Loading: Excessive loading on the intermediate bearing, such as sudden shocks or overloading, can exceed its capacity, leading to stress concentrations and eventual cracking of the bearing material.",
              "1.2 Material Defects: Inherent material defects such as voids or inclusions create stress concentrations, making the bearing prone to sudden crack formation.",
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: [
                "Surface cracks",
                "propagation",
              ],
            },
            ["1.1 Fail to provide support and stability to the propeller shaft"],
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
              text: [
                "Buildup of contaminants",
                "debris",
              ],
            },
            ["1.1 Fail to provide support and stability to the propeller shaft"],
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
              text: [
                "Sudden breakage",
                "complete fracture",
              ],
            },
            ["1.1 Fail to provide support and stability to the propeller shaft"],
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
              text: [
                "Surface wear",
                "loss of material",
              ],
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
              backgroundColor: "#fddb20",
              textColor: "#000",
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
                "structural reinforcement"
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
              backgroundColor: "#1caf51",
              textColor: "#fff",
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
              backgroundColor: "#1caf51",
              textColor: "#fff",
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
              backgroundColor: "#fddb20",
              textColor: "#000",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#fddb20",
              textColor: "#000",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#fddb20",
              textColor: "#000",
              text: ["Menengah-Tinggi"],
            },
            {
              type: "dot",
              text: [
                "inspeksi keretakan setiap 1000 jam",
                "lakukan perawatan setiap melakukan docking",
                "Segera lakukan pergantian componen sesuai prosedur dari vendor"
              ],
            },
            "1",
            {
              type: "class",
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#fddb20",
              textColor: "#000",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
            [
              "Fail to provide support and stability to the propeller shaft",
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
              "1.1 Excessive Loading: Excessive loading on the intermediate bearing, such as sudden shocks or overloading, can exceed its capacity, leading to stress concentrations and eventual cracking of the bearing material.",
              "1.2 Material Defects: Inherent material defects such as voids or inclusions create stress concentrations, making the bearing prone to sudden crack formation.",
            ],
            ["Wear-out", "Wear-out"],
            {
              type: "number",
              text: [
                "Surface cracks",
                "propagation",
              ],
            },
            ["1.1 Fail to provide support and stability to the propeller shaft"],
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
              text: [
                "Buildup of contaminants",
                "debris",
              ],
            },
            ["1.1 Fail to provide support and stability to the propeller shaft"],
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
              text: [
                "Sudden breakage",
                "complete fracture",
              ],
            },
            ["1.1 Fail to provide support and stability to the propeller shaft"],
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
              text: [
                "Surface wear",
                "loss of material",
              ],
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
              backgroundColor: "#fddb20",
              textColor: "#000",
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
                "structural reinforcement"
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
              backgroundColor: "#1caf51",
              textColor: "#fff",
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
              backgroundColor: "#1caf51",
              textColor: "#fff",
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
              backgroundColor: "#fddb20",
              textColor: "#000",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#fddb20",
              textColor: "#000",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#fddb20",
              textColor: "#000",
              text: ["Menengah-Tinggi"],
            },
            {
              type: "dot",
              text: [
                "inspeksi keretakan setiap 1000 jam",
                "lakukan perawatan setiap melakukan docking",
                "Segera lakukan pergantian componen sesuai prosedur dari vendor"
              ],
            },
            "1",
            {
              type: "class",
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#fddb20",
              textColor: "#000",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
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
              backgroundColor: "#00b14f",
              textColor: "#fff",
              text: ["Rendah-Menengah"],
            },
          ],
        ],
      },
    ],
  },
]

export function getDataWithSlug(slug: string) {
  return data.find((d) => d.slug === slug)
}
