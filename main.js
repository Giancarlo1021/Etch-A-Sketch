const grid = () => { 
        for (var i = 0; i < 4; i++) {
            var row = document.createElement('div');
            row.className = "row";
            for (var j = 0; j < 4; j++) {
                var box = document.createElement('div');
                box.className = "box";
                row.appendChild(box);
            }                
            document.getElementById('boxParent').appendChild(row);
        }
    }

grid();