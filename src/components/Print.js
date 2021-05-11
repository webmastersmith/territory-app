

export default function(owners) {
    return owners.map(owner => {
        return (`Property ID: ${owner.landId}\r\nName: ${owner.name}\nAddress: ${owner.physicalAddress} ${owner.physicalCity} ${owner.physicalState} ${owner.physicalZip}\r\n-----------------------------------------------\r\n\r\n`)
    })
}