/* 
 * South Lofts 1 | Official Sales Configurator Logic
 */

// Mapping for dynamic floor layout plans
function getFloorPlanUrl(unitNumber) {
    const floor = unitNumber.charAt(0);
    const suffix = unitNumber.substring(1);

    if (floor === "1") {
        const u = parseInt(unitNumber);
        const firstFloorMap = {
            101: "./Layout plans/Unit 101 - Type C.png",
            102: "./Layout plans/Unit 102 - Type C.png",
            103: "./Layout plans/Unit 103 - Type C.png",
            104: "./Layout plans/Unit 104 - Type A - With or Without Pool.png",
            105: "./Layout plans/Unit 105 - Type C.png",
            106: "./Layout plans/Unit 106 - Type C.png",
            107: "./Layout plans/Unit 107 - Type C.png",
            108: "./Layout plans/Unit 108 - Type C.png",
            109: "./Layout plans/Unit 109 - Type E.png",
            110: "./Layout plans/Unit 110- Type D.png",
            111: "./Layout plans/Unit 111 - Type D.png",
            112: "./Layout plans/Unit 112- Type E.png",
            113: "./Layout plans/Unit 113 - Type C.png",
            114: "./Layout plans/Unit 114 - Type C.png",
            115: "./Layout plans/Unit 115 - Type C.png",
            116: "./Layout plans/Unit 116 - Type B.png",
            117: "./Layout plans/Unit 117 - Type C.png",
            118: "./Layout plans/Unit 118 - Type D.png",
            119: "./Layout plans/Unit 119 - Type D.png",
            120: "./Layout plans/Unit 120 - Type D.png",
            121: "./Layout plans/Unit 121 - Type D.png",
            122: "./Layout plans/Unit 122 - Type D.png",
            123: "./Layout plans/Unit 123 - Type D.png",
            124: "./Layout plans/Unit 124 - Type E.png"
        };
        return firstFloorMap[u] || "";
    } else {
        const floorNum = parseInt(floor);
        const seriesMap = {
            "01": "./Layout plans/Floor-2-6---Serios-01---Type-C.png",
            "02": "./Layout plans/Floor-2-6---Serios-02---Type-C.png",
            "03": "./Layout plans/Floor-2-6---Serios-03---Type-C.png",
            "06": "./Layout plans/Floor-2-6--Serios-06---Type-C.png",
            "07": "./Layout plans/Floor-2-6--Serios-07---Type-C.png",
            "08": "./Layout plans/Floor-2-6--Serios-08---Type-C.png",
            "09": "./Layout plans/Floor-2-6--Serios-09---Type-E.png",
            "10": "./Layout plans/Floor-2-6--Serios-10---Type-D.png",
            "11": "./Layout plans/Floor-2-6--Serios-11---Type-D.png",
            "12": "./Layout plans/Floor-2-6--Serios-12---Type-E.png",
            "13": "./Layout plans/Floor-2-6--Serios-13---Type-C.png",
            "14": "./Layout plans/Floor-2-6--Serios-14---Type-C.png",
            "15": "./Layout plans/Floor-2-6--Serios-15---Type-C.png",
            "16": "./Layout plans/Floor-2-6--Serios-16---Type-B.png",
            "17": "./Layout plans/Floor-2-6--Serios-17---Type-B.png",
            "19": "./Layout plans/Floor-2-6--Serios-19---Type-B.png",
            "20": "./Layout plans/Floor-2-6--Serios-20---Type-D.png",
            "21": "./Layout plans/Floor-2-6--Serios-21---Type-D.png",
            "22": "./Layout plans/Floor-2-6--Serios-22---Type-D.png",
            "23": "./Layout plans/Floor-2-6--Serios-23---Type-D.png",
            "24": "./Layout plans/Floor-2-6--Serios-24---Type-D.png",
            "25": "./Layout plans/Floor-2-6--Serios-25---Type-D.png"
        };
        
        if (suffix === "04") {
            if ([3, 5].includes(floorNum)) {
                return "./Layout plans/Floor-35---Serios-04---Type-A.png";
            }
            return "./Layout plans/Floor-246---Serios-04---Type-A.png";
        }
        
        if (suffix === "05") {
            if ([3, 5].includes(floorNum)) {
                return "./Layout plans/Floor-2-3--5-6--Serios-05---Type-A-C.png";
            }
            return "./Layout plans/Floor-2-4-6---Serios-05---Type-A.png";
        }

        return seriesMap[suffix] || "";
    }
}


// Master Inventory Array (All 149 Units mapped correctly)
const INVENTORY = [
    { "u": "101", "floor": "1", "type": "C", "area": 360.59, "reg": 645000, "post": 715000, "pool": false },
    { "u": "102", "floor": "1", "type": "C", "area": 363.07, "reg": 645000, "post": 715000, "pool": false },
    { "u": "103", "floor": "1", "type": "C", "area": 350.04, "reg": 645000, "post": 715000, "pool": false },
    { "u": "104", "floor": "1", "type": "A (Flex)", "area": 522.16, "reg": 899000, "post": 975000, "pool": true },
    { "u": "105", "floor": "1", "type": "A (Flex)", "area": 861.54, "reg": 999000, "post": 1100000, "pool": true },
    { "u": "106", "floor": "1", "type": "C", "area": 351.12, "reg": 645000, "post": 715000, "pool": false },
    { "u": "107", "floor": "1", "type": "C", "area": 353.81, "reg": 645000, "post": 715000, "pool": false },
    { "u": "108", "floor": "1", "type": "C", "area": 352.84, "reg": 645000, "post": 715000, "pool": false },
    { "u": "109", "floor": "1", "type": "E (Flex)", "area": 504.72, "reg": 849000, "post": 935000, "pool": false },
    { "u": "110", "floor": "1", "type": "D", "area": 326.68, "reg": 620000, "post": 690000, "pool": false },
    { "u": "111", "floor": "1", "type": "D", "area": 325.72, "reg": 620000, "post": 690000, "pool": false },
    { "u": "112", "floor": "1", "type": "E (Flex)", "area": 504.61, "reg": 849000, "post": 935000, "pool": false },
    { "u": "113", "floor": "1", "type": "C", "area": 346.71, "reg": 645000, "post": 715000, "pool": false },
    { "u": "114", "floor": "1", "type": "C", "area": 340.79, "reg": 645000, "post": 715000, "pool": false },
    { "u": "115", "floor": "1", "type": "C", "area": 350.47, "reg": 645000, "post": 715000, "pool": false },
    { "u": "116", "floor": "1", "type": "B (Flex)", "area": 385.78, "reg": 699000, "post": 775000, "pool": true },
    { "u": "117", "floor": "1", "type": "C", "area": 354.99, "reg": 645000, "post": 715000, "pool": false },
    { "u": "118", "floor": "1", "type": "D", "area": 315.06, "reg": 620000, "post": 690000, "pool": false },
    { "u": "119", "floor": "1", "type": "D", "area": 319.9, "reg": 620000, "post": 690000, "pool": false },
    { "u": "120", "floor": "1", "type": "D", "area": 313.88, "reg": 620000, "post": 690000, "pool": false },
    { "u": "121", "floor": "1", "type": "D", "area": 318.83, "reg": 620000, "post": 690000, "pool": false },
    { "u": "122", "floor": "1", "type": "D", "area": 321.73, "reg": 620000, "post": 690000, "pool": false },
    { "u": "123", "floor": "1", "type": "D", "area": 326.68, "reg": 620000, "post": 690000, "pool": false },
    { "u": "124", "floor": "1", "type": "E (Flex)", "area": 536.15, "reg": 875000, "post": 975000, "pool": false },

    // Floors 2 to 6 Generated 
    ...generateFloors(2, 6)
];

// Helper to expand the inventory for floors 2-6 based on Floor 1 pattern
function generateFloors(start, end) {
    const floors = [];
    const baseData = [
        { suffix: "01", type: "C", area: 360.59, reg: 595000, post: 649000, pool: false },
        { suffix: "02", type: "C", area: 363.07, reg: 595000, post: 649000, pool: false },
        { suffix: "03", type: "C", area: 349.93, reg: 595000, post: 649000, pool: false },
        { suffix: "04", type: "A (Flex)", area: 583.51, reg: 815000, post: 899000, pool: true },
        { suffix: "05", type: "A (Flex)", area: 583.51, reg: 815000, post: 899000, pool: true },
        { suffix: "06", type: "C", area: 351.12, reg: 595000, post: 649000, pool: false },
        { suffix: "07", type: "C", area: 353.81, reg: 595000, post: 649000, pool: false },
        { suffix: "08", type: "C", area: 352.84, reg: 595000, post: 649000, pool: false },
        { suffix: "09", type: "E (Flex)", area: 504.83, reg: 775000, post: 850000, pool: false },
        { suffix: "10", type: "D", area: 326.58, reg: 560000, post: 620000, pool: false },
        { suffix: "11", type: "D", area: 325.93, reg: 560000, post: 620000, pool: false },
        { suffix: "12", type: "E (Flex)", area: 504.61, reg: 775000, post: 850000, pool: false },
        { suffix: "13", type: "C", area: 346.71, reg: 595000, post: 649000, pool: false },
        { suffix: "14", type: "C", area: 340.79, reg: 595000, post: 649000, pool: false },
        { suffix: "15", type: "C", area: 350.47, reg: 595000, post: 649000, pool: false },
        { suffix: "16", type: "B (Flex)", area: 383.84, reg: 635000, post: 699000, pool: true },
        { suffix: "17", type: "B (Flex)", area: 383.84, reg: 635000, post: 699000, pool: true },
        { suffix: "18", type: "C", area: 354.99, reg: 595000, post: 649000, pool: false },
        { suffix: "19", type: "D", area: 314.95, reg: 560000, post: 620000, pool: false },
        { suffix: "20", type: "D", area: 319.9, reg: 560000, post: 620000, pool: false },
        { suffix: "21", type: "D", area: 313.88, reg: 560000, post: 620000, pool: false },
        { suffix: "22", type: "D", area: 318.83, reg: 560000, post: 620000, pool: false },
        { suffix: "23", type: "D", area: 321.73, reg: 560000, post: 620000, pool: false },
        { suffix: "24", type: "D", area: 326.68, reg: 560000, post: 620000, pool: false },
        { suffix: "25", type: "E (Flex)", area: 536.15, reg: 799000, post: 890000, pool: false }
    ];
    for (let f = start; f <= end; f++) {
        baseData.forEach(item => {
            floors.push({ u: `${f}${item.suffix}`, floor: String(f), type: item.type, area: item.area, reg: item.reg, post: item.post, pool: item.pool });
        });
    }
    return floors;
}

const formatter = new Intl.NumberFormat('en-AE', { style: 'currency', currency: 'AED', maximumFractionDigits: 0 });

$(document).ready(() => {
    initFilters();
    $('#unit-select').on('change', calculate);
    $('input, select').on('change input', calculate);
    $('#btn-pdf').on('click', generateProfessionalPDF);
    calculate();
});

function initFilters() {
    const floors = ["1", "2", "3", "4", "5", "6"];
    const types = ["A (Flex)", "B (Flex)", "C", "D", "E (Flex)"];

    $('#filter-floor').empty().append('<option value="all">ALL FLOORS</option>');
    floors.forEach(f => $('#filter-floor').append(`<option value="${f}">${f}TH FLOOR</option>`));
    $('#filter-type').empty().append('<option value="all">ALL TYPES</option>');
    types.forEach(t => $('#filter-type').append(`<option value="${t}">${t}</option>`));

    $('#unit-select').select2({ placeholder: "SEARCH UNIT NO..." });
    updateUnitDropdown();
    $('#filter-floor, #filter-type').on('change', updateUnitDropdown);
}

function updateUnitDropdown() {
    const floor = $('#filter-floor').val();
    const type = $('#filter-type').val();
    $('#unit-select').empty().append('<option value="">SELECT UNIT</option>');
    
    INVENTORY.forEach(item => {
        const floorMatch = floor === 'all' || item.floor === floor;
        const typeMatch = type === 'all' || item.type.includes(type);
        if (floorMatch && typeMatch) {
            $('#unit-select').append(new Option(`UNIT ${item.u} - ${item.type}`, item.u));
        }
    });
}

// Convert image URL to Base64 for jsPDF
const imageToBase64 = async (localUrl) => {
    try {
        const response = await fetch(localUrl);
        if (!response.ok) throw new Error("Local fetch failed");
        const blob = await response.blob();
        return await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    } catch (e) {
        console.warn(`Local fetch failed for ${localUrl} (likely due to file:// protocol). Attempting remote fallback...`);
        try {
            let filename = localUrl.split('/').pop();
            if (filename.includes('SouthLofts')) {
                filename = filename.replace(/ - /g, '---').replace(/ /g, '-');
            } else if (filename.includes('Unit')) {
                filename = filename.replace(/ - /g, '---').replace(/ /g, '-');
            }
            const remoteUrl = `https://images.premierchoiceint.online/images/2026/05/05/${filename}`;
            const response = await fetch('https://corsproxy.io/?' + encodeURIComponent(remoteUrl));
            if (!response.ok) throw new Error("Remote fetch failed");
            const blob = await response.blob();
            return await new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result);
                reader.onerror = reject;
                reader.readAsDataURL(blob);
            });
        } catch (err) {
            console.error("Failed to load image entirely:", err);
            return null;
        }
    }
};

// Global Date Helper - MUST be defined before calculate() and generateProfessionalPDF()
const addMonths = (date, months) => {
    const d = new Date(date);
    d.setMonth(d.getMonth() + months);
    const parts = d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).split(' ');
    return `${parts[0]} ${parts[1]} ${parts[2]}`;
};

function calculate() {
    const uId = $('#unit-select').val();
    const unit = INVENTORY.find(i => i.u === uId);

    if (!unit) {
        $('#unit-specs').css('opacity', '0');
        return;
    }

    const plan = $('#plan-mode').val();
    
    // Core Base Logic: Get Total from dataset and derive the Rate
    let baseTotal = (plan === 'standard') ? unit.reg : unit.post;
    let baseRate = baseTotal / unit.area;

    $('#unit-specs').css('opacity', '1');
    $('#spec-type').text(unit.type);
    $('#spec-area').text(unit.area);
    $('#pool-container').toggleClass('opacity-50 pointer-events-none', !unit.pool);

    // Property Adjustments
    let adjustedTotal = baseTotal;
    if (!$('#toggle-furnish').is(':checked')) adjustedTotal -= 25000;
    if (unit.pool && $('#toggle-pool').is(':checked')) adjustedTotal += 100000;

    // Apply Discount
    let discPercent = parseFloat($('#input-discount').val()) || 0;
    let netPrice = adjustedTotal * (1 - (discPercent / 100));

    // Mandatory Fees
    const dpAmt = netPrice * 0.20;
    const dldFee = netPrice * 0.04;
    const adminFee = 5250;

    $('#dash-net').text(formatter.format(netPrice));
    $('#dash-dp').text(formatter.format(dpAmt));
    $('#dash-fees').text(formatter.format(dldFee + adminFee));

    const table = $('#schedule-body');
    table.empty();
    let schedule = [];

    // Helper for dates
    const today = new Date();
    const todayStr = addMonths(today, 0);

    // Upfront Details (All Plans)
    schedule.push({ date: todayStr, desc: 'Downpayment', percent: '20%', amt: dpAmt });
    schedule.push({ date: todayStr, desc: 'DLD fee', percent: '4%', amt: dldFee });
    schedule.push({ date: todayStr, desc: 'Admin fee', percent: '-', amt: adminFee });

    // Official Plan Milestones
    if (plan === 'standard') {
        $('#badge-plan').text('STANDARD 60/40 PLAN');
        schedule.push({ date: addMonths(today, 3), desc: '1st Installment', percent: '5%', amt: netPrice * 0.05 });
        schedule.push({ date: addMonths(today, 6), desc: '2nd Installment', percent: '5%', amt: netPrice * 0.05 });
        schedule.push({ date: addMonths(today, 9), desc: '3rd Installment', percent: '5%', amt: netPrice * 0.05 });
        schedule.push({ date: addMonths(today, 12), desc: '4th Installment', percent: '10%', amt: netPrice * 0.10 });
        schedule.push({ date: addMonths(today, 15), desc: '5th Installment', percent: '5%', amt: netPrice * 0.05 });
        schedule.push({ date: addMonths(today, 18), desc: '6th Installment', percent: '5%', amt: netPrice * 0.05 });
        schedule.push({ date: addMonths(today, 21), desc: '7th Installment', percent: '5%', amt: netPrice * 0.05 });
        schedule.push({ date: 'On completion', desc: 'Completion', percent: '40%', amt: netPrice * 0.40 });
        
    } else if (plan === '3yr') {
        $('#badge-plan').text('3-YEAR POST HANDOVER');
        schedule.push({ date: addMonths(today, 5), desc: '1st Installment', percent: '5%', amt: netPrice * 0.05 });
        schedule.push({ date: addMonths(today, 9), desc: '2nd Installment', percent: '5%', amt: netPrice * 0.05 });
        schedule.push({ date: addMonths(today, 13), desc: '3rd Installment', percent: '10%', amt: netPrice * 0.10 });
        schedule.push({ date: addMonths(today, 17), desc: '4th Installment', percent: '5%', amt: netPrice * 0.05 });
        schedule.push({ date: addMonths(today, 21), desc: '5th Installment', percent: '5%', amt: netPrice * 0.05 });
        schedule.push({ date: 'On completion', desc: '6th Installment', percent: '10%', amt: netPrice * 0.10 });
        
        // 3-Year Post Handover Schedule
        const phMonths = [3, 6, 9, 12, 16, 18, 21, 24, 27, 30, 33, 36];
        const phRates = [0.03, 0.03, 0.03, 0.05, 0.03, 0.03, 0.03, 0.05, 0.03, 0.03, 0.03, 0.03];
        phMonths.forEach((m, idx) => {
            // Post handover dates from completion? We don't have exact completion date, so we leave it as relative string
            schedule.push({ date: `${m} mo post-handover`, desc: `${idx + 7}th Installment`, percent: `${(phRates[idx]*100).toFixed(0)}%`, amt: netPrice * phRates[idx] });
        });

    } else if (plan === '5yr') {
        $('#badge-plan').text('5-YEAR POST HANDOVER');
        schedule.push({ date: addMonths(today, 5), desc: '1st Installment', percent: '5%', amt: netPrice * 0.05 });
        schedule.push({ date: addMonths(today, 9), desc: '2nd Installment', percent: '5%', amt: netPrice * 0.05 });
        schedule.push({ date: addMonths(today, 13), desc: '3rd Installment', percent: '10%', amt: netPrice * 0.10 });
        schedule.push({ date: addMonths(today, 17), desc: '4th Installment', percent: '5%', amt: netPrice * 0.05 });
        schedule.push({ date: addMonths(today, 21), desc: '5th Installment', percent: '5%', amt: netPrice * 0.05 });
        schedule.push({ date: 'On completion', desc: '6th Installment', percent: '10%', amt: netPrice * 0.10 });
        
        // 5-Year Post Handover Schedule
        for (let i = 1; i <= 10; i++) {
            schedule.push({ date: `${i * 6} mo post-handover`, desc: `${i + 6}th Installment`, percent: '4%', amt: netPrice * 0.04 });
        }
    }

    schedule.forEach((row, idx) => {
        const percentStr = row.percent !== '-' ? ` (${row.percent})` : '';
        const isUpfront = idx < 3;
        const rowClass = isUpfront ? 'row-balloon' : 'row-milestone';
        const amtColor = isUpfront ? 'var(--color-emerald-green)' : 'var(--color-egyptian-earth)';
        const descColor = isUpfront ? '#64748B' : 'var(--color-egyptian-earth)';
        
        table.append(`
            <tr class="${rowClass}" style="color: var(--color-nor-de-vigne);">
                <td class="p-4 uppercase text-[10px] font-black">${row.date}</td>
                <td class="p-4 text-[10px] uppercase tracking-wide" style="color:${descColor}">${row.desc}${percentStr}</td>
                <td class="p-4 text-right text-[11px] font-bold" style="color:${amtColor}">${formatter.format(row.amt)}</td>
            </tr>
        `);
    });

    window.exportData = { netPrice, dpAmt, dldFee, adminFee, unit, plan, schedule, furnished: $('#toggle-furnish').is(':checked'), pool: $('#toggle-pool').is(':checked') };
}

// ---------------------------------------------------------
// PDF GENERATOR (Based on Official JPEGs)
// ---------------------------------------------------------
async function generateProfessionalPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: 'landscape', format: 'a4' });
    const data = window.exportData;
    if (!data) return alert("Select a unit first.");

    // Retrieve Templates
    const bgTitle = await imageToBase64('./SouthLofts - Sales Offer Title.jpg');
    const bgDetails = await imageToBase64('./SouthLofts - Sales Offer 2nd pg.jpg');
    const bgPlan = await imageToBase64('./SouthLofts - Sales Offer payment plan page.jpg');
    const bgFinal = await imageToBase64('./SouthLofts - Sales Offer Final page.jpg');

    if (!bgTitle || !bgDetails || !bgPlan || !bgFinal) {
        alert("Failed to load PDF templates. If you are opening this file locally (file://), please run it via a local web server, or ensure your internet is connected for the remote fallback.");
        return;
    }

    const today = new Date();
    const dateStr = today.toLocaleDateString('en-GB');
    const serialNo = `SL-${today.getDate()}${today.getMonth()+1}${today.getFullYear().toString().slice(-2)}-${Math.floor(1000 + Math.random() * 9000)}`;

    // PAGE 1: TITLE
    doc.addImage(bgTitle, 'JPEG', 0, 0, 297, 210);
    
    // Add Gotham Fonts
    if (window.GOTHAM_BOOK) {
        doc.addFileToVFS('Gotham-Book.ttf', window.GOTHAM_BOOK);
        doc.addFont('Gotham-Book.ttf', 'Gotham', 'normal');
    }
    if (window.GOTHAM_BOLD) {
        doc.addFileToVFS('Gotham-Bold.ttf', window.GOTHAM_BOLD);
        doc.addFont('Gotham-Bold.ttf', 'Gotham', 'bold');
    }

    doc.setFont("Gotham", "normal");
    
    // Mask the placeholder text with a dark green block, then write the correct text
    doc.setFillColor(8, 55, 42); // Dark green matching background closely
    doc.rect(18, 178, 65, 20, 'F'); 
    
    doc.setTextColor(255, 255, 255); // White text
    doc.setFontSize(10);
    doc.text(`ISSUE DATE: ${dateStr}`, 20, 185); 
    doc.text(`SERIAL NO: ${serialNo}`, 20, 192);

    // PAGE 2: DETAILS
    doc.addPage();
    doc.addImage(bgDetails, 'JPEG', 0, 0, 297, 210);
    
    doc.setTextColor(11, 29, 51);
    doc.setFont("Gotham", "bold");
    doc.setFontSize(8);
    let startY = 48.9; 
    const spacing = 12.25;
    
    const detailsList = [
        { text: data.unit.u, row: 2 },
        { text: data.unit.type, row: 3 },
        { text: `${data.unit.area} SQ.FT`, row: 4 },
        { text: formatter.format(data.netPrice), row: 5 },
        { text: formatter.format(data.dpAmt), row: 6 },
        { text: formatter.format(data.dldFee), row: 7 },
        { text: formatter.format(data.adminFee), row: 8 },
        { text: data.plan === 'standard' ? 'Standard 60/40' : (data.plan === '3yr' ? '3-Yr Post Handover' : '5-Yr Post Handover'), row: 9 },
        { text: data.pool ? "Included (+100k)" : "N/A", row: 10 }
    ];

    detailsList.forEach(item => {
        doc.text(item.text, 80, startY + (item.row * spacing));
    });
    
    const validityDate = addMonths(today, 0); // Need to calculate actual +14 days if needed, but keeping as string for now
    doc.text(addMonths(new Date(today.getTime() + 14*24*60*60*1000), 0), 120, startY + (11 * spacing)); // Overwrite the validity


    // Floor Plan Layout Placement
    const floorPlanUrl = getFloorPlanUrl(data.unit.u);
    if (floorPlanUrl) {
        try {
            const floorPlanB64 = await imageToBase64(floorPlanUrl);
            
            // Get image dimensions to maintain aspect ratio
            const imgDims = await new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => resolve({ w: img.width, h: img.height });
                img.onerror = reject;
                img.src = floorPlanB64;
            });
            
            const maxW = 120;
            const maxH = 140;
            const ratio = Math.min(maxW / imgDims.w, maxH / imgDims.h);
            const finalW = imgDims.w * ratio;
            const finalH = imgDims.h * ratio;
            
            // Center the image within the boundary
            const finalX = 130 + (maxW - finalW) / 2;
            const finalY = 45 + (maxH - finalH) / 2;
            
            // Extract format from base64
            let format = 'JPEG';
            if (floorPlanB64 && floorPlanB64.startsWith('data:image/')) {
                const detected = floorPlanB64.substring(11, floorPlanB64.indexOf(';')).toUpperCase();
                if (detected === 'PNG' || detected === 'WEBP') format = detected;
            }
            
            if (floorPlanB64) {
                doc.addImage(floorPlanB64, format, finalX, finalY, finalW, finalH, undefined, 'FAST');
            } else {
                throw new Error("Floor plan image failed to load");
            }
        } catch (e) {
            console.error("Error loading floor plan:", e);
            renderFloorPlanPlaceholder(doc);
        }
    } else {
        renderFloorPlanPlaceholder(doc);
    }
    
    function renderFloorPlanPlaceholder(doc) {
        doc.setDrawColor(197, 160, 89);
        doc.setLineDashPattern([2, 2], 0);
        doc.rect(130, 45, 120, 140);
        doc.setTextColor(150, 150, 150);
        doc.text("Floor Plan Layout \n(Dynamic Image Insertion)", 190, 115, { align: 'center' });
        doc.setLineDashPattern([], 0); // Reset dash
    }

    // PAGE 3: PAYMENT PLAN
    doc.addPage();
    doc.addImage(bgPlan, 'JPEG', 0, 0, 297, 210);
    
    const mid = Math.ceil(data.schedule.length / 2);
    const col1 = data.schedule.slice(0, mid);
    const col2 = data.schedule.slice(mid);

    let tableY = 46.5;
    const rowHeight = 9.8;
    doc.setFont("Gotham", "bold"); // Bold for table rows based on mockup
    doc.setFontSize(8);
    doc.setTextColor(11, 29, 51);
    
    // Render Left Column
    col1.forEach((row, idx) => {
        const yPos = tableY + (idx * rowHeight);
        doc.text(row.date, 30, yPos, { align: 'center' });
        doc.text(row.desc, 75, yPos, { align: 'center' });
        doc.text(row.percent, 115, yPos, { align: 'center' });
        doc.text(formatter.format(row.amt), 145, yPos, { align: 'center' });
    });

    // Render Right Column
    col2.forEach((row, idx) => {
        const yPos = tableY + (idx * rowHeight);
        doc.text(row.date, 165, yPos, { align: 'center' });
        doc.text(row.desc, 210, yPos, { align: 'center' });
        doc.text(row.percent, 250, yPos, { align: 'center' });
        doc.text(formatter.format(row.amt), 280, yPos, { align: 'center' });
    });

    // Render Total Row at the bottom of Right Column
    const totalY = tableY + (col2.length * rowHeight);
    doc.setFillColor(245, 232, 211); // #F5E8D3 light cream
    doc.rect(148.5, totalY - 6.5, 140.5, rowHeight, 'F');
    doc.setTextColor(11, 29, 51);
    doc.text("Total Payment", 210, totalY, { align: 'center' });
    doc.text("100%", 250, totalY, { align: 'center' });
    doc.text(formatter.format(data.netPrice + data.dldFee + data.adminFee), 280, totalY, { align: 'center' });

    // PAGE 4: FINAL PAGE
    doc.addPage();
    doc.addImage(bgFinal, 'JPEG', 0, 0, 297, 210);

    doc.save(`${serialNo}_SouthLofts1_SalesOffer.pdf`);
}