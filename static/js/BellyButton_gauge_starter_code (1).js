// Create the buildChart function.
function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("data/samples.json").then((data) => {
    console.log(data);

    // Create a variable that holds the samples array. 
    
    // Create a variable that filters the samples for the object with the desired sample number.
    
    
    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    var samples = data.samples.filter(s => s.id.toString() === id)[0];
        
        console.log(samples);

    // Create a variable that holds the first sample in the array.
    var samplevalues = samples.sample_values.slice(0, 10).reverse();
    // 2. Create a variable that holds the first sample in the metadata array.
    var OTU_top = (samples.otu_ids.slice(0, 10)).reverse();
    var OTU_id = OTU_top.map(d => "OTU " + d)
  
    //  console.log(`OTU IDS: ${OTU_id}`)



    // Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otuIds = [];
    var otuLabels = [];
    var sampleValues = [];

   

    // 3. Create a variable that holds the washing frequency.
    var wfreq = data.metadata.map(d => d.wfreq)
    console.log(`Washing Freq: ${wfreq}`)
    
    // Create the yticks for the bar chart.
    var trace = {
      x: samplevalues,
      y: OTU_id,
      text: labels,
      marker: {
        color: 'rgb(142,124,195)'},
      type:"bar",
      orientation: "h",
  };

  // create data variable
  var data = [trace];

  // create layout variable to set plots layout
  var layout = {
      title: "Top 10 OTU",
      yaxis:{
          tickmode:"linear",
      },
      margin: {
          l: 100,
          r: 100,
          t: 100,
          b: 30
      }
  };

    // Use Plotly to plot the bar data and layout.
    Plotly.newPlot("bar", data, layout);
  
    
    // Use Plotly to plot the bubble data and layout.
    var trace1 = {
      x: samples.otu_ids,
      y: samples.sample_values,
      mode: "markers",
      marker: {
          size: samples.sample_values,
          color: samples.otu_ids
      },
      text: samples.otu_labels

  };

  // set the layout for the bubble plot
  var layout_b = {
      xaxis:{title: "OTU ID"},
      height: 600,
      width: 1000
  };

  // creating data variable 
  var data1 = [trace1];
   
   
  Plotly.newPlot("bubble", data1, layout_b);
   
    
    // 4. Create the trace for the gauge chart.
    var gaugeData = var data_g = [
      {
      domain: { x: [0, 1], y: [0, 1] },
      value: parseFloat(wfreq),
      title: { text: `Weekly Washing Frequency ` },
      type: "indicator",
      
      mode: "gauge+number",
      gauge: { axis: { range: [null, 9] },
               steps: [
                { range: [0, 2], color: "yellow" },
                { range: [2, 4], color: "cyan" },
                { range: [4, 6], color: "teal" },
                { range: [6, 8], color: "lime" },
                { range: [8, 9], color: "green" },
              ]}
          
      }
    ];
     
    
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { 
      width: 700, 
      height: 600, 
      margin: { t: 20, b: 40, l:100, r:100 }
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge", gaugeData, gaugeLayout);
  });
}
Infinity();