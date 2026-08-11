function PlantPage() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  function handleNewPlant(newPlant) {
    setPlants((prevPlants) => [...prevPlants, newPlant]);
  }

  return (
    <main>
      <NewPlantForm onAddPlant={handleNewPlant} />
      <Search />
      <PlantList plants={plants} />
    </main>
  );
}