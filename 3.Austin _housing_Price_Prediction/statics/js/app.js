// Function to run on page load
function init() {
  // Load the grouped data for dropdown and bar chart
  d3.json("./statics/data/housing_data_grouped.json").then((groupedData) => {
    console.log("Grouped data loaded:", groupedData); // Log the grouped data for debugging

    // Extract the zipcodes from the grouped data
    const zipcodes = Object.values(groupedData.zipcode); // Adjust if zipcodes are stored differently

    // Use d3 to select the dropdown with id of `#selDataset`
    const dropdown = d3.select('#selDataset');

    // Use the list of zipcodes to populate the select options
    zipcodes.forEach((zipcode) => {
      dropdown.append('option')
        .text(zipcode)
        .property('value', zipcode);
    });

    // Get the first zipcode from the list
    const firstZipcode = zipcodes[0];

    // Build charts and metadata panel with the first zipcode
    buildCharts(firstZipcode, groupedData);
    buildMetadata(firstZipcode, groupedData);

    // Load the detailed data and build scatter plot map
    d3.json("./statics/data/housing_data_details.json").then(function (detailedData) {
      console.log("Detailed data loaded:", detailedData); // Log the detailed data for debugging
      buildScatterMap(detailedData);
    }).catch(error => console.error("Error loading detailed data:", error));

  }).catch(error => console.error("Error loading grouped data:", error));
}

// Function to build the metadata panel
function buildMetadata(zipcode, data) {
  console.log("Selected zipcode for metadata:", zipcode);
  console.log("Data for metadata:", data);

  const index = Object.values(data.zipcode).indexOf(zipcode);

  if (index !== -1) {
    const metadata = {
      "Average Price": data.avg_latestPrice[index],
      "Price per Sqft": data.avg_price_per_sqft[index],
      "Average House Age": data.avg_house_age[index],
      "School Rating": data.avg_school_rating[index],
      "School Size": data.avg_school_size[index]
    };

    const panel = d3.select('#sample-metadata');
    panel.html('');
    Object.entries(metadata).forEach(([key, value]) => {
      panel.append('h6').text(`${key}: ${value}`);
    });
  } else {
    console.error("Zipcode not found in grouped data.");
  }
}

// Function to build the charts
function buildCharts(zipcode, data) {
  console.log("Selected zipcode for charts:", zipcode);
  console.log("Data for charts:", data);

  const index = Object.values(data.zipcode).indexOf(zipcode);

  if (index !== -1) {
    const sortedIndices = Object.keys(data.zipcode).sort((a, b) => data.avg_latestPrice[b] - data.avg_latestPrice[a]);
    const topIndices = sortedIndices.slice(0, 10);

    const zipcodes = topIndices.map(i => data.zipcode[i]);
    const avg_prices = topIndices.map(i => data.avg_latestPrice[i]);
    const avg_house_ages = topIndices.map(i => data.avg_house_age[i]);
    const avg_price_per_sqfts = topIndices.map(i => data.avg_price_per_sqft[i]);
    const avg_school_ratings = topIndices.map(i => data.avg_school_rating[i]);
    const avg_school_sizes = topIndices.map(i => data.avg_school_size[i]);

    const barData = [{
      y: zipcodes.map(zip => `ZIP ${zip}`).reverse(),
      x: avg_prices.reverse(),
      text: avg_prices.map((price, i) =>
        `Average Price: $${price}<br>` +
        `Average House Age: ${avg_house_ages[i]} years<br>` +
        `Price per Sqft: $${avg_price_per_sqfts[i]}<br>` +
        `School Rating: ${avg_school_ratings[i]}<br>` +
        `School Size: ${avg_school_sizes[i]} students`
      ).reverse(),
      type: 'bar',
      orientation: 'h',
      hoverinfo: 'text'
    }];

    const barLayout = {
      title: 'Top 10 Zipcodes by Average House Price',
      xaxis: { title: 'Average House Price ($)' },
      margin: { t: 30 }
    };

    Plotly.newPlot('bar', barData, barLayout);
  } else {
    console.error("Zipcode not found in grouped data.");
  }
}

// Function to build the scatter plot map using detailed data
function buildScatterMap(detailedData) {
  console.log("Building scatter map with detailed data.");
  console.log("Detailed data is an object, iterating through its keys.");

  const map = L.map('map').setView([30.2672, -97.7431], 10);  // Austin, TX coordinates

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  // Calculate the price range
  const prices = detailedData.map(data => data.latestPrice);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  // Function to determine the color based on the price
  function getColor(price) {
    const ratio = (price - minPrice) / (maxPrice - minPrice);
    return `hsl(${120 - 120 * ratio}, 100%, 50%)`; // Green to Red
  }

  // Iterate through each entry in the detailedData array
  detailedData.forEach((data) => {
    const latitude = data.latitude;
    const longitude = data.longitude;
    const latestPrice = data.latestPrice;
    const popupContent = `
      <h5>Price: $${latestPrice}</h5>
      <p>Bedrooms: ${data.numOfBedrooms}</p>
      <p>Bathrooms: ${data.numOfBathrooms}</p>
      <p>Year Built: ${data.yearBuilt}</p>
    `;

    if (latitude && longitude) {
      L.circleMarker([latitude, longitude], {
        radius: 8,
        fillColor: getColor(latestPrice),
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      })
        .bindPopup(popupContent)
        .addTo(map);
    }
  });
}

// Initialize the dashboard
init();
