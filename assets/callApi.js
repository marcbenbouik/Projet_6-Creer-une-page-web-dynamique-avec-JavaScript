export async function getAllWorks() {
  const response = await fetch("http://localhost:5678/api/works");
  const data = await response.json();
  return data;
};

// export let works = [];

const token = localStorage.getItem('token');

export async function getAllCategories() {
  const response = await fetch("http://localhost:5678/api/categories");
  const data = await response.json();
  return data;
};

export async function addWorks(formData2) {
  const response = await fetch("http://localhost:5678/api/works", {
    method: 'POST',
    body: formData2,
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });
  if (response.ok) {
    const data = await response.json();
    alert("L'image : " + data.title + " à bien été ajoutée");
  }
  else {
    alert("ERREUR !!! ");
  }
  
};

export async function deleteWorks(idDeletedWork) {
  const response = await fetch(`http://localhost:5678/api/works/${idDeletedWork}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${token}`
    }
  });
  if (response.ok) {
    alert("Image supprimée !");
  }
  else {
    alert("Une erreur est survenue !");
  };

};