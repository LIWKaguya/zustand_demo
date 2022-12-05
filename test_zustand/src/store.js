import create from 'zustand'

const useStore = create((set) => ({
    people: ['Me', 'You'],
    addPerson: (person) => set((state) => ({ people: [...state.people, person]}))
}))

export default useStore

// nice