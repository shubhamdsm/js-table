function fn(){
    let doc = new jsPDF();
doc.autoTable({html: '#table-content'})
doc.save('table.pdf')
}

