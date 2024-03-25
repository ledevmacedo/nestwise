
interface UserBalanceProps {
    userBalance: string;
}

export function UserBalance({ userBalance }: UserBalanceProps) {
    return (
        <div className="w-full py-6 flex gap-3 items-end">
            <h1 className="text-3xl font-semibold">{userBalance}</h1>
            <p className="text-base font-semibold opacity-60">Balance</p>
        </div>
    )
}