(function() {
  var empty_svg, init_svg, rect1, rect3, title;
  empty_svg = function() {
    return d3.select('div.output').append('svg');
  };
  rect1 = function() {
    var svg;
    svg = d3.select('div.output').append('svg');
    return svg.append("rect").attr("x", 150).attr("y", 100).attr("width", 60).attr("height", 300);
  };
  rect3 = function() {
    var svg;
    svg = d3.select('div.output').append('svg');
    svg.append("rect").attr("x", 200).attr("y", 300).attr("width", 40).attr("height", 50);
    svg.append("rect").attr("x", 100).attr("y", 20).attr("width", 30).attr("height", 50);
    return svg.append("rect").attr("x", 10).attr("y", 200).attr("width", 25).attr("height", 90);
  };
  slide.code("JavaScript", null, "// In JS functions are first class citizens.\n// This is a very powerful concept!\nvar squared = function(x) {\n  return x * x\n}\n\nconsole.log(\"squared(7) ==\", squared(7))\n\n\n// D3 has many helper methods\n// d3.scale.linear() returns a function that\n// will map the given domain to the given\n// range linearly.\nvar w = 640, h = 320\n\nvar x = d3.scale.linear()\n  .domain([-1, 1])\n  .range([0, w])\n\nvar y = d3.scale.linear()\n  .domain([0, 1])\n  .range([0, h])\n\nconsole.log(\"x(0) ==\", x(0)) // == w/2\nconsole.log(\"y(3) ==\", y(3)) // == 3*h");
  slide.title("Core D3");
  slide.code_title(title = ".select()");
  slide.code(title, rect1, "var svg = d3.select(\"div.output svg\")\n\nvar myRect = svg.select(\"rect\")\nmyRect.attr(\"width\", 100)\nmyRect.attr(\"height\", 100)\nmyRect.style(\"fill\", \"steelblue\")");
  slide.code(title, rect1, "var svg = d3.select(\"div.output svg\")\n\nsvg.select(\"rect\")\n  .attr(\"width\", 100)\n  .attr(\"height\", 100)\n  .style(\"fill\", \"steelblue\")");
  slide.code_title(title = ".selectAll()");
  slide.code(title, rect3, "var svg = d3.select(\"div.output svg\")\n\nsvg.select(\"rect\")\n  .attr(\"width\", 100)\n  .attr(\"height\", 100)\n  .style(\"fill\", \"steelblue\")");
  slide.code(title, rect3, "var svg = d3.select(\"div.output svg\")\n\nsvg.selectAll(\"rect\")\n  .attr(\"width\", 100)\n  .attr(\"height\", 100)\n  .style(\"fill\", \"steelblue\")");
  slide.code(title, rect3, "var svg = d3.select(\"div.output svg\")\n\nsvg.selectAll(\"rect\")\n  .attr(\"x\", 0)\n  .attr(\"y\", function(d,i) { return i*90+50 })\n  .attr(\"width\", function(d,i) {\n      return i*150+100;\n    })\n  .attr(\"height\", 20)\n  .style(\"fill\", \"steelblue\")");
  slide.code_title(title = ".data()");
  slide.code(title, rect3, "var svg = d3.select(\"div.output svg\")\n\nsvg.selectAll(\"rect\")\n  .data([64, 128, 256])\n  .attr(\"x\", 0)\n  .attr(\"y\", function(d,i) { return i*90+50 })\n  .attr(\"width\", function(d,i) { return d; })\n  .attr(\"height\", 20)\n  .style(\"fill\", \"steelblue\")");
  slide.code_title(title = ".enter()");
  slide.code(title, rect3, "var svg = d3.select(\"div.output svg\")\n\nvar selection = svg.selectAll(\"rect\")\n  .data([64, 128, 256, 71])\n\nselection\n  .attr(\"x\", 0)\n  .attr(\"y\", function(d,i) { return i*90+50 })\n  .attr(\"width\", function(d,i) { return d; })\n  .attr(\"height\", 20)\n  .style(\"fill\", \"steelblue\")");
  slide.code(title, rect3, "var svg = d3.select(\"div.output svg\")\n\nvar selection = svg.selectAll(\"rect\")\n  .data([64, 128, 256, 71])\n\nselection\n  .attr(\"x\", 0)\n  .attr(\"y\", function(d,i) { return i*90+50 })\n  .attr(\"width\", function(d,i) { return d; })\n  .attr(\"height\", 20)\n  .style(\"fill\", \"steelblue\")\n\nselection.enter().append(\"rect\")\n  .attr(\"x\", 10) // let\"s just put it somewhere\n  .attr(\"y\", 10)\n  .attr(\"width\", 30)\n  .attr(\"height\", 30)\n  .style(\"fill\", \"green\")");
  slide.code(title, rect3, "var svg = d3.select(\"div.output svg\")\n\nvar selection = svg.selectAll(\"rect\")\n  .data([64, 128, 256, 71])\n\nselection\n  .attr(\"x\", 0)\n  .attr(\"y\", function(d,i) { return i*90+50 })\n  .attr(\"width\", function(d,i) { return d; })\n  .attr(\"height\", 20)\n  .style(\"fill\", \"steelblue\")\n\nselection.enter().append(\"rect\")\n  .attr(\"x\", 0)\n  .attr(\"y\", function(d,i) { return i*90+50 })\n  .attr(\"width\", function(d,i) { return d; })\n  .attr(\"height\", 20)\n  .style(\"fill\", \"steelblue\")");
  slide.code(title, rect3, "var svg = d3.select(\"div.output svg\")\n\nvar selection = svg.selectAll(\"rect\")\n  .data([64, 128, 256, 71])\n\n// Shorter\nselection.enter().append(\"rect\")\n\n// when updating the regular selection then\n// enter selection is joined in to the update\n// selection for convenience.\nselection\n  .attr(\"x\", 0)\n  .attr(\"y\", function(d,i) { return i*90+50 })\n  .attr(\"width\", function(d,i) { return d; })\n  .attr(\"height\", 20)\n  .style(\"fill\", \"steelblue\")");
  title += " // a common pattern";
  slide.code(title, empty_svg, "var svg = d3.select(\"div.output svg\")\n\nsvg.selectAll(\"rect\")\n  .data([64, 128, 256])\n  .enter().append(\"rect\")\n    .attr(\"x\", 0)\n    .attr(\"y\", function(d,i) { return i*90+50 })\n    .attr(\"width\", function(d,i) { return d; })\n    .attr(\"height\", 20)\n    .style(\"fill\", \"steelblue\")");
  slide.code_title(title = ".exit()");
  slide.code(title, rect3, "var svg = d3.select(\"div.output svg\")\n\nvar selection = svg.selectAll(\"rect\")\n  .data([64, 128])\n\nselection\n  .attr(\"x\", 0)\n  .attr(\"y\", function(d,i) { return i*90+50 })\n  .attr(\"width\", function(d,i) { return d; })\n  .attr(\"height\", 20)\n  .style(\"fill\", \"steelblue\")");
  slide.code(title, rect3, "var svg = d3.select(\"div.output svg\")\n\nvar selection = svg.selectAll(\"rect\")\n  .data([64, 128])\n\nselection\n  .attr(\"x\", 0)\n  .attr(\"y\", function(d,i) { return i*90+50 })\n  .attr(\"width\", function(d,i) { return d; })\n  .attr(\"height\", 20)\n  .style(\"fill\", \"steelblue\")\n\nselection.exit()\n  .remove()");
  slide.code_title(title = ".transition()");
  slide.code(title, rect3, "var svg = d3.select(\"div.output svg\")\n\nsvg.selectAll(\"rect\")\n  .data([64, 128, 256])\n  .transition()\n  .duration(3000) // 3 seconds\n    .attr(\"x\", 0)\n    .attr(\"y\", function(d,i) { return i*90+50 })\n    .attr(\"width\", function(d,i) { return d; })\n    .attr(\"height\", 20)\n    .style(\"fill\", \"steelblue\")");
  slide.code(title, rect3, "var svg = d3.select(\"div.output svg\")\n\nvar selection = svg.selectAll(\"rect\")\n  .data([64, 128, 256, 71])\n\nselection.enter().append(\"rect\")\n  .attr(\"x\", 200)\n  .attr(\"y\", 200)\n  .attr(\"width\", 10)\n  .attr(\"height\", 10)\n  .style(\"fill\", \"red\")\n\nselection\n  .transition()\n  .duration(3000)\n    .attr(\"x\", 0)\n    .attr(\"y\", function(d,i) { return i*90+50 })\n    .attr(\"width\", function(d,i) { return d; })\n    .attr(\"height\", 20)\n    .style(\"fill\", \"steelblue\")\n    .transition()\n    .duration(3000)\n    .delay(3000)\n      .style(\"fill\", \"green\")\n      .attr(\"width\", function(d,i) {\n          return d*1.5;\n        })\n\nselection.exit()\n  .attr(\"opacity\", 1)\n  .transition()\n  .duration(3000)\n    .attr(\"opacity\", 0)\n    .remove()");
  slide.code_title(title = ".data(..., join)");
  init_svg = function() {
    var svg;
    svg = d3.select("div.output").append("svg");
    return svg.selectAll("rect").data([64, 128, 256]).enter().append("rect").attr("x", 0).attr("y", function(d, i) {
      return i * 90 + 50;
    }).attr("width", function(d, i) {
      return d;
    }).attr("height", 20).style("fill", "steelblue");
  };
  slide.code(title, init_svg, "var svg = d3.select(\"div.output svg\")\n\n// Let's say we start here:\n/*\nsvg.selectAll(\"rect\")\n  .data([64, 128, 256])\n  .enter().append(\"rect\")\n    .attr(\"x\", 0)\n    .attr(\"y\", function(d,i) { return i*90+50 })\n    .attr(\"width\", function(d,i) { return d; })\n    .attr(\"height\", 20)\n    .style(\"fill\", \"steelblue\")\n*/\n\n// And then we do this:\nvar selection = svg.selectAll(\"rect\")\n  .data([128, 256, 71]) // <- incomplete?\n\nselection.enter().append(\"rect\")\n  .attr(\"x\", 0)\n  .attr(\"y\", function(d,i) { return i*90+50 })\n  .attr(\"width\", function(d,i) { return d; })\n  .attr(\"height\", 20)\n  .style(\"fill\", \"steelblue\")\n\nselection\n  .transition()\n  .duration(3000)\n    .attr(\"x\", 0)\n    .attr(\"y\", function(d,i) { return i*90+50 })\n    .attr(\"width\", function(d,i) { return d; })\n    .attr(\"height\", 20)\n    .style(\"fill\", \"steelblue\")\n\nselection.exit()\n  .remove()");
  slide.code(title, init_svg, "// Start the same as before\n\nvar svg = d3.select(\"div.output svg\")\n\nvar selection = svg.selectAll(\"rect\")\n  .data([128, 256, 71], String)\n\nselection.enter().append(\"rect\")\n  .attr(\"x\", 0)\n  .attr(\"y\", function(d,i) {\n      return (i+1)*90+50\n    })\n  .attr(\"width\", function(d,i) { return d; })\n  .attr(\"height\", 20)\n  .style(\"fill\", \"steelblue\")\n  .style(\"opacity\", 0)\n\nselection\n  .transition()\n  .duration(3000)\n    .attr(\"y\", function(d,i) { return i*90+50 })\n    .attr(\"height\", 20)\n    .style(\"opacity\", 1)\n\nselection.exit()\n  .transition()\n  .duration(3000)\n    .attr(\"y\", function(d,i) {\n        return (i-1)*90+50\n      })\n    .style(\"opacity\", 0)\n    .remove()");
  slide.title("Educational Examples");
  slide.code("Shuffle", empty_svg, "var cards = [\n  \"J\\u2665\", \"J\\u2666\", \"J\\u2663\", \"J\\u2660\",\n  \"K\\u2665\", \"K\\u2666\", \"K\\u2663\", \"K\\u2660\",\n  \"Q\\u2665\", \"Q\\u2666\", \"Q\\u2663\", \"Q\\u2660\",\n  \"A\\u2665\", \"A\\u2666\", \"A\\u2663\", \"A\\u2660\"]\n\ncards.sort(function() {return Math.random()-.5})\n\nvar svg = d3.select(\"div.output svg\")\n\nvar selection = svg.selectAll(\"text\")\n  .data(cards, String)\n\nselection\n  .transition()\n  .duration(1000)\n    .attr(\"y\", function(d,i) { return i*35+40 })\n\nselection.enter().append(\"text\")\n  .attr(\"x\", 30)\n  .attr(\"y\", function(d,i) { return i*35+40 })\n  .style(\"fill\", function(d) {\n      return \"\\u2665\\u2666\".indexOf(d[1]) < 0 ?\n        \"black\" : \"red\";\n    })\n  .style(\"font\", \"20px monospace\")\n  .text(String)");
  slide.code("Shuffle (v2)", empty_svg, "var cards = [\n  \"J\\u2665\", \"J\\u2666\", \"J\\u2663\", \"J\\u2660\",\n  \"K\\u2665\", \"K\\u2666\", \"K\\u2663\", \"K\\u2660\",\n  \"Q\\u2665\", \"Q\\u2666\", \"Q\\u2663\", \"Q\\u2660\",\n  \"A\\u2665\", \"A\\u2666\", \"A\\u2663\", \"A\\u2660\"]\n\ncards.sort(function() {return Math.random()-.5})\n\nvar svg = d3.select(\"div.output svg\")\n\nvar selection = svg.selectAll(\"text\")\n  .data(cards, String)\n\nselection\n  .transition().duration(500)\n  .attr(\"x\", function(d,i) {return (i%8)*30+30})\n  .transition().duration(500).delay(500)\n  .attr(\"y\", function(d,i) { return i*35+40 })\n  .transition().duration(500).delay(1000)\n  .attr(\"x\", 30)\n\nselection.enter().append(\"text\")\n  .attr(\"x\", 30)\n  .attr(\"y\", function(d,i) { return i*35+40 })\n  .style(\"fill\", function(d) {\n      return \"\\u2665\\u2666\".indexOf(d[1]) < 0 ?\n        \"black\" : \"red\";\n    })\n  .style(\"font\", \"20px monospace\")\n  .text(String)");
  slide.code("Drawing lines", empty_svg, "var svg = d3.select(\"div.output svg\")\n\nsvg.append(\"path\")\n  .style(\"fill\", \"none\")\n  .style(\"stroke\", \"black\")\n  .style(\"stroke-width\", 2)\n  .attr(\"d\", \"M 10 10 L 200 200 \"+\n             \"L 200 400 L 300 100 L 400 150\")");
  slide.code("Drawing lines", empty_svg, "var points = [\n  { x: 10,  y: 10  },\n  { x: 200, y: 200 },\n  { x: 200, y: 400 },\n  { x: 300, y: 100 },\n  { x: 400, y: 150 }\n]\n\nvar lineFn = d3.svg.line()\n  .x(function(d) { return d.x })\n  .y(function(d) { return d.y })\n  //.interpolate(\"cardinal\")\n\nvar svg = d3.select(\"div.output svg\")\n\nsvg.append(\"path\")\n  .style(\"fill\", \"none\")\n  .style(\"stroke\", \"black\")\n  .style(\"stroke-width\", 2)\n  .attr(\"d\", lineFn(points))");
  slide.code("Drawing lines", empty_svg, "var pointsSin = d3.range(21).map(function(i) {\n  return {x: i, y: Math.sin(i/3) }\n})\nvar pointsCos = d3.range(21).map(function(i) {\n  return {x: i, y: Math.cos(i/3) }\n})\n\n\nvar w = 480\nvar h = 300\nvar x = d3.scale.linear()\n          .domain([0, 20]).range([0, w])\nvar y = d3.scale.linear()\n          .domain([-1, 1]).range([h, 0])\n\nvar lineFn = d3.svg.line()\n  .x(function(d) { return x(d.x) })\n  .y(function(d) { return y(d.y) })\n\nvar svg = d3.select(\"div.output svg\")\n\nsvg.selectAll(\"path\")\n  .data([pointsSin, pointsCos])\n  .enter().append(\"path\")\n  .style(\"fill\", \"none\")\n  .style(\"stroke\", \"black\")\n  .style(\"stroke-width\", 2)\n  .attr(\"d\", lineFn)");
}).call(this);
