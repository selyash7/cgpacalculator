function calculateCGPA() {
    // Helper function to get input values safely
    function getValue(id) {
      return parseFloat(document.getElementById(id).value) || 0;
    }
  
    // Helper function to calculate grade point from score
    function getGradePoint(score) {
      if (score >= 90) return 10;
      if (score >= 80) return 9;
      if (score >= 70) return 8;
      if (score >= 60) return 7;
      if (score >= 50) return 6;
      if (score >= 40) return 5;
      return 0; // Fail
    }
  
    // Placeholder for grade points
    let chemistryGrade, programmingGrade, statisticsGrade;
    let mathGrade, wcGrade, ciGrade, edwGrade;
  
    // Chemistry inputs
    let chemistryScore =
      (getValue('chem-ct') / 30) * 20 * 0.3 +
      (getValue('chem-se') / 50) * 60 * 0.4 +
      (getValue('chem-as') / 20) * 20 * 0.3 +
      (getValue('chem-lab') / 100) * 60 * 0.3 +
      (getValue('chem-lpw') / 40) * 40 * 0.3 +
      (getValue('chem-see') / 100) * 100 * 0.4;
    chemistryGrade = getGradePoint(chemistryScore);
  
    // C Programming inputs
    let programmingScore =
      (getValue('cp-ct') / 30) * 20 * 0.3 +
      (getValue('cp-se') / 50) * 60 * 0.4 +
      (getValue('cp-as') / 20) * 20 * 0.3 +
      (getValue('cp-lab') / 100) * 60 * 0.3 +
      (getValue('cp-lpw') / 40) * 40 * 0.3 +
      (getValue('cp-see') / 100) * 100 * 0.4;
    programmingGrade = getGradePoint(programmingScore);
  
    // Statistics inputs
    let statisticsScore =
      (getValue('stats-ct') / 30) * 20 * 0.3 +
      (getValue('stats-se') / 50) * 60 * 0.4 +
      (getValue('stats-as') / 20) * 20 * 0.3 +
      (getValue('stats-lab') / 100) * 60 * 0.3 +
      (getValue('stats-lpw') / 40) * 40 * 0.3 +
      (getValue('stats-see') / 100) * 100 * 0.4;
    statisticsGrade = getGradePoint(statisticsScore);
  
    // Mathematics I inputs
    let mathScore =
      (getValue('math-ct') / 30) * 20 * 0.3 +
      (getValue('math-se') / 50) * 50 * 0.4 +
      (getValue('math-as') / 30) * 30 * 0.3 +
      (getValue('math-see') / 100) * 100 * 0.4;
    mathGrade = getGradePoint(mathScore);
  
    // Written Communication inputs
    let wcScore =
      (getValue('wc-ct') / 30) * 30 * 0.3 +
      (getValue('wc-se') / 50) * 50 * 0.4 +
      (getValue('wc-as') / 50) * 50 * 0.3 +
      (getValue('wc-see') / 100) * 100 * 0.4;
    wcGrade = getGradePoint(wcScore);
  
    // Contemporary India inputs
    let ciScore =
      (getValue('ci-ct') / 30) * 30 * 0.3 +
      (getValue('ci-se') / 50) * 50 * 0.4 +
      (getValue('ci-as') / 30) * 30 * 0.3 +
      (getValue('ci-see') / 100) * 100 * 0.4;
    ciGrade = getGradePoint(ciScore);
  
    // Engineering Drawing & Workshop inputs
    let edwScore =
      (getValue('edw-ct') / 20) * 20 * 0.3 +
      (getValue('edw-se') / 50) * 50 * 0.4 +
      (getValue('edw-as') / 40) * 40 * 0.3 +
      (getValue('ed-sheets') / 30) * 30 * 0.6 +
      (getValue('ws-exercises') / 50) * 50 * 0.6 +
      (getValue('edw-lpw') / 40) * 40 * 0.4;
    edwGrade = getGradePoint(edwScore);
  
    // Calculate CGPA
    const totalGradePoints =
      (chemistryGrade +
        programmingGrade +
        statisticsGrade +
        mathGrade +
        wcGrade +
        ciGrade +
        edwGrade) *
      3; // Multiply each grade point by its credit
    const totalCredits = 7 * 3; // 7 subjects, each with 3 credits
    const cgpa = totalGradePoints / totalCredits;
  
    // Display result
    document.getElementById('result').innerText = `Your CGPA is: ${cgpa.toFixed(2)}`;
  }
  