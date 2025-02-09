import { useState } from "react";
import Button from "./ui/Button";

interface filterProps {
    onApplyFilters: (filters: Record<string, boolean>) => void
}

const filtersList = [
    { key: "vegetarian", label: "Vegetarian" },
    { key: "vegan", label: "Vegan" },
    { key: "dessert", label: "Dessert" },
    { key: "chicken", label: "Chicken" },
    { key: "meat", label: "Meat" },
    { key: "salad", label: "Salad" }
];

export default function FilterPanel({ onApplyFilters }: filterProps) {
    const [filters, setFilters] = useState<Record<string, boolean>>({})

    const handleChange = (key: string) => {
        setFilters((prev) => ({
            ...prev,
            [key]: !prev[key]
        }))
    }

    return (
        <div className="filter-panel">
            <div className="filter-labels">
                {filtersList.map(({ key, label }) => (
                    <label key={key} className="filter-label">
                        <input
                            type="checkbox"
                            checked={filters[key] || false}
                            onChange={() => handleChange(key)}
                        />
                        {label}
                    </label>
                ))}
            </div>

            <Button onClick={() => onApplyFilters(filters)}>
                Добавить фильтры
            </Button>
        </div>
    )
}