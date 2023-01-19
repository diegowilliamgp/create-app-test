function deleteItem(id) {
    
    fetch(path + id, {
        method: 'DELETE'
    });
    
    setTimeout(() => {
        window.location.reload();
    }, 500)
}