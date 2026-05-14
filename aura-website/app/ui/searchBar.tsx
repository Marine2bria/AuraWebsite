"use client";

import { useState } from "react";
import { DayPicker, DateRange} from "react-day-picker";

type Props = {
    calendarTop: boolean
}

export default function SearchBar(calendarTop :Props) {
    const [open, setOpen] = useState<boolean>(false);
    const [range, setRange] = useState<DateRange | undefined>(undefined);
    const [flexibility, setFlexibility] = useState<number>(0);

    const formatDate = (date?: Date) => {
        return date ? date.toLocaleDateString() : "";
    };
    console.log(calendarTop)

    return (
        <div className={`relative w-full p-2 justify-center flex`}>
            {/*        CALENDRIER           */}
            {open && (
                <div className={`absolute ${calendarTop ? "bottom-4/5" : "top-4/5"} w-80 z-50 justify-center card`}>
                    <DayPicker
                        mode="range"
                        selected={range}
                        onSelect={setRange}
                        className="rdp text-text-muted p-2"
                    />

                    <div className="text-muted p-2">
                        flex
                    </div>
                </div>
            )}
            <form className={`grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full max-w-6xl gap-4 p-4 card`}>
                <div className={`flex flex-col`}>
                    <label className={`text-base`}>
                        Destination
                    </label>
                    <select
                        name="localisation"
                        className="input"
                        defaultValue={""}
                    >
                        <option value="" disabled>
                            Où allez-vous ?
                        </option>

                        <option value="bastia">
                            Bastia
                        </option>

                        <option value="miomo">
                            Miomo
                        </option>

                        <option value="st-florent">
                            St-Florent
                        </option>

                        <option value="patrimonio">
                            Patrimonio
                        </option>
                    </select>
                </div>
                <div className={`flex flex-col`}>
                    <label className={`text-base`}>
                        Dates
                    </label>
                    <span
                        className={`input `}
                        onClick={() => setOpen(!open)}
                    >
                        {range?.from && range?.to
                            ? `${formatDate(range.from)} - ${formatDate(range.to)}`
                            : "Any time"}
                    </span>
                </div>
                <div className={`flex flex-col `}>
                    <label className={`text-base`}>
                        Voyageurs
                    </label>
                    <input
                        className={`input`}
                        type="number"
                        placeholder="1"
                        name="guests"
                        min="1"
                        max="20"
                    />
                </div>
                <div className={`flex items-end`}>
                    <button
                        className={`btn-primary w-full`}
                        type="submit"
                    >
                        Rechercher
                    </button>
                </div>
            </form>
        </div>
    )
}