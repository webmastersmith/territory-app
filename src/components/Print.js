

export default function(owners) {
    return owners.map(owner => {
        return (`Property ID: ${owner.landId}\r\nName: ${owner.name}\nProperty Address: ${owner.physicalAddress} ${owner.physicalCity} ${owner.physicalState} ${owner.physicalZip}\r\nMailing Address:  ${owner.mailingAddress} ${owner.mailingCity} ${owner.mailingState} ${owner.mailingZip}\r\n-----------------------------------------------\r\n\r\n`)
    })
}